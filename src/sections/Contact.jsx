const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-32 text-center"
    >
      <p className="mb-3 font-semibold text-violet-400">
        Contact
      </p>

      <h2 className="mb-6 text-5xl font-bold">
        Let's Build Something Together
      </h2>

      <p className="mx-auto mb-10 max-w-2xl text-zinc-400">
        I'm always open to discussing software engineering,
        cloud computing, full-stack development, and exciting opportunities.
      </p>

      <a
        href="mailto:connect.with.vaishnavimishra@gmail.com"
        className="rounded-xl bg-violet-600 px-8 py-4 font-semibold"
      >
        Get In Touch
      </a>
    </section>
  );
};

export default Contact;