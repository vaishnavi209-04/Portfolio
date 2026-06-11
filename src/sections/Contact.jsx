import { motion } from "framer-motion";
import { useState } from "react";
import socials from "../data/socials";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:connect.with.vaishnavimishra@gmail.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=Name: ${encodeURIComponent(
      formData.name
    )}%0AEmail: ${encodeURIComponent(formData.email)}%0A%0AMessage:%0A${encodeURIComponent(
      formData.message
    )}`;

    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
      },
    }),
    hover: {
      scale: 1.15,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Content - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <p className="mb-3 font-semibold text-violet-400">
            Contact
          </p>

          <h2 className="mb-10 text-4xl font-bold leading-tight md:text-5xl">
            Let's work <br /> together
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-all focus:bg-zinc-800 focus:ring-2 focus:ring-violet-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-all focus:bg-zinc-800 focus:ring-2 focus:ring-violet-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full rounded-lg bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-all focus:bg-zinc-800 focus:ring-2 focus:ring-violet-500 resize-none"
                placeholder="Type your message here..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-violet-600 px-8 py-3 font-bold text-white transition-all hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-600/50 disabled:opacity-50"
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side - Social Icons Cluster */}
        <motion.div
          className="relative flex items-center justify-center h-80 lg:h-96"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-72 h-72">
            {socials.map((social, i) => {
              const Icon = social.icon;
              // Calculate circular positioning with fixed radius
              const totalIcons = socials.length;
              const angle = (i * (360 / totalIcons) - 90) * (Math.PI / 180);
              const radius = 110;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={iconVariants}
                  whileHover="hover"
                  className="absolute flex h-20 w-20 items-center justify-center rounded-full border border-violet-500/30 bg-gradient-to-br from-violet-900/20 to-violet-900/10 text-2xl text-violet-400 shadow-lg transition-all hover:border-violet-400/60 hover:shadow-violet-500/50"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  title={social.label}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;