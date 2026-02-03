import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import {
  LayoutPanelLeft,
  Server,
  Database,
  Braces,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_OUT,
    },
  },
};

type Translation = {
  tech: {
    label: string;
    title: string;
    dot: string;
    intro: string;
  };
};

type TechItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  tags: ReadonlyArray<string>;
};

const items: ReadonlyArray<TechItem> = [
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
  const tt = t as unknown as Translation;

  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="container-custom py-24 md:py-32 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4">
            {tt.tech.label}
          </p>

          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            {tt.tech.title}
            <span className="text-primary">{tt.tech.dot}</span>
          </h2>

          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            {tt.tech.intro}
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={itemVariants}
              initial={reduceMotion ? false : undefined}
              animate={reduceMotion ? undefined : undefined}
            >
              <TechCard item={it} reduceMotion={!!reduceMotion} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TechCard({
  item,
  reduceMotion,
}: {
  item: TechItem;
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

  const Icon = item.icon;

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={[
        "relative",
        "glass-strong rounded-3xl p-6 md:p-7",
        "border border-border/60",
        "overflow-hidden",
        "flex flex-col gap-5",
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
      {/* Glow-follow layers */}
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

      {/* Border highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent hover:ring-primary/18 transition" />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>

          <h3 className="font-display font-bold text-lg md:text-xl">
            {item.title}
          </h3>
        </div>

        <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
          {item.text}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}