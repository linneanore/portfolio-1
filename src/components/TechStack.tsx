import { motion } from "framer-motion";
import {
  Braces,
  Database,
  Layout,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type StackItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const stack: StackItem[] = [
  {
    title: "Frontend",
    description: "React, TypeScript, Tailwind, component systems",
    icon: <Layout className="h-5 w-5" />,
  },
  {
    title: "Backend",
    description: "Node.js, REST APIs, Express",
    icon: <Server className="h-5 w-5" />,
  },
  {
    title: "Databases",
    description: "SQL basics, Supabase, MongoDB",
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: "Clean code",
    description: "Readable structure, reusable components, scalability",
    icon: <Braces className="h-5 w-5" />,
  },
  {
    title: "Accessibility",
    description: "WCAG mindset, semantic HTML, UX clarity",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "UX polish",
    description: "Micro-interactions, motion, attention to detail",
    icon: <Sparkles className="h-5 w-5" />,
  },
];

export default function TechStack() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm text-muted-foreground">What I work with</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Tech stack & strengths
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The tools I use most often — and the areas I focus on when building
            products.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-7 glass"
            >
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-secondary/40 text-foreground">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}