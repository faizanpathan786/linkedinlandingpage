import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Clock, CheckCircle2, Send } from "lucide-react";

const VP = { once: false, amount: 0 } as const;

const perks = [
  { icon: Clock,         label: "Response within 24 hours"     },
  { icon: MessageSquare, label: "Dedicated account walkthrough" },
  { icon: CheckCircle2,  label: "No sales pressure, ever"       },
];

const STATS = [
  { value: 2000, suffix: "+", label: "Professionals" },
  { value: 24,   suffix: "h", label: "Avg. response"  },
  { value: 98,   suffix: "%", label: "Satisfaction"   },
];

/* ── Count-up number ── */
function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) { setCount(0); return; }
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = to / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [isInView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Word-reveal heading ── */
function WordReveal({ text }: { text: string }) {
  return (
    <span className="inline-flex flex-wrap gap-x-[0.28em]">
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden inline-block leading-tight">
          <motion.span
            className="inline-block"
            initial={{ y: "115%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={VP}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ── Shimmer sweep (fires once per in-view cycle) ── */
function ShimmerSweep({ trigger }: { trigger: boolean }) {
  const [swept, setSwept] = useState(false);

  useEffect(() => {
    if (trigger) setSwept(false);
  }, [trigger]);

  return (
    <AnimatePresence>
      {trigger && !swept && (
        <motion.div
          key="sweep"
          className="pointer-events-none absolute inset-y-0 w-32 z-20
                     bg-gradient-to-r from-transparent via-white/[0.07] to-transparent skew-x-[18deg]"
          initial={{ x: "-140%" }}
          animate={{ x: "200%" }}
          exit={{}}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          onAnimationComplete={() => setSwept(true)}
        />
      )}
    </AnimatePresence>
  );
}

export function ContactUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0 });
  const [submitted, setSubmitted] = useState(false);

  const FIELDS = [
    { id: "contact-name",  label: "Name",    type: "text",  placeholder: "Your name",       autoComplete: undefined },
    { id: "contact-email", label: "Email",   type: "email", placeholder: "you@company.com", autoComplete: "email"   },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 px-4 bg-[#060810] border-t border-white/[0.05] relative overflow-hidden"
    >
      {/* Ambient orbs */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8acb4f]/6 blur-[130px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-6xl mx-auto grid gap-14 lg:grid-cols-[1fr_1.1fr] items-start relative z-10">

        {/* ── LEFT PANEL ── */}
        <div>
          {/* Label with pulsing dot */}
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-[#8acb4f]"
              animate={{ opacity: [1, 0.2, 1], scale: [1, 1.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8acb4f]">
              Contact us
            </span>
          </motion.div>

          {/* Heading — word reveal */}
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
            <WordReveal text="Reach out for a tailored walkthrough." />
          </h2>

          {/* Sub-copy */}
          <motion.p
            className="text-[#7a8390] text-lg leading-relaxed mb-10"
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={VP}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Send a message and we'll follow up with the best setup for your team,
            workflow, and publishing goals.
          </motion.p>

          {/* Count-up stats row */}
          <motion.div
            className="grid grid-cols-3 gap-4 mb-10 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {STATS.map(({ value, suffix, label }, i) => (
              <motion.div
                key={label}
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.45, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-2xl font-bold text-white">
                  <CountUp to={value} suffix={suffix} />
                </div>
                <div className="text-xs text-[#555d64] mt-0.5">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Perks — stagger from left */}
          <ul className="space-y-4">
            {perks.map(({ icon: Icon, label }, j) => (
              <motion.li
                key={label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -50, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={VP}
                transition={{ duration: 0.5, delay: 0.55 + j * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="w-9 h-9 rounded-xl bg-[#8acb4f]/10 border border-[#8acb4f]/20 flex items-center justify-center shrink-0"
                  whileInView={{ scale: [0.5, 1.15, 1] }}
                  viewport={VP}
                  transition={{ duration: 0.45, delay: 0.6 + j * 0.12, ease: "backOut" }}
                >
                  <Icon className="w-4 h-4 text-[#8acb4f]" />
                </motion.span>
                <span className="text-sm text-[#8a929a]">{label}</span>
              </motion.li>
            ))}
          </ul>

          {/* Email */}
          <motion.div
            className="mt-10 flex items-center gap-3 text-sm text-[#555d64]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VP}
            transition={{ delay: 0.95 }}
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>hello@linkedinflow.com</span>
          </motion.div>
        </div>

        {/* ── FORM CARD ── */}
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, x: 90, scale: 0.88, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          viewport={VP}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: "linear-gradient(160deg,rgba(255,255,255,0.055) 0%,rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Top shine */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          {/* Shimmer sweep on entry */}
          <ShimmerSweep trigger={isInView} />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
                transition={{ duration: 0.3 }}
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="p-7 md:p-9"
              >
                {/* Name + Email fields */}
                <div className="grid gap-4 sm:grid-cols-2 mb-4">
                  {FIELDS.map((f, k) => (
                    <motion.div
                      key={f.id}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={VP}
                      transition={{ duration: 0.5, delay: 0.35 + k * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <label htmlFor={f.id} className="text-sm font-medium text-[#c8d0d8]">{f.label}</label>
                      <Input
                        id={f.id}
                        name={f.id.replace("contact-", "")}
                        type={f.type}
                        placeholder={f.placeholder}
                        autoComplete={f.autoComplete}
                        className="bg-white/[0.04] border-white/[0.08] text-white placeholder:text-[#3d4449]
                                   focus:border-[#8acb4f]/50 focus:ring-[#8acb4f]/20 transition-all duration-200"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Message textarea */}
                <motion.div
                  className="space-y-2 mb-6"
                  initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={VP}
                  transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <label htmlFor="contact-message" className="text-sm font-medium text-[#c8d0d8]">Message</label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us what you need help with"
                    className="min-h-36 bg-white/[0.04] border-white/[0.08] text-white placeholder:text-[#3d4449]
                               focus:border-[#8acb4f]/50 focus:ring-[#8acb4f]/20 transition-all duration-200 resize-none"
                  />
                </motion.div>

                {/* Footer row */}
                <motion.div
                  className="flex items-center justify-between gap-4 flex-col sm:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-sm text-[#555d64]">We usually respond within one business day.</p>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-[#8acb4f] text-[#111415] hover:bg-[#a0d95e] border-0
                               font-semibold shadow-[0_0_20px_rgba(138,203,79,0.25)]
                               hover:shadow-[0_0_32px_rgba(138,203,79,0.5)] transition-all duration-200"
                  >
                    <Send className="w-4 h-4 mr-2" /> Send message
                  </Button>
                </motion.div>
              </motion.form>
            ) : (
              /* ── Success state ── */
              <motion.div
                key="success"
                className="p-7 md:p-9 flex flex-col items-center justify-center min-h-[340px] text-center"
                initial={{ opacity: 0, scale: 0.88, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-[#8acb4f]/15 border border-[#8acb4f]/30 flex items-center justify-center mb-5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, duration: 0.5, ease: "backOut" }}
                >
                  <CheckCircle2 className="w-8 h-8 text-[#8acb4f]" />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Message sent!
                </motion.h3>
                <motion.p
                  className="text-[#7a8390] text-sm mb-6"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  We'll get back to you within one business day.
                </motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <Button
                    variant="outline"
                    className="border-white/[0.1] text-white hover:bg-white/[0.06] text-sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
