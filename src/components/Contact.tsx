import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function Contact() {
  const { t } = useLanguage();

  const links = [
    {
      label: t.contact.buttons.email,
      href: "mailto:nore.linnea@hotmail.com",
      icon: Mail,
      primary: true,
    },
    { label: t.contact.buttons.github, href: "https://github.com/linneanore", icon: Github },
    { label: t.contact.buttons.linkedin, href: "https://www.linkedin.com/in/linneanore/", icon: Linkedin },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="container-custom py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4">
            {t.contact.label}
          </p>

          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            {t.contact.title}
            <span className="text-primary">{t.contact.dot}</span>
          </h2>

          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            {t.contact.intro}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 glass-strong rounded-3xl p-6 md:p-8"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4">
              {links.map((l) => {
                const Icon = l.icon;
                const base =
                  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition";

                const primary =
                  "bg-foreground text-background hover:opacity-90 hover:shadow-lg hover:shadow-foreground/10";

                const secondary = "glass hover:opacity-90";

                return (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    className={`${base} ${l.primary ? primary : secondary}`}
                  >
                    <Icon className="w-4 h-4" />
                    {l.label}
                  </a>
                );
              })}
            </div>

            <p className="mt-6 text-xs text-muted-foreground">{t.contact.reply}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}