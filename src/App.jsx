import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  const { darkMode } = useTheme();

  return (
  <div
    className={`relative min-h-screen transition-all duration-300 ${
      darkMode
        ? "bg-zinc-950 text-white"
        : "bg-white text-black"
    }`}
  >
    {/* Grid Background */}
    <div
      className={`absolute inset-0 -z-10 ${
        darkMode
          ? "bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"
          : "bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]"
      } bg-[size:60px_60px]`}
    />

    <Navbar />
    <Hero />
    <About />
  </div>
);
}

export default App;