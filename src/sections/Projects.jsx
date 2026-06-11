import { motion } from "framer-motion";

const projects = [
  {
    title: "CORTEX",
    duration: "Apr 2026 - Present",
    description:
      "Real-time railway scheduling system using modified Dijkstra, Time Expanded Graphs and CP-SAT optimization for conflict-aware train scheduling.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "XGBoost",
    ],
    featured: true,
  },
  {
    title: "Muse.AI",
    duration: "Sep 2025 - Nov 2025",
    description:
      "AI-powered SaaS platform for article generation, image generation and ATS-based resume analysis using Gemini AI.",
    tech: [
      "React",
      "Express",
      "PostgreSQL",
      "Gemini AI",
      "Clerk",
      "Tailwind",
    ],
    featured: false,
  },
  {
    title: "SkySense",
    duration: "Aug 2025",
    description:
      "Weather application delivering real-time global weather forecasts with dynamic UI and optimized backend APIs.",
    tech: [
      "React",
      "Express",
      "OpenWeather API",
      "Tailwind",
      "Unsplash API",
    ],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3 font-semibold text-violet-400">
          Projects
        </p>

        <h2 className="mb-12 text-5xl font-bold">
          Things I've Built
        </h2>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`
                group rounded-3xl border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-md
                transition-all duration-300
                hover:border-violet-500/40
                hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
              `}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <h3 className="text-3xl font-bold">
                      {project.title}
                    </h3>

                    {project.featured && (
                      <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-300">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mb-4 text-sm text-zinc-500">
                    {project.duration}
                  </p>

                  <p className="max-w-3xl text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="rounded-xl border border-white/10 px-5 py-3 transition hover:border-violet-400">
                    GitHub
                  </button>

                  <button className="rounded-xl bg-violet-600 px-5 py-3 transition hover:scale-105">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;