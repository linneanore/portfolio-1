import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function Contact() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const links = [
    {
      label: t.contact.buttons.email,
      href: "mailto:nore.linnea@hotmail.com",
      icon: Mail,
      primary: false,
    },
    {
      label: t.contact.buttons.github,
      href: "https://github.com/linneanore",
      icon: Github,
      primary: false,
    },
    {
      label: t.contact.buttons.linkedin,
      href: "https://www.linkedin.com/in/linneanore/",
      icon: Linkedin,
      primary: false,
    },
  ] as const;

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

          {/* Interactive glass card */}
          <InteractiveCard
            reduceMotion={!!reduceMotion}
            className="mt-10 rounded-3xl p-6 md:p-8"
          >
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4">
                {links.map((l) => {
                  const Icon = l.icon;

                  const base =
                    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition";

                  const primary =
                    "bg-foreground text-background hover:opacity-90 hover:shadow-lg hover:shadow-foreground/10";

                  const secondary = "glass hover:opacity-90";

                  const isExternal = l.href.startsWith("http");

                  return (
                    <motion.a
                      key={l.label}
                      href={l.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                      className={`${base} ${l.primary ? primary : secondary}`}
                    >
                      <Icon className="w-4 h-4" />
                      {l.label}
                    </motion.a>
                  );
                })}
              </div>

              <p className="mt-6 text-xs text-muted-foreground">{t.contact.reply}</p>
            </div>
          </InteractiveCard>
        </div>
      </div>
    </section>
  );
}

function InteractiveCard({
  children,
  className = "",
  reduceMotion,
}: {
  children: React.ReactNode;
  className?: string;
  reduceMotion: boolean;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  const tiltX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });

  const glow = useTransform(
    [mx, my],
    ([x, y]) =>
      `radial-gradient(520px circle at ${x}% ${y}%, hsl(var(--primary) / 0.14), transparent 58%)`
  );

  const shine = useTransform(
    [mx, my],
    ([x, y]) =>
      `radial-gradient(260px circle at ${x}% ${y}%, hsl(var(--foreground) / 0.10), transparent 58%)`
  );

  const onMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (reduceMotion) return;
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;

    mx.set(px);
    my.set(py);

    const dx = px - 50;
    const dy = py - 50;

    tiltX.set((-dy / 50) * 3.5);
    tiltY.set((dx / 50) * 5);
  };

  const onLeave = () => {
    if (reduceMotion) return;
    tiltX.set(0);
    tiltY.set(0);
    mx.set(50);
    my.set(50);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={[
        "relative",
        "glass-strong",
        "border border-border/60",
        "overflow-hidden",
        className,
      ].join(" ")}
      style={
        reduceMotion
          ? undefined
          : {
              transformStyle: "preserve-3d",
              rotateX: tiltX,
              rotateY: tiltY,
            }
      }
    >
      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: glow }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{ background: shine }}
          />
        </>
      )}

      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent hover:ring-primary/18 transition" />

      {children}
    </motion.div>
  );
}