import { ArrowDownRight, ArrowUpRight, Code2, Megaphone, BarChart2 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Psicólogo General Sanitario",
    type: "Webbutveckling + SEO",
    result: "Organisk synlighet från noll",
    liveUrl: "https://aaapsicologia.com",
    codeUrl: "https://github.com/linneanore",
    imgSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1408&auto=format&fit=crop&q=80",
    imgAlt: "Psicólogo General Sanitario webbplats",
  },
  {
    number: "02",
    title: "Cinema Booking",
    type: "Fullstack",
    result: "Realtidsbokning utan reload",
    codeUrl: "https://github.com/Nemkunde/cinecom",
    imgSrc: "https://images.unsplash.com/photo-1616469829935-c2d7ccf6b054?w=1408&auto=format&fit=crop&q=80",
    imgAlt: "Cinema Booking system",
  },
  {
    number: "03",
    title: "Tillgänglighetsaudit",
    type: "Tillgänglighet + Analys",
    result: "WCAG 2.1 AA standard",
    codeUrl: "https://github.com/linneanore",
    imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1408&auto=format&fit=crop&q=80",
    imgAlt: "WCAG Accessibility Audit",
  },
  {
    number: "04",
    title: "Salon Booking Admin",
    type: "Fullstack App",
    result: "Komplett bokningsflöde",
    codeUrl: "https://github.com/linneanore/salon-booking-admin",
    imgSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1408&auto=format&fit=crop&q=80",
    imgAlt: "Salon Booking Admin",
  },
];

