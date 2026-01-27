import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <Hero />
      </main>
    </div>
  );
}