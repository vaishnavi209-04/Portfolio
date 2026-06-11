const ProjectCard = ({ project }) => {
    console.log(project);
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-violet-500/40
        hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
      "
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-3xl font-bold">
              {project.title}
            </h3>

            {project.status && (
              <span className="rounded-full bg-green-500/15 px-3 py-1 text-sm text-green-300">
                {project.status}
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
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              rounded-xl
              border
              border-white/10
              px-5
              py-3
              transition
              hover:border-violet-400
            "
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              rounded-xl
              bg-violet-600
              px-5
              py-3
              transition
              hover:scale-105
            "
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;