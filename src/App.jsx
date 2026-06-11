import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-zinc-950 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="p-8">
        <button
          onClick={toggleTheme}
          className="border px-4 py-2 rounded-lg"
        >
          Toggle Theme
        </button>

        <h1 className="mt-10 text-5xl font-bold">
          Vaishnavi
        </h1>

        <p className="mt-4 text-xl max-w-3xl">
          Full-Stack Developer & Competitive Programmer
          building scalable applications powered by cloud and AI.
        </p>
      </div>
    </div>
  );
}

export default App;