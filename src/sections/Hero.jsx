import { motion } from "framer-motion";
import FloatingBadge from "../components/FloatingBadge";

const Hero = () => {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
      {/* Left Side */}
      <div className="flex-1">
        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="mb-4 text-violet-400 font-semibold"
>
  Hello, I'm
</motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8 }}
                   className="text-7xl font-extrabold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
            Vaishnavi
        </motion.h1>

        <h2 className="mt-6 text-3xl font-bold">
          Full-Stack Developer
        </h2>

        <h2 className="text-3xl font-bold text-violet-400">
          & Competitive Programmer
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Building scalable applications powered by
          cloud and AI.
        </p>


      </div>

      {/* Right Side */}
      <div className="relative hidden flex-1 items-center justify-center lg:flex">
        <motion.div
        className="h-96 w-96 rounded-full bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-blue-500/30 blur-3xl"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="h-96 w-96 rounded-full bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-blue-500/30 blur-3xl"
  />

        <div className="absolute h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />


        <div className="absolute h-64 w-64 rounded-full border border-violet-400/40" />

        <div className="absolute h-48 w-48 rounded-full border border-blue-400/40" />

        <div className="absolute h-80 w-80 rounded-full border border-violet-500/10" />
         {/* Floating Badges */}

 <FloatingBadge
  text="React"
  className="top-24 right-40"
  delay={0}
/>

<FloatingBadge
  text="Java"
  className="top-56 left-32"
  delay={0.5}
/>

<FloatingBadge
  text="GCP"
  className="top-64 right-16"
  delay={1}
/>

<FloatingBadge
  text="1000+ LeetCode"
    className="bottom-0 center-40"
  delay={1.5}
/>

      </div>
    </section>
  );
};

export default Hero;