import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <h1 className="text-xl font-bold tracking-wide">
          Vaishnavi
        </h1>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="hover:opacity-70 transition">
            About
          </a>

          <a href="#skills" className="hover:opacity-70 transition">
            Skills
          </a>

          <a href="#projects" className="hover:opacity-70 transition">
            Projects
          </a>

          <a href="#contact" className="hover:opacity-70 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-xl border px-4 py-2 text-sm font-medium hover:scale-105 transition">
            Resume
          </button>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;