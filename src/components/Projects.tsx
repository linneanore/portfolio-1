import { motion } from "framer-motion";

const projects = [
  {
    title: "Cinema Booking",
    description:
      "Seat selection, real-time booking flow and a clean kiosk-like UX for a cinema website.",
    tags: ["React", "TypeScript", "Node", "Supabase"],
    live: "#",
    code: "#",
  },
  {
    title: "WCAG Accessibility Audit",
    description:
      "Accessibility evaluation of Swedish e-commerce sites using Lighthouse & Axe (WCAG 2.1 AA).",
    tags: ["WCAG", "Lighthouse", "Axe", "Research"],
    live: "#",
    code: "#",
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio rebuilt with a modern design system, theme toggle and smooth interactions.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative overflow-hidden">
      <div className="container-custom py-24 md:py-32 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4">
            SELECTED WORK
          </p>

          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            Projects that I’ve built<span className="text-primary">.</span>
          </h2>

          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            A few highlights that show how I think, build, and ship modern frontend
            experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-6 md:p-8 flex flex-col gap-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-display font-bold">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex items-center gap-3">
                <a
                  href={project.live}
                  className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition"
                >
                  Live
                </a>

                <a
                  href={project.code}
                  className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium glass hover:opacity-90 transition"
                >
                  Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}