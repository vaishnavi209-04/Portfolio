import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-3 text-violet-400 font-semibold">
          About Me
        </p>

        <h2 className="mb-10 text-5xl font-bold">
          Who I Am
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-8 text-zinc-400">
              I'm Vaishnavi, a Computer Science Engineering student
              passionate about Full-Stack Development, Cloud Computing,
              and Problem Solving.

              I have solved 1000+ problems on LeetCode and enjoy
              building scalable applications using modern technologies.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold">
                1000+
              </h3>

              <p className="mt-2 text-zinc-400">
                Problems Solved
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold">
                Knight
              </h3>

              <p className="mt-2 text-zinc-400">
                LeetCode Badge
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold">
                React
              </h3>

              <p className="mt-2 text-zinc-400">
                Frontend Development
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold">
                GCP
              </h3>

              <p className="mt-2 text-zinc-400">
                Cloud Computing
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;