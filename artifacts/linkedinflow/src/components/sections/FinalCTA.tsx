import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const VP = { once: false, amount: 0 } as const;

const PARTICLES = [
  { x: "12%", y: "18%", size: 3,   delay: 0    },
  { x: "88%", y: "14%", size: 2,   delay: 0.8  },
  { x: "24%", y: "72%", size: 2.5, delay: 1.6  },
  { x: "76%", y: "68%", size: 3,   delay: 0.4  },
  { x: "50%", y: "88%", size: 2,   delay: 1.2  },
  { x: "6%",  y: "50%", size: 1.5, delay: 2    },
  { x: "94%", y: "42%", size: 1.5, delay: 0.6  },
  { x: "38%", y: "10%", size: 2,   delay: 1.8  },
  { x: "62%", y: "82%", size: 2.5, delay: 0.2  },
];

/* Animated word-split for the big heading */
function SplitHeading() {
  const line1 = "Ready to scale your".split(" ");
  const line2 = "LinkedIn presence?".split(" ");

  return (
    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.06]">
      {/* Line 1 — words fly up from below */}
      <span className="inline-flex flex-wrap justify-center gap-x-[0.3em] mb-1">
        {line1.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block leading-tight">
            <motion.span className="inline-block"
              initial={{ y: "115%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={VP}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
      {" "}
      {/* Line 2 — shimmer gradient words, slightly later */}
      <span className="inline-flex flex-wrap justify-center gap-x-[0.3em]">
        {line2.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block leading-tight">
            <motion.span
              className="inline-block animate-shimmer bg-gradient-to-r from-[#8acb4f] via-[#c8f570] to-[#8acb4f] bg-clip-text text-transparent"
              initial={{ y: "115%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={VP}
              transition={{ duration: 0.65, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </h2>
  );
}

export function FinalCTA() {
  return (
    <section className="py-32 px-4 bg-[#060810] text-white relative overflow-hidden border-y border-white/[0.06]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_350px_at_50%_50%,rgba(138,203,79,0.10),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_400px_250px_at_30%_70%,rgba(59,130,246,0.07),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-transparent to-[#060810] pointer-events-none" />

      {/* Floating particles — scale in from zero then float */}
      {PARTICLES.map((p, i) => (
        <motion.div key={i}
          className="absolute rounded-full bg-[#8acb4f]/40 pointer-events-none"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.5, delay: p.delay * 0.5, ease: "backOut" }}
          animate={{ y: [0, -14, 0], opacity: [0.35, 1, 0.35] }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Label */}
        <motion.p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8acb4f] mb-5"
          initial={{ opacity: 0, y: -24, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VP}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Get started today
        </motion.p>

        {/* Heading — split word reveal */}
        <SplitHeading />

        {/* Sub-copy */}
        <motion.p className="text-lg text-[#7a8390] mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={VP}
          transition={{ duration: 0.65, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Join 2,000+ professionals who have put their LinkedIn growth on autopilot.
          Start your 14-day free trial — no credit card required.
        </motion.p>

        {/* Buttons — stagger scale-in from below */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="https://linkedinflowfe.vercel.app" target="_blank" rel="noopener noreferrer">
            <Button size="lg"
              className="w-full sm:w-auto h-14 px-10 text-base bg-[#8acb4f] text-[#111415] hover:bg-[#a0d95e] border-0
                         font-bold shadow-[0_0_40px_rgba(138,203,79,0.38)] hover:shadow-[0_0_56px_rgba(138,203,79,0.55)]
                         transition-all duration-200"
            >
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
          <a href="https://linkedinflowfe.vercel.app" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline"
              className="w-full sm:w-auto h-14 px-10 text-base border-white/10 text-white
                         hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
            >
              <Calendar className="mr-2 w-4 h-4" /> Book a Demo
            </Button>
          </a>
        </motion.div>

        <motion.p className="mt-8 text-sm text-[#3d4449]"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={VP} transition={{ delay: 1.1 }}
        >
          14-day free trial · No credit card · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
