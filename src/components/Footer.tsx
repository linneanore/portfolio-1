import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Email", href: "mailto:nore.linnea@hotmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/linneanore", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/linneanore/", icon: Linkedin },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="container-custom pb-10 md:pb-12">
        <div className="glass-strong rounded-3xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            {/* Brand */}
            <div className="max-w-sm">
              <div className="font-display font-bold text-xl">
                portfolio<span className="text-primary">.</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Frontend developer focused on clean UI, accessibility, and thoughtful UX.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12">
              <div>
                <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4">
                  SECTIONS
                </p>
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition link-underline"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-medium tracking-widest text-muted-foreground mb-4">
                  CONNECT
                </p>
                <ul className="space-y-3">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target={s.href.startsWith("http") ? "_blank" : undefined}
                          rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition link-underline"
                        >
                          <Icon className="w-4 h-4" />
                          {s.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © {year} Linnea. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript & Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}