export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/60 backdrop-blur-xl">
      <div className="container-custom py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold tracking-tight">Linnea</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Built with React, TypeScript, Tailwind & Framer Motion.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a className="text-muted-foreground hover:text-foreground transition" href="#top">
              Top
            </a>
            <a className="text-muted-foreground hover:text-foreground transition" href="#projects">
              Projects
            </a>
            <a className="text-muted-foreground hover:text-foreground transition" href="#contact">
              Contact
            </a>
          </nav>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          © {year} Linnea. All rights reserved.
        </p>
      </div>
    </footer>
  );
}