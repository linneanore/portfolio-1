import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm text-muted-foreground">About me</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Developer with a strong UX mindset
          </h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            I’m a system developer and frontend-focused engineer with a strong
            interest in accessibility, performance, and clean architecture. I
            enjoy turning complex requirements into simple, intuitive user
            experiences.
          </p>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            I have experience working with TypeScript, React, modern CSS, and
            component-based design systems. I value collaboration, clear
            communication, and writing code that’s easy to maintain and scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}