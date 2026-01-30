import { motion } from "framer-motion";
import { Code2, Sparkles, Globe, Accessibility } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const highlightIcons = [Code2, Accessibility, Sparkles, Globe] as const;

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container-custom py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4">
              {t.about.label}
            </p>

            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              {t.about.title_pre}
              <span className="text-gradient">{t.about.title_highlight}</span>
              <span className="text-primary">{t.about.title_dot}</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              {t.about.p1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              {t.about.p2}
            </motion.p>

            {/* Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {t.about.pills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Mini "currently" */}
            <div className="mt-8 glass rounded-2xl p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">
                  {t.about.currently_prefix}
                </span>{" "}
                {t.about.currently}
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {t.about.highlights.map((h, i) => {
              const Icon = highlightIcons[i] ?? Sparkles;
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