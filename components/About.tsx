export default function About() {
  return (
    <section id="about" className="bg-slate-900 px-8 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-4xl font-bold">
          Experience &amp; Approach
        </h2>

        <p className="mb-6 text-lg leading-8 text-slate-300">
          I&apos;m Glen D&apos;Souza, an IT professional with over two decades
          of experience. I&apos;ve learned that the most reliable technology is
          built with an owner&apos;s mindset—focusing on practical solutions
          that solve real-world problems and deliver lasting value.
        </p>

        <p className="text-lg leading-8 text-slate-300 mb-4">
          Today, my technical focus centers on four key areas:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <li className="flex items-center gap-3 text-slate-300">
            <span
              className="h-2 w-2 rounded-full bg-sky-400 flex-shrink-0"
              aria-hidden="true"
            ></span>
            <span>Artificial Intelligence</span>
          </li>
          <li className="flex items-center gap-3 text-slate-300">
            <span
              className="h-2 w-2 rounded-full bg-sky-400 flex-shrink-0"
              aria-hidden="true"
            ></span>
            <span>Web Development</span>
          </li>
          <li className="flex items-center gap-3 text-slate-300">
            <span
              className="h-2 w-2 rounded-full bg-sky-400 flex-shrink-0"
              aria-hidden="true"
            ></span>
            <span>Automation</span>
          </li>
          <li className="flex items-center gap-3 text-slate-300">
            <span
              className="h-2 w-2 rounded-full bg-sky-400 flex-shrink-0"
              aria-hidden="true"
            ></span>
            <span>Digital Innovation</span>
          </li>
        </ul>

        <p className="text-lg leading-8 text-slate-300">
          I am committed to documenting everything I learn along the way,
          turning complex challenges into practical, shared knowledge.
        </p>
      </div>
    </section>
  );
}