export default function App() {
  return (
    <main className="overflow-hidden" style={{ background: "var(--background)", color: "var(--foreground)" }}>

      {/* NAV */}
      <header style={{ borderBottom: "1px solid var(--border)" }} className="flex h-20 items-center justify-between px-5 md:px-10">
        <a href="#top" className="font-display text-2xl" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Linnea Nore
        </a>
        <nav className="flex items-center gap-5 text-xs font-semibold uppercase md:gap-9">
          <a className="hidden transition-opacity hover:opacity-50 sm:block" href="#work">Projekt</a>
          <a className="hidden transition-opacity hover:opacity-50 sm:block" href="#about">Om mig</a>
          <a
            className="pill-link"
            href="mailto:nore.linnea@hotmail.com"
            style={{ background: "var(--foreground)", color: "var(--background)" }}
          >
            Hör av dig <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="grid min-h-[calc(100vh-5rem)] grid-cols-1 lg:grid-cols-[1.05fr_.95fr]"
        style={{ background: "var(--lilac)" }}
      >
        <div className="flex flex-col justify-between px-5 py-14 md:px-10 md:py-16 lg:py-20">
          <p className="section-label">Digital marknadsförare × frontendutvecklare</p>
          <div className="my-16 max-w-3xl lg:my-8">
            <h1
              className="leading-[.85]"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(4.4rem, 9vw, 9.5rem)",
              }}
            >
              Idéer som<br />klickar.
            </h1>
            <p className="mt-9 max-w-xl text-lg leading-relaxed md:text-2xl">
              Jag omvandlar smart strategi till digitala upplevelser som ser bra ut, fungerar hårt och får varumärken att växa.
            </p>
          </div>
          <a
            className="flex w-fit items-center gap-3 pb-2 text-sm font-bold uppercase"
            href="#work"
            style={{ borderBottom: "1px solid var(--foreground)" }}
          >
            Se utvalt arbete <ArrowDownRight size={18} />
          </a>
        </div>
        <div className="relative min-h-[68vh] overflow-hidden lg:min-h-0" style={{ background: "var(--coral)" }}>
          <img
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=912&auto=format&fit=crop&q=80"
            width={912}
            height={1104}
            alt="Kreativ yrkesperson som arbetar vid en laptop"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute bottom-5 right-5 rounded-full px-5 py-3 text-xs font-bold uppercase"
            style={{ background: "var(--sun)" }}
          >
            Tillgänglig för projekt
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section
        id="about"
        className="grid lg:grid-cols-2"
        style={{ background: "var(--paper)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="p-5 md:p-10 lg:border-r" style={{ borderColor: "var(--border)" }}>
          <p className="section-label">Mitt arbetssätt</p>
          <h2
            className="mt-20 max-w-xl leading-none md:mt-36"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Strategi först.<br />
            <span style={{ fontStyle: "italic" }}>Alltid mänsklig.</span>
          </h2>
        </div>
        <div className="grid divide-y" style={{ borderColor: "var(--border)" }}>
          <article className="p-6 md:p-10">
            <Megaphone strokeWidth={1.4} size={34} />
            <h3 className="mt-10" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.875rem" }}>
              Marknadsföring med mening
            </h3>
            <p className="mt-4 max-w-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Från positionering till betald sociala medier — varje kampanj börjar med en tydlig insikt och slutar med mätbar framgång.
            </p>
          </article>
          <article className="p-6 md:p-10">
            <Code2 strokeWidth={1.4} size={34} />
            <h3 className="mt-10" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.875rem" }}>
              Byggt för riktiga människor
            </h3>
            <p className="mt-4 max-w-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Ren, tillgänglig frontend som får ditt varumärke att sticka ut på alla skärmar — utan att kompromissa med hastigheten.
            </p>
          </article>
          <article className="p-6 md:p-10">
            <BarChart2 strokeWidth={1.4} size={34} />
            <h3 className="mt-10" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.875rem" }}>
              Data som driver beslut
            </h3>
            <p className="mt-4 max-w-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Google Analytics, sökordsanalys och konverteringsoptimering — jag fattar beslut baserat på vad som faktiskt funkar.
            </p>
          </article>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="px-5 py-20 md:px-10 md:py-28" style={{ background: "var(--background)" }}>
        <div className="mb-14 flex items-end justify-between pb-6" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(3rem, 8vw, 6rem)" }}>
            Utvalt arbete
          </h2>
          <span className="hidden text-xs font-bold uppercase md:block">2024 — 2026</span>
        </div>
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`grid items-end gap-6 lg:grid-cols-12 ${index % 2 ? "lg:[&_.project-image]:order-2" : ""}`}
            >
              <div className="project-image group overflow-hidden lg:col-span-8">
                <img
                  src={project.imgSrc}
                  loading="lazy"
                  width={1408}
                  height={960}
                  alt={project.imgAlt}
                  className="aspect-[1.47] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="lg:col-span-4 lg:p-5">
                <span className="text-xs font-bold">/{project.number}</span>
                <h3
                  className="mt-8 leading-none"
                  style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                >
                  {project.title}
                </h3>
                <p className="mt-5 text-sm uppercase">{project.type}</p>
                <div
                  className="mt-10 flex items-center justify-between pt-4 text-sm"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <span>{project.result}</span>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-bold uppercase hover:opacity-50 transition-opacity">
                        Live <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.codeUrl && (
                      <a href={project.codeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs font-bold uppercase hover:opacity-50 transition-opacity">
                        Kod <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer className="px-5 py-16 md:px-10 md:py-24" style={{ background: "var(--foreground)", color: "var(--background)" }}>
        <div className="flex flex-col justify-between gap-16 md:flex-row md:items-end">
          <div>
            <p className="section-label" style={{ color: "oklch(0.98 0.01 85 / 40%)" }}>Har du ett projekt i tankarna?</p>
            <h2
              className="mt-7 leading-[.85]"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            >
              Låt oss göra<br />
              <span style={{ fontStyle: "italic", color: "var(--coral)" }}>det verklighet.</span>
            </h2>
          </div>
          <a
            className="pill-link shrink-0"
            href="mailto:nore.linnea@hotmail.com"
            style={{ background: "var(--coral)", color: "var(--foreground)" }}
          >
            Starta en konversation <ArrowUpRight size={17} />
          </a>
        </div>
        <div
          className="mt-24 flex flex-wrap justify-between gap-5 pt-5 text-xs uppercase"
          style={{ borderTop: "1px solid oklch(0.98 0.01 85 / 25%)", color: "oklch(0.98 0.01 85 / 40%)" }}
        >
          <span>Digital marknadsföring & utveckling</span>
          <a
            href="https://www.linkedin.com/in/linneanore/"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-100"
            style={{ color: "oklch(0.98 0.01 85 / 40%)" }}
          >
            LinkedIn
          </a>
          <span>© 2026</span>
        </div>
      </footer>

    </main>
  );
}