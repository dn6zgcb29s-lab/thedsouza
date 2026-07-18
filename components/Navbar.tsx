export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <h1 className="text-white text-xl font-bold">
          Glen D'Souza
        </h1>

        <ul className="hidden md:flex gap-8 text-slate-300">

          <li>
            <a href="#" className="hover:text-sky-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-sky-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-sky-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-sky-400 transition">
              Blog
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-sky-400 transition">
              Contact
            </a>
          </li>

        </ul>

        <button className="bg-sky-500 hover:bg-sky-400 transition px-5 py-2 rounded-lg text-white font-medium">
          Let's Talk
        </button>

      </div>
    </nav>
  );
}