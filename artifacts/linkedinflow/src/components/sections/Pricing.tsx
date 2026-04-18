import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const VP = { once: false, amount: 0 } as const;

const plans = [
  {
    name: "Starter", monthly: 19, yearly: 15,
    description: "Perfect for individuals starting their LinkedIn journey.",
    entryX: -80,
    features: ["1 LinkedIn account","100 scheduled posts / month","Basic analytics","Email support"],
  },
  {
    name: "Pro", monthly: 49, yearly: 39, popular: true,
    description: "For serious creators who need more power.",
    entryX: 0,
    features: ["5 LinkedIn accounts","Unlimited scheduled posts","Advanced analytics","AI content suggestions","Priority support"],
  },
  {
    name: "Agency", monthly: 99, yearly: 79,
    description: "For power users who want the full suite.",
    entryX: 80,
    features: ["1 LinkedIn account","Unlimited scheduled posts","Advanced analytics","AI content suggestions","White-label reports","Dedicated onboarding"],
  },
];

/* Word-split heading */
function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`${className} inline-flex flex-wrap justify-center gap-x-[0.3em]`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden inline-block leading-tight">
          <motion.span className="inline-block"
            initial={{ y: "115%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={VP}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-28 px-4 bg-[#060810] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0a66c2] mb-3"
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.5 }}
          >
            Pricing
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            <WordReveal text="Simple, transparent pricing" />
          </h2>
          <motion.p className="text-lg text-[#6a7177] mb-10"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Start for free. Upgrade when you're ready.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2"
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={VP} transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={`text-sm font-medium transition-colors duration-200 ${!isYearly ? "text-white" : "text-[#555d64]"}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(v => !v)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-250 focus:outline-none ${isYearly ? "bg-[#0a66c2]" : "bg-white/10"}`}
              aria-label="Toggle billing"
            >
              <motion.span layout transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm"
                style={{ left: isYearly ? "calc(100% - 1.375rem)" : "0.125rem" }}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 transition-colors duration-200 ${isYearly ? "text-white" : "text-[#555d64]"}`}>
              Yearly
              <span className="bg-[#0a66c2]/15 text-[#0a66c2] text-xs px-2 py-0.5 rounded-full font-semibold border border-[#0a66c2]/20">Save 20%</span>
            </span>
          </motion.div>
        </div>

        {/* Cards — each slides in from its own direction */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, x: plan.entryX, y: 80, scale: 0.82, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={VP}
              transition={{ duration: 0.75, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: plan.popular ? -4 : -8, scale: plan.popular ? 1.01 : 1.02, transition: { duration: 0.25 } }}
              className={`relative flex flex-col rounded-2xl overflow-hidden
                ${plan.popular
                  ? "border-2 border-[#0a66c2]/50 bg-[linear-gradient(160deg,rgba(10,102,194,0.08)_0%,rgba(255,255,255,0.03)_100%)] shadow-[0_0_50px_rgba(10,102,194,0.18)] scale-[1.03]"
                  : "border border-white/[0.07] bg-[linear-gradient(160deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)]"}`}
            >
              <div className={`absolute inset-x-0 top-0 h-px ${plan.popular ? "bg-gradient-to-r from-transparent via-[#0a66c2]/60 to-transparent" : "bg-gradient-to-r from-transparent via-white/10 to-transparent"}`} />

              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-[#0a66c2] text-[#ffffff] text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_20px_rgba(10,102,194,0.5)]">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-sm text-[#6a7177]">{plan.description}</p>
                </div>

                <div className="mb-7">
                  <div className="flex items-end gap-1">
                    <AnimatePresence mode="wait">
                      <motion.span key={isYearly ? "y" : "m"} className="text-4xl font-bold text-white"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.22 }}
                      >
                        ${isYearly ? plan.yearly : plan.monthly}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-[#555d64] mb-1">/mo</span>
                  </div>
                  {isYearly && (
                    <motion.p className="text-xs text-[#555d64] mt-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      Billed ${plan.yearly * 12}/year
                    </motion.p>
                  )}
                </div>

                <a href="https://linkedinflowfe.vercel.app" target="_blank" rel="noopener noreferrer" className="mb-7">
                  <Button className={`w-full font-semibold transition-all duration-200
                    ${plan.popular
                      ? "bg-[#0a66c2] text-[#ffffff] hover:bg-[#1477d4] border-0 shadow-[0_0_22px_rgba(10,102,194,0.3)] hover:shadow-[0_0_32px_rgba(10,102,194,0.5)]"
                      : "bg-white/[0.06] text-white border border-white/[0.1] hover:bg-white/[0.1]"}`}
                  >
                    {plan.popular ? "Start Free Trial" : "Choose Plan"}
                  </Button>
                </a>

                <div className="h-px bg-white/[0.06] mb-6" />
                <ul className="space-y-3.5 mt-auto">
                  {plan.features.map((f, j) => (
                    <motion.li key={f}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.4, delay: i * 0.13 + j * 0.07 + 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-[#0a66c2]/20" : "bg-white/[0.06]"}`}>
                        <Check className={`w-2.5 h-2.5 ${plan.popular ? "text-[#0a66c2]" : "text-[#6a7177]"}`} />
                      </span>
                      <span className="text-sm text-[#8a929a]">{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p className="text-center text-sm text-[#555d64] mt-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VP}
          transition={{ delay: 0.6 }}
        >
          14-day free trial · No credit card required · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
