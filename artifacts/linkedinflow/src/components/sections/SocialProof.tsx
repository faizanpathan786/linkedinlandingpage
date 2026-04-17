import { motion } from "framer-motion";
import { Star, Briefcase, Globe, Zap, Database, Shield, Code2, Building2, Cpu } from "lucide-react";

/* ── Shared animation variants ── */
const VP = { once: false, amount: 0 } as const;

const fadeUp = {
  hidden:  { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* Word-split heading reveal */
function WordReveal({ text, className = "", baseDelay = 0 }: { text: string; className?: string; baseDelay?: number }) {
  const words = text.split(" ");
  return (
    <span className={`${className} inline-flex flex-wrap gap-x-[0.3em]`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block leading-tight">
          <motion.span
            className="inline-block"
            initial={{ y: "115%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={VP}
            transition={{ duration: 0.6, delay: baseDelay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

const BRANDS = [
  { name: "TechCorp",   Icon: Building2 },
  { name: "DevShield",  Icon: Shield    },
  { name: "CloudBase",  Icon: Database  },
  { name: "CodeFlow",   Icon: Code2     },
  { name: "NexaGlobe",  Icon: Globe     },
  { name: "SparkLabs",  Icon: Zap       },
  { name: "CoreStack",  Icon: Cpu       },
  { name: "WorkBridge", Icon: Briefcase },
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins", role: "Founder & CEO", initials: "SJ",
    color: "from-violet-500/30 to-purple-500/20",
    flipDir: -1,
    quote: "LinkedInFlow completely changed how I manage my presence. I went from 3 hours a week to 30 minutes. The engagement speaks for itself.",
  },
  {
    name: "Marcus Wei", role: "Growth Marketer", initials: "MW",
    color: "from-blue-500/30 to-cyan-500/20",
    flipDir: 0,
    quote: "The analytics are exactly what I needed. I can see which formats work and double down. My reach is up 400% since I started using this.",
  },
  {
    name: "Elena Rodriguez", role: "B2B Sales Leader", initials: "ER",
    color: "from-[#a3e635]/30 to-emerald-500/20",
    flipDir: 1,
    quote: "Scheduling posts for my entire team from one dashboard is a superpower. We look like a coordinated media machine.",
  },
];

export function SocialProof() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="py-20 bg-[#07090d] border-y border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Trust label — slides down from above */}
        <motion.p
          className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#555d64] mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Trusted by 2,000+ professionals at leading companies
        </motion.p>

        {/* Logo marquee — fades + scales in */}
        <motion.div
          className="relative overflow-hidden mb-20"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VP}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#07090d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#07090d] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-10 animate-marquee-slow w-max">
            {doubled.map(({ name, Icon }, i) => (
              <div key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/[0.06] bg-white/[0.03]
                           text-[#555d64] hover:text-[#a3e635] hover:border-[#a3e635]/20 transition-colors duration-200 select-none shrink-0"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section heading — word-by-word reveal */}
        <div className="text-center mb-14">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a3e635] mb-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.5 }}
          >
            What our users say
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            <WordReveal text="Real results from real professionals" baseDelay={0.1} />
          </h2>
        </div>

        {/* Testimonial cards — 3-D flip entrance per card */}
        <div className="grid md:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                rotateY: t.flipDir * 45,
                y: 50,
                scale: 0.9,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                rotateY: 0,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={VP}
              transition={{ duration: 0.75, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
              className="relative overflow-hidden rounded-2xl border border-white/[0.07]
                         bg-[linear-gradient(160deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)]
                         p-6 shadow-[0_12px_40px_rgba(0,0,0,0.3)] group"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#a3e635]/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              <div className="flex gap-1 mb-5">
                {[0,1,2,3,4].map(s => <Star key={s} className="w-3.5 h-3.5 fill-[#a3e635] text-[#a3e635]" />)}
              </div>
              <div className="absolute top-5 right-5 text-5xl font-serif leading-none text-white/[0.04] select-none pointer-events-none">"</div>
              <p className="text-[#8a929a] leading-relaxed mb-6 text-[0.93rem]">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-bold text-sm text-white shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-[#555d64]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
