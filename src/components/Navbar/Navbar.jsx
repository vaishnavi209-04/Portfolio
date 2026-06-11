import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 px-6">
  <nav
  className="
    mx-auto
    flex
    max-w-7xl
    items-center
    justify-between
    px-6
    py-6
  "
>
    
        <div className="text-xl font-bold tracking-wide">
            <a href="#hero">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
  VM
</span>
</a>
        </div>

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
          <a href="#achievements" className="text-zinc-400 transition-all duration-300 hover:text-violet-400">
            Achievements
          </a>

          <a href="#contact" className="text-zinc-400 transition-all duration-300 hover:text-violet-400">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
  href="/VaishnaviMishra_Resume-phone.pdf"
  target="_blank"
  rel="noreferrer"
  className="
    rounded-2xl
    border
    border-white/10
    px-6
    py-3
    font-semibold
    transition
    hover:border-violet-400
    hover:text-violet-300
  "
>
  Resume
</a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;