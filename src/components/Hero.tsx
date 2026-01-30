import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-10 md:p-14 glass">
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <p className="text-sm text-muted-foreground">
              System Developer / Frontend Developer
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Hi, I’m <span className="text-gradient">Linnea</span>.
              <br />
              I build modern web experiences.
            </h1>

            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              I focus on clean UI, accessibility, and scalable front-end
              architecture — with a love for subtle animations and great UX.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="glow" size="lg" asChild>
                <a href="#projects">View projects</a>
              </Button>

              <Button variant="ghost" size="lg" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}