import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const NAV_LINKS = [
  { label: "Features",     href: "#features"     },
  { label: "How it works", href: "#how-it-works"  },
  { label: "Pricing",      href: "#pricing"       },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080b0e]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg select-none group">
          <motion.div
            className="animate-pulse-ring bg-[#8acb4f] text-[#111415] p-1.5 rounded-lg"
            whileHover={{ scale: 1.12, rotate: -6 }}
            transition={{ type: "spring", stiffness: 380, damping: 14 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.div>
          <span className="text-white group-hover:text-[#c8f08a] transition-colors duration-200">
            LinkedInFlow
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[#98a1a8] hover:text-white transition-colors duration-200 py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#8acb4f] group-hover:w-full transition-all duration-300 ease-out rounded-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a href="https://linkedinflowfe.vercel.app" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              className="hidden sm:inline-flex h-9 text-sm text-[#98a1a8] hover:text-white hover:bg-white/[0.06]"
            >
              Sign In
            </Button>
          </a>
          <a href="https://linkedinflowfe.vercel.app" target="_blank" rel="noopener noreferrer">
            <Button
              className="h-9 px-5 text-sm bg-[#8acb4f] text-[#111415] hover:bg-[#a0d95e] border-0
                         shadow-[0_0_18px_rgba(138,203,79,0.30)] hover:shadow-[0_0_28px_rgba(138,203,79,0.5)]
                         transition-all duration-200 font-semibold"
            >
              Start Free Trial
            </Button>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
