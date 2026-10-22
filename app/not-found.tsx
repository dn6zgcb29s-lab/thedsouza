import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex flex-1 items-center justify-center px-6 py-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-2xl text-center">
        <p className="eyebrow justify-center">404 · Page not found</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          This page isn&apos;t here.
        </h1>
        <p className="lead mx-auto mt-6 max-w-xl">
          The address may be out of date, or the page may have moved. Head back
          to the homepage or browse the project work.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            Go to homepage
          </Link>
          <Link href="/#projects" className="btn-secondary">
            Browse projects
          </Link>
        </div>
      </div>
    </main>
  );
}
