import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 font-semibold text-violet-400">
          Certifications
        </p>

        <h2 className="mb-12 text-5xl font-bold">
          Learning Journey
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold">
              Google Cloud Skill Boost
            </h3>

            <p className="mt-3 text-zinc-400">
              2025
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold">
              Cloud Computing – LearnQuest
            </h3>

            <p className="mt-3 text-zinc-400">
              Coursera • 2024
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;