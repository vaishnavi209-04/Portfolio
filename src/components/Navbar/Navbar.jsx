import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-4 z-50 px-6">
  <nav
    className="
      mx-auto
      flex
      max-w-7xl
      items-center
      justify-between
      rounded-2xl
      border
      border-white/10
      bg-white/5
      px-6
      py-4
      backdrop-blur-xl
      shadow-lg
    "
  >
        <h1 className="text-xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
  VM
</span>
        </h1>

        <div className="flex items-center gap-8">
          <a href="#about" className="text-zinc-400 transition-all duration-300 hover:text-violet-400">
            About
          </a>

          <a href="#skills" className="text-zinc-400 transition-all duration-300 hover:text-violet-400">
            Skills
          </a>

          <a href="#projects" className="text-zinc-400 transition-all duration-300 hover:text-violet-400">
            Projects
          </a>

          <a href="#contact" className="text-zinc-400 transition-all duration-300 hover:text-violet-400">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-violet-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] ">
            Resume
          </button>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;