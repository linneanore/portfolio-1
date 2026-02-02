import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/context/language-context";

type Project = {
  title: string;
  description: string;
  tags: string[];
  live: string;
  code: string;
};

type Translation = {
  work: {
    label: string;
    title: string;
    dot: string;
    intro: string;
    buttons: {
      live: string;
      code: string;
    };
  };
};

const projects: Project[] = [
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

function wrapX(value: number, halfWidth: number) {
  if (halfWidth <= 0) return value;


  let x = value;

  while (x <= -halfWidth) x += halfWidth;
  while (x > 0) x -= halfWidth;

  return x;
}

export default function Projects() {
  const { t } = useLanguage() as { t: Translation };
  const reduceMotion = useReducedMotion();

  const items = useMemo(() => [...projects, ...projects], []);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const [halfWidth, setHalfWidth] = useState(0);

  const pausedRef = useRef(false);
  const pauseTimerRef = useRef<number | null>(null);

  const pauseFor = (ms = 900) => {
    pausedRef.current = true;
    if (pauseTimerRef.current) window.clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, ms);
  };

  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      setHalfWidth(el.scrollWidth / 2);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    if (halfWidth <= 0) return;

    let raf = 0;
    let last = performance.now();
    const speedPxPerSec = 18; 

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!pausedRef.current) {
        const next = wrapX(x.get() - speedPxPerSec * dt, halfWidth);
        x.set(next);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion, halfWidth, x]);

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    if (halfWidth <= 0) return;

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    e.preventDefault();

    const next = wrapX(x.get() - delta, halfWidth);
    x.set(next);

    pauseFor(1100);
  };

  const onMouseEnter = () => {
    pausedRef.current = true;
  };
  const onMouseLeave = () => {
    
    pauseFor(600);
  };

  return (
    <section id="work" className="relative overflow-hidden">
      <div className="container-custom py-24 md:py-32 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4">
            {t.work.label}
          </p>

          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            {t.work.title}
            <span className="text-primary">{t.work.dot}</span>
          </h2>

          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            {t.work.intro}
          </p>
        </div>

        {/* Marquee viewport */}
        <div
          ref={viewportRef}
          className="relative overflow-hidden"
          onWheel={onWheel}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-16 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            ref={trackRef}
            className="flex gap-4 md:gap-6 will-change-transform cursor-grab active:cursor-grabbing select-none"
            style={{ x }}
            drag={reduceMotion ? false : "x"}
            dragElastic={0.08}
            onDragStart={() => pauseFor(1600)}
            onDrag={() => {
              if (halfWidth <= 0) return;
              x.set(wrapX(x.get(), halfWidth));
              pauseFor(1600);
            }}
            onDragEnd={() => pauseFor(900)}
          >
            {items.map((project, i) => (
              <ProjectCard key={`${project.title}-${i}`} project={project} t={t} />
            ))}
          </motion.div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Tip: scroll with touchpad or drag to explore. Hover pauses auto-scroll.
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ project, t }: { project: Project; t: Translation }) {
  return (
    <article
      className={[
        "glass-strong rounded-3xl p-6 md:p-8",
        "min-w-[280px] sm:min-w-[340px] md:min-w-[420px]",
        "max-w-[520px]",
        "flex flex-col gap-6",
        "transition-transform duration-300 hover:-translate-y-1",
      ].join(" ")}
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-xl md:text-2xl font-display font-bold">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

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

      <div className="mt-auto flex items-center gap-3">
        <a
          href={project.live}
          className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition"
        >
          {t.work.buttons.live}
        </a>

        <a
          href={project.code}
          className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium glass hover:opacity-90 transition"
        >
          {t.work.buttons.code}
        </a>
      </div>
    </article>
  );
}