import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link2, PenTool, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: <Link2 className="w-7 h-7 text-primary" />,
    label: "Step 1",
    title: "Connect LinkedIn",
    description: "Securely link your profile or company page via official API. One-click OAuth — no credentials stored.",
  },
  {
    icon: <PenTool className="w-7 h-7 text-primary" />,
    label: "Step 2",
    title: "Create & Schedule",
    description: "Write, preview, and organise your posts on the visual calendar. AI suggestions included.",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-primary" />,
    label: "Step 3",
    title: "Publish & Track",
    description: "We auto-publish at the best times and collect live engagement data so you can double down on what works.",
  },
];

const INTERVAL_MS = 3500;
const VP = { once: false, amount: 0 } as const;

const cardVariants = {
  enter:  { opacity: 0, y: 28,  scale: 0.96, filter: "blur(8px)"  },
  center: { opacity: 1, y: 0,   scale: 1,    filter: "blur(0px)"  },
  exit:   { opacity: 0, y: -20, scale: 0.97, filter: "blur(6px)"  },
};

export function HowItWorks() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % steps.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="how-it-works" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">

        {/* Heading — dramatic y + blur */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={VP}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0a66c2] mb-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.5, delay: 0.1 }}
          >
            How it works
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How it works</h2>
          <p className="text-lg text-muted-foreground">From blank page to viral post in three steps.</p>
        </motion.div>

        {/* Step pills — stagger up from below */}
        <div className="grid md:grid-cols-3 gap-6 relative mb-16">
          <div className="hidden md:block absolute top-6 left-[18%] right-[18%] h-px bg-border z-0" />

          {steps.map((step, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className="relative z-10 flex flex-col items-center text-center focus:outline-none group"
              initial={{ opacity: 0, y: 50, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={VP}
              transition={{ duration: 0.65, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{
                  borderColor: active === i ? "hsl(var(--primary))" : "hsl(var(--border))",
                  boxShadow: active === i ? "0 0 0 4px hsl(var(--primary) / 0.15)" : "none",
                }}
                transition={{ duration: 0.35 }}
                className="w-12 h-12 rounded-full bg-background border-2 flex items-center justify-center mb-3 relative"
              >
                <motion.span animate={{ opacity: active === i ? 1 : 0.4 }} transition={{ duration: 0.3 }}>
                  {step.icon}
                </motion.span>
                <motion.div
                  animate={{
                    backgroundColor: active === i ? "hsl(var(--primary))" : "hsl(var(--muted))",
                    color: active === i ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shadow"
                >
                  {i + 1}
                </motion.div>
              </motion.div>
              <motion.span
                animate={{ opacity: active === i ? 1 : 0.45 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-semibold text-foreground"
              >
                {step.title}
              </motion.span>
            </motion.button>
          ))}
        </div>

        {/* Glass card — scale + blur entrance */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.88, y: 60, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          viewport={VP}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-x-[10%] -top-6 h-32 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
          <div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg,rgba(255,255,255,0.08) 0%,rgba(255,255,255,0.04) 100%)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12),0 2px 8px rgba(0,0,0,0.08),inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

            {/* Animated card content */}
            <div className="relative min-h-[220px] flex items-center justify-center px-8 py-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  variants={cardVariants}
                  initial="enter" animate="center" exit="exit"
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.35 }, filter: { duration: 0.4 },
                    y: { duration: 0.45, delay: 0.04 }, scale: { duration: 0.45, delay: 0.04 },
                  }}
                  className="flex flex-col items-center text-center w-full"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-md"
                    style={{ background: "linear-gradient(135deg,hsl(var(--primary)/0.18) 0%,hsl(var(--primary)/0.08) 100%)", border: "1px solid hsl(var(--primary)/0.25)" }}
                  >
                    {steps[active].icon}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2">{steps[active].label}</span>
                  <h3 className="text-2xl font-bold mb-3">{steps[active].title}</h3>
                  <p className="text-muted-foreground max-w-sm leading-relaxed">{steps[active].description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bar + dots */}
            <div className="px-8 pb-8 flex flex-col items-center gap-4">
              <div className="w-full h-0.5 rounded-full bg-border overflow-hidden">
                <motion.div key={active} className="h-full rounded-full bg-primary"
                  initial={{ width: "0%" }} animate={{ width: "100%" }}
                  transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
                />
              </div>
              <div className="flex items-center gap-3">
                {steps.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className="focus:outline-none" aria-label={`Step ${i + 1}`}>
                    <motion.div
                      animate={{ width: active === i ? 24 : 8, opacity: active === i ? 1 : 0.35 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="h-2 rounded-full bg-primary"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
