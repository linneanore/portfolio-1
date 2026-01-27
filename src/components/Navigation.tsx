import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Top", href: "#top", id: "top" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href:"#contact", id: "contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const { theme, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState ("top");

useEffect(() => {
  const headerOffset = 80; 

  function updateActive() {
    const scrollPos = window.scrollY + headerOffset;

    let current = "top";

    for (const l of links) {
      const el = document.getElementById(l.id);
      if (!el) continue;

      if (scrollPos >= el.offsetTop) current = l.id;
    }

    setActiveId(current);
  }

  updateActive();
  window.addEventListener("scroll", updateActive, { passive: true });
  return () => window.removeEventListener("scroll", updateActive);
}, []);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close on click outside
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="container-custom flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-semibold tracking-tight hover:opacity-90 transition"
          onClick={() => setOpen(false)}
        >
          Linnea
        </a>

       {/* Desktop links */}
<nav className="hidden items-center gap-6 md:flex">
  {links.map((l) => {
    const isActive = activeId === l.id;

    return (
      <a
      onClick={() => setActiveId(l.id)}
        key={l.href}
        href={l.href}
        className={[
          "relative text-sm transition",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground",
        ].join(" ")}
      >
        {l.label}

        <span
          className={[
            "pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-primary transition-opacity",
            isActive ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
      </a>
    );
  })}
     <Button
    variant="ghost"
    size="icon"
    aria-label="Toggle theme"
    onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>

  <Button variant="glow" size="sm" asChild>
    <a href="#contact">Let&apos;s talk</a>
  </Button>
</nav>

        {/* Mobile toggle */}
        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
            />

            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute left-0 right-0 z-50 md:hidden"
            >
              <div className="border-b border-border/50 bg-background/90 backdrop-blur-xl">
                <div className="container-custom py-6">
                  <motion.nav
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: {},
                      show: {
                        transition: { staggerChildren: 0.06, delayChildren: 0.04 },
                      },
                    }}
                    className="flex flex-col gap-4"
                  >
                    {links.map((l) => (
                      <motion.a
                        key={l.href}
                        variants={{
                          hidden: { opacity: 0, y: -6 },
                          show: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={["text-lg font-medium transition",
                          activeId == l.id ? "text-foreground" : "text-foreground/90 hover:text-foreground",
                        ].join(" ")}
                        href={l.href}
                        onClick={() => {
                          setActiveId(l.id);
                          setOpen(false);
                        }}
                      >
                        {l.label}
                      </motion.a>
                    ))}

                    <Button
                     variant="ghost"
                    size="lg"
                    className="w-full"
                    onClick={toggleTheme}
                    >
                   {theme === "dark" ? "Light mode" : "Dark mode"}
                  </Button>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: -6 },
                        show: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="pt-2"
                    >
                      <Button variant="glow" size="lg" className="w-full" asChild>
                        <a href="#contact" onClick={() => setOpen(false)}>
                          Let&apos;s talk
                        </a>
                      </Button>
                    </motion.div>
                  </motion.nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}