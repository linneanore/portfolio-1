import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Globe, Accessibility } from "lucide-react";
import { useLanguage } from "@/context/language-context";

type Translation = {
  about: {
    label: string;
    title_pre: string;
    title_highlight: string;
    title_dot: string;
    p1: string;
    p2: string;
    currently_prefix: string;
    currently: string;
    pills: ReadonlyArray<string>;
    highlights: ReadonlyArray<{ title: string; text: string }>;
  };
};

const highlightIcons = [Code2, Accessibility, Sparkles, Globe] as const;

export default function About() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const tt = t as unknown as Translation;

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container-custom py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4">
              {tt.about.label}
            </p>

            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              {tt.about.title_pre}
              <span className="text-gradient">{tt.about.title_highlight}</span>
              <span className="text-primary">{tt.about.title_dot}</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              {tt.about.p1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              {tt.about.p2}
            </motion.p>

            {/* Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
              {tt.about.pills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground transition-transform duration-300 hover:scale-[1.03]"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Mini "currently" */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mt-8 glass rounded-2xl p-5 border border-border/60"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">
                  {tt.about.currently_prefix}
                </span>{" "}
                {tt.about.currently}
              </p>
            </motion.div>
          </div>

          {/* Right column - interactive highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {tt.about.highlights.map((h, i) => {
              const Icon = highlightIcons[i] ?? Sparkles;
              return (
                <HighlightCard
                  key={h.title}
                  title={h.title}
                  text={h.text}
                  Icon={Icon}
                  reduceMotion={!!reduceMotion}
                  delay={i * 0.08}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({
  title,
  text,
  Icon,
  reduceMotion,
  delay,
}: {
  title: string;
  text: string;
  Icon: React.ComponentType<{ className?: string }>;
  reduceMotion: boolean;
  delay: number;
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

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
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

  const handleLeave = () => {
    if (reduceMotion) return;
    tiltX.set(0);
    tiltY.set(0);
    mx.set(50);
    my.set(50);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className={[
        "relative",
        "glass-strong rounded-3xl p-6",
        "border border-border/60",
        "overflow-hidden",
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

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-lg">{title}</h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
      </div>
    </motion.article>
  );
}