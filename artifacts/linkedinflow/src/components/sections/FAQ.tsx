import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const VP = { once: false, amount: 0 } as const;

const faqs = [
  { q: "Is it safe to connect my LinkedIn account?",
    a: "Yes. We use LinkedIn's official OAuth API to connect to your account. We never see or store your password, and you can revoke access at any time from your LinkedIn settings." },
  { q: "Does using a scheduler hurt my reach?",
    a: "No. LinkedIn's official stance is that using their official API to publish posts does not negatively impact reach or engagement. Content quality is what matters." },
  { q: "What's included in the 14-day free trial?",
    a: "You get full access to the Pro plan features during your trial, including unlimited scheduling, advanced analytics, and AI suggestions. No credit card required." },
  { q: "Can I cancel at any time?",
    a: "Absolutely. There are no lock-in contracts. If you cancel, your subscription remains active until the end of your current billing period." },
  { q: "What happens to my posts if I downgrade?",
    a: "Your previously published posts remain on LinkedIn forever. If you downgrade, we keep your drafts safe but you won't be able to schedule beyond your new plan's limit." },
  { q: "Do you offer support?",
    a: "Yes, all plans include email support. Pro and Agency plans include priority support with guaranteed 24-hour response times during business days." },
];

function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`${className} inline-flex flex-wrap justify-center gap-x-[0.3em]`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden inline-block leading-tight">
          <motion.span className="inline-block"
            initial={{ y: "115%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={VP}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 px-4 bg-[#eef3f8] border-t border-[#dce6f1] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0a66c2]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0a66c2] mb-3"
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={VP} transition={{ duration: 0.5 }}
          >
            FAQ
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#191919] tracking-tight mb-3">
            <WordReveal text="Frequently asked questions" />
          </h2>
          <motion.p className="text-[#595959]"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.55, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Everything you need to know before getting started.
          </motion.p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const entryX = i % 2 === 0 ? -60 : 60;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: entryX, scale: 0.94, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                viewport={VP}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-xl border transition-colors duration-200
                  ${isOpen
                    ? "border-[#0a66c2]/25 bg-white shadow-[0_0_0_3px_rgba(10,102,194,0.06)]"
                    : "border-[#e0dfdc] bg-white hover:border-[#0a66c2]/25 shadow-sm"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left focus:outline-none group"
                >
                  <span className={`shrink-0 text-xs font-mono font-bold tabular-nums transition-colors duration-200 ${isOpen ? "text-[#0a66c2]" : "text-[#86888a]"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`flex-1 text-sm font-semibold transition-colors duration-200 ${isOpen ? "text-[#191919]" : "text-[#374151] group-hover:text-[#191919]"}`}>
                    {faq.q}
                  </span>
                  <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-[#0a66c2]/12 text-[#0a66c2]" : "bg-[#eef3f8] text-[#595959]"}`}>
                    {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pl-[3.25rem] text-sm text-[#595959] leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
