import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-100 text-zinc-900">
      <NavBar />
      <main className="flex-grow pt-20">
        <div className="flex w-full flex-col gap-6">
          <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Error
              </p>

              <h1 className="text-5xl font-bold leading-tight text-zinc-900 sm:text-6xl">
                404
              </h1>

              <p className="mt-4 text-lg leading-7 text-zinc-600 sm:text-xl">
                Page not found. The page you're looking for doesn't exist or has
                been moved.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Button to="/" variant="secondary">
                  Return To Home
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
