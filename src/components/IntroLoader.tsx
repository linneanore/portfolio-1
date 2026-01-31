import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => window.clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
 
    onComplete();
  };

  const name = "portfolio.";
  const letters = name.split("");

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background dark"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, delay: 0.3, ease: "easeInOut" },
          }}
        >
          {/* Background gradient animation */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Logo text animation */}
          <div className="relative z-10 overflow-hidden">
            <div className="flex items-center">
              {letters.map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      delay: i * 0.08,
                      ease: "easeOut",
                    },
                  }}
                  exit={{
                    y: -50,
                    opacity: 0,
                    transition: {
                      duration: 0.4,
                      delay: i * 0.03,
                      ease: "easeIn",
                    },
                  }}
                  className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold inline-block ${
                    letter === "." ? "text-primary" : ""
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Bottom line animation */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}