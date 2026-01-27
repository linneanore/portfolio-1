import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Cinema Booking",
    description:
      "Seat selection, booking flow and responsive UI. Built with TypeScript and React with a focus on UX and accessibility.",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Accessibility Audit",
    description:
      "WCAG 2.1 AA evaluation using Lighthouse and Axe. Clear reporting and actionable improvements.",
    tags: ["WCAG", "Lighthouse", "Axe"],
    liveUrl: "#",
  },
  {
    title: "Portfolio (This site)",
    description:
      "A modern animated developer portfolio with a clean design system and reusable components.",
    tags: ["Vite", "Framer Motion", "UI System"],
    repoUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm text-muted-foreground">Selected work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            A few things I’ve built recently — focused on clean UI, performance,
            and thoughtful UX.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-7 glass"
            >
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
              <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>

                  <div className="flex items-center gap-2">
                    {p.repoUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={p.repoUrl}
                          aria-label={`${p.title} repository`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {p.liveUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={p.liveUrl}
                          aria-label={`${p.title} live demo`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/80 transition group-hover:text-foreground">
                  <span>View details</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}