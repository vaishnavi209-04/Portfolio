import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-black"
      }`}
    >
      <Navbar />

      <main>
        <section className="px-6 py-24">
          <h1 className="text-6xl font-bold">
            Vaishnavi
          </h1>

          <p className="mt-6 max-w-3xl text-xl">
            Full-Stack Developer & Competitive Programmer
            building scalable applications powered by cloud and AI.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;