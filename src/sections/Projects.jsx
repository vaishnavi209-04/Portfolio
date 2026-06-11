import { motion } from "framer-motion";
import projects from "../data/Projects";
import ProjectCard from "../components/ProjectCard";

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
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;