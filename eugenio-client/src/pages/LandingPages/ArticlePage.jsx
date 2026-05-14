import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button.jsx";
import { fetchArticles } from "../../services/ArticleService";

function ArticlePage() {
  const { name } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const { data } = await fetchArticles();
        const list = Array.isArray(data) ? data : data.articles || [];
        const found = list.find((a) => a.name === name);
        setArticle(found);
      } catch (err) {
        console.error("Error loading article:", err);
      } finally {
        setLoading(false);
      }
    };
    loadArticle();
  }, [name]);

  if (loading)
    return <div className="p-20 text-center">Loading article content...</div>;

  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-zinc-900">
              Article not found
            </h1>
            <Button to="/articles" className="mt-6">
              Back to Articles
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/articles"> Back to Articles</Button>
          </div>

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Article
          </p>

          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            {article.title}
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            {article.name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex aspect-square items-center justify-center rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200 mb-8 overflow-hidden shadow-xl">
            <img
              src={
                article.image?.startsWith("http") ||
                article.image?.startsWith("/")
                  ? article.image
                  : `/${article.image}`
              }
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-justify prose prose-sm max-w-none space-y-4 text-zinc-700">
            {(Array.isArray(article.content)
              ? article.content
              : [article.content]
            ).map((paragraph, index) => (
              <p
                key={index}
                className="text-justify leading-7 text-zinc-700 whitespace-pre-wrap"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-zinc-900 pt-6">
            <Button to="/articles">Back to Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;
