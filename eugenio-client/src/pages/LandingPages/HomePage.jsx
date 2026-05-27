import Button from "../../components/Button";
import NU_Project from "../../assets/NU_Project.jpg";
import NU_Picture1 from "../../assets/NU_Picture1.jpg";
import NU_Picture2 from "../../assets/NU_Picture2.jpg";
import NU_Picture3 from "../../assets/NU_Picture3.jpg";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className=" bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-900">
              Home of the nation builders.
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Welcome to National University
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-900 sm:text-base">
              For more than 125 years, National University has been recognized
              for its academic excellence which has formed the country’s most
              successful movers and shakers in various industries.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-900 sm:text-base">
              As an institution, we continue to evolve and expand by making
              education accessible within your reach.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-900 sm:text-base">
              We’re in the business of securing your future and elevating the
              future of our nation through Education that works.
            </p>

            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-solid border-zinc-900 bg-zinc-100 p-2">
            <div className="overflow-hidden rounded-[1.25rem]">
              <img
                src={NU_Project}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick overview blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">07</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Colleges
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">30</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Undergraduate Courses
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">10</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Masteral Courses
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Doctoral Courses
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Our Campus, in a glance
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem] bg-zinc-200 aspect-[4/3]">
              <img
                src={NU_Picture1}
                alt="Feature"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Main Building
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A clean placeholder for title, short text, and action.
            </p>

            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem] bg-zinc-200 aspect-[4/3]">
              <img
                src={NU_Picture2}
                alt="Feature"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Jhocson Memorial Building
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Balanced spacing keeps the card layout easy to scan.
            </p>

            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem] bg-zinc-200 aspect-[4/3]">
              <img
                src={NU_Picture3}
                alt="Feature"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Jhocson Memorial Statue
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Repeated blocks give the page a consistent wireframe rhythm.
            </p>

            <Button className="mt-4" variant="primary">
              View More
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
