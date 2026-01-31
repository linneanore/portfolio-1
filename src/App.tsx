import { useState } from "react";
import Index from "./pages/Index";
import IntroLoader from "@/components/IntroLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <IntroLoader onComplete={() => setLoading(false)} />;
  }

  return <Index />;
}
