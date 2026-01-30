import { motion } from "framer-motion";
import {
  LayoutPanelLeft,
  Server,
  Database,
  Braces,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

const items = [
  {
    icon: LayoutPanelLeft,
    title: "Frontend",
    text: "React, TypeScript, Tailwind, component systems",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    icon: Server,
    title: "Backend",
    text: "Node.js, REST APIs, Express",
    tags: ["Node", "Express", "REST"],
  },
  {
    icon: Database,
    title: "Databases",
    text: "SQL basics, Supabase, MongoDB",
    tags: ["Supabase", "MongoDB", "SQL"],
  },
  {
    icon: Braces,
    title: "Clean code",
    text: "Readable structure, reusable components, scalability",
    tags: ["Components", "Architecture", "Refactor"],
  },
  {
    icon: ShieldCheck,
    title: "Accessibility",
    text: "WCAG mindset, semantic HTML, UX clarity",
    tags: ["WCAG", "A11y", "Semantics"],
  },
  {
    icon: Sparkles,
    title: "UX polish",
    text: "Micro-interactions, motion, attention to detail",
    tags: ["Motion", "UI", "Details"],
  },
];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="container-custom py-24 md:py-32 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4">
            {t.tech.label}
          </p>

          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            {t.tech.title}
            <span className="text-primary">{t.tech.dot}</span>
          </h2>

          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            {t.tech.intro}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.article
                key={it.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="glass-strong rounded-3xl p-6 md:p-7 flex flex-col gap-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-lg md:text-xl">
                    {it.title}
                  </h3>
                </div>

                <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                  {it.text}
                </p>

                <div className="flex flex-wrap gap-2">
                  {it.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}