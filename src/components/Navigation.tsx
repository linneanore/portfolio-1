import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo / Name */}
        <a href="#top" className="font-semibold tracking-tight hover:opacity-90 transition">
          Linnea
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-muted-foreground hover:text-foreground transition" href="#about">
            About
          </a>
          <a className="text-sm text-muted-foreground hover:text-foreground transition" href="#projects">
            Projects
          </a>
          <a className="text-sm text-muted-foreground hover:text-foreground transition" href="#contact">
            Contact
          </a>

          <Button variant="glow" size="sm" asChild>
            <a href="#contact">Let&apos;s talk</a>
          </Button>
        </nav>

        {/* Mobile button (vi gör meny + animation strax) */}
        <Button className="md:hidden" variant="ghost" size="sm">
          Menu
        </Button>
      </div>
    </header>
  );
}