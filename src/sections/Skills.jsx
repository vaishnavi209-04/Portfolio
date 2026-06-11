import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "Python", "TypeScript","GO"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js","FastAPI"],
  },
  {
    title: "Cloud",
    skills: ["GCP", "Cloud Run", "Kubernetes", "Vertex AI","Compute Engine","VPC","IAM"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "GitHub", "GitHub Actions", "Render", "Vercel","Cloud Logging"],
  }
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3 font-semibold text-violet-400">
          Skills
        </p>

        <h2 className="mb-12 text-5xl font-bold">
          Technologies I Work With
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-4 py-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;