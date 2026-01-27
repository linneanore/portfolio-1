import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm text-muted-foreground">Get in touch</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Let’s build something together
          </h2>

          <p className="mt-4 text-muted-foreground">
            I’m open to junior roles, and collaborations.  
            Feel free to reach out if you’d like to talk tech, projects, or ideas.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="glow" size="lg" asChild>
              <a href="mailto:nore.linnea@hotmail.com">
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </Button>

            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://github.com/linneanore"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/linneanore/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}