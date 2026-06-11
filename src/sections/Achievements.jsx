import { motion } from "framer-motion";

const achievements = [
  {
    value: "1878",
    label: "Peak LeetCode Rating",
  },
  {
    value: "Top 4%",
    label: "Global Ranking",
  },
  {
    value: "1000+",
    label: "Problems Solved",
  },
  {
    value: "621",
    label: "Biweekly Contest Rank",
  },
  {
    value: "Top 1%",
    label: "Hackathon Ranking",
  },
  {
    value: "60+",
    label: "GCP Skill Badges",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-3 font-semibold text-violet-400">
          Achievements
        </p>

        <h2 className="mb-12 text-5xl font-bold">
          Numbers That Matter
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
            >
              <h3 className="text-4xl font-bold text-violet-400">
                {item.value}
              </h3>

              <p className="mt-3 text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;