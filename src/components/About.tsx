import { motion } from "framer-motion";
import { Code2, Sparkles, Globe, Accessibility } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend-first",
    text: "React + TypeScript with a focus on maintainable components and clean architecture.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "WCAG-minded UI with semantic HTML, keyboard support and thoughtful contrast.",
  },
  {
    icon: Sparkles,
    title: "Polished UI",
    text: "Micro-interactions, spacing, and details that make interfaces feel premium.",
  },
  {
    icon: Globe,
    title: "Real projects",
    text: "I build with users in mind—performance, UX and scalability included.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container-custom py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div>
            <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4">
              ABOUT
            </p>

            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              Building modern web experiences with{" "}
              <span className="text-gradient">clarity</span>
              <span className="text-primary">.</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              I’m Linnea, a frontend developer who enjoys turning ideas into clean,
              accessible and responsive interfaces. I care about great UX, scalable
              component structure, and the little details that make a product feel
              “finished”.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              I’ve worked with real-world systems and I enjoy collaborating, iterating,
              and shipping improvements that users actually notice.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind", "WCAG", "Framer Motion"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 glass rounded-2xl p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Currently:</span>{" "}
                refining this portfolio, shipping polished UI, and looking for the next
                opportunity to grow as a frontend developer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="glass-strong rounded-3xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg">{h.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {h.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}