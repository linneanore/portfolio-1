import { useState } from "react";
import Index from "./pages/Index";
import IntroLoader from "@/components/IntroLoader";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Render the whole site immediately (behind the intro) */}
      <Index />

      {/* Intro overlay on top */}
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}
    </div>
  );
}
