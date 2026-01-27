import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </div>
  );
}