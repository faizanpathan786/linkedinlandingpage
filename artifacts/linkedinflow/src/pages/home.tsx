import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { ContactUs } from "@/components/sections/ContactUs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorPosition = {
  x: number;
  y: number;
  visible: boolean;
};

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [cursor, setCursor] = useState<CursorPosition>({ x: 0, y: 0, visible: false });

  /* Scroll progress bar */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY, visible: true });
    };

    const handleLeave = () => {
      setCursor((current) => ({ ...current, visible: false }));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [reduceMotion]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#0a66c2] origin-left z-[200] shadow-[0_0_12px_rgba(10,102,194,0.8)]"
        style={{ scaleX }}
      />

      {!reduceMotion ? (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
          <motion.div
            aria-hidden="true"
            className="absolute h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(10,102,194,0.24)_0%,rgba(10,102,194,0.10)_32%,rgba(10,102,194,0)_70%)] blur-2xl"
            animate={{
              x: cursor.x - 160,
              y: cursor.y - 160,
              opacity: cursor.visible ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 24, mass: 0.3 }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute h-5 w-5 rounded-full border border-[#0a66c2]/60 bg-[#0a66c2]/20 shadow-[0_0_30px_rgba(10,102,194,0.65)]"
            animate={{
              x: cursor.x - 10,
              y: cursor.y - 10,
              opacity: cursor.visible ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.18 }}
          />
        </div>
      ) : null}

      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <ContactUs />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
