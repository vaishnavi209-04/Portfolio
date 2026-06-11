import { motion } from "framer-motion";
import workspace2 from "../assets/hero/workspace2.png";
import FloatingBadge from "../components/FloatingBadge";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen max-w-7xl items-center px-6"
    >
      {/* LEFT SIDE */}
      <div className="flex-1">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-semibold text-violet-400"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-7xl
            font-extrabold
            bg-gradient-to-r
            from-violet-400
            via-fuchsia-400
            to-blue-400
            bg-clip-text
            text-transparent
          "
        >
          Vaishnavi
        </motion.h1>

        <h2 className="mt-6 text-3xl font-bold">
          Full-Stack Developer
        </h2>

        <h2 className="text-3xl font-bold text-violet-400">
          & Competitive Programmer
        </h2>

        <p className="mt-6 max-w-xl text-lg text-zinc-400">
          Building scalable applications powered by
          cloud and AI.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative hidden flex-1 items-center justify-center lg:flex">
        <div
  className="
    absolute
    h-[450px]
    w-[700px]
    rounded-full
    bg-violet-600/20
    blur-[120px]
  "
/>


        <img
          src={workspace2}
          alt="Workspace"
          className="relative z-10 w-[1050px] object-contain"
        />

        <FloatingBadge
          text="React"
          className="top-20 left-20"
        />

        <FloatingBadge
          text="Java"
          className="top-72 left-0"
        />

        <FloatingBadge
          text="GCP"
          className="bottom-40 right-0"
        />

        <FloatingBadge
          text="AI"
          className="top-32 right-10"
        />

        <FloatingBadge
          text="Knight Badge"
          className="bottom-10 left-32"
        />
      </div>
    </section>
  );
};

export default Hero;