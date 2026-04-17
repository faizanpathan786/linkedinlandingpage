import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Sparkles, Layers, Lock, LineChart, Archive, Users } from "lucide-react";

/* ── data ── */
const FEATURES = [
  {
    icon: <Sparkles className="w-5 h-5 text-[#a3e635]" />,
    title: "AI-assisted post creation",
    description: "Draft engaging posts in seconds with smart suggestions tailored to your voice and audience.",
  },
  {
    icon: <Layers className="w-5 h-5 text-[#a3e635]" />,
    title: "Drafts & publishing workflow",
    description: "Manage your content pipeline from idea to published with a visual kanban board.",
  },
  {
    icon: <Lock className="w-5 h-5 text-[#a3e635]" />,
    title: "LinkedIn OAuth connection",
    description: "Connect your LinkedIn account safely with one click. We never ask for passwords.",
  },
  {
    icon: <LineChart className="w-5 h-5 text-[#a3e635]" />,
    title: "Post analytics",
    description: "Track reach, impressions, and engagement on every post to see what resonates.",
  },
  {
    icon: <Archive className="w-5 h-5 text-[#a3e635]" />,
    title: "Content vault",
    description: "Never lose a post — browse, reuse, and remix past high-performing content.",
  },
  {
    icon: <Users className="w-5 h-5 text-[#a3e635]" />,
    title: "Team batch processing",
    description: "Schedule and publish in bulk for your entire team's accounts from one view.",
  },
];

/* ── per-column entry direction ── */
const ENTRY_X = [-90, 0, 90]; // left, centre, right
const ENTRY_Y = [-20, -70, -20];

/* ── individual card ── */
interface CardProps {
  feature: (typeof FEATURES)[number];
  index: number;
  isActive: boolean;
  onActivate: () => void;
  reduceMotion: boolean | null;
}

function FeatureCard({ feature, index, isActive, onActivate, reduceMotion }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });

  /* ── mouse-tracking tilt (motion values → springs) ── */
  const rawX = useMotionValue(0); // -0.5 … 0.5
  const rawY = useMotionValue(0);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 350, damping: 28,
  });
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [12, -12]), {
    stiffness: 350, damping: 28,
  });

  /* ── specular highlight position ── */
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  /* ── one-shot shimmer sweep ── */
  const [swept, setSwept] = useState(false);

  const col = index % 3;
  const entryX = ENTRY_X[col];
  const entryY = ENTRY_Y[col];
  const delay = index * 0.11;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(x);
    rawY.set(y);
    setGlow({ x: (x + 0.5) * 100, y: (y + 0.5) * 100 });
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
    setGlow({ x: 50, y: 50 });
  }

  return (
    /* perspective wrapper — must NOT be a motion element to avoid conflict */
    <div style={{ perspective: "900px" }} onMouseEnter={onActivate}>
      <motion.div
        ref={ref}
        /* 3D tilt via motion values */
        style={reduceMotion ? {} : { rotateX, rotateY }}
        /* scroll-in entry */
        initial={reduceMotion ? false : {
          opacity: 0,
          x: entryX,
          y: entryY,
          scale: 0.84,
          filter: "blur(12px)",
        }}
        animate={isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
          : {}
        }
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-2xl border border-white/[0.08]
                   bg-[linear-gradient(160deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)]
                   p-6 shadow-[0_16px_48px_rgba(0,0,0,0.35)] cursor-default h-full"
      >
        {/* ── active top-edge glow line ── */}
        <motion.div
          className="absolute inset-x-0 top-0 h-px pointer-events-none"
          animate={{
            background: isActive
              ? "linear-gradient(90deg,transparent,rgba(138,203,79,0.9),transparent)"
              : "linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)",
            opacity: isActive ? 1 : 0.6,
          }}
          transition={{ duration: 0.45 }}
        />

        {/* ── corner orb that grows when active ── */}
        <motion.div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#a3e635]/12 blur-3xl pointer-events-none"
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1.3 : 0.7 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── specular / mouse-follow highlight ── */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                     transition-opacity duration-300"
          style={{
            background: `radial-gradient(380px circle at ${glow.x}% ${glow.y}%,
              rgba(138,203,79,0.11), transparent 65%)`,
          }}
        />

        {/* ── one-shot shimmer sweep on scroll entry ── */}
        <AnimatePresence>
          {isInView && !swept && (
            <motion.div
              key="sweep"
              className="pointer-events-none absolute inset-y-0 w-28 z-10
                         bg-gradient-to-r from-transparent via-white/[0.09] to-transparent
                         skew-x-[18deg]"
              initial={{ x: "-140%" }}
              animate={{ x: "220%" }}
              exit={{}}
              transition={{ duration: 0.75, delay: delay + 0.22, ease: "easeOut" }}
              onAnimationComplete={() => setSwept(true)}
            />
          )}
        </AnimatePresence>

        {/* ── icon box ── */}
        <motion.div
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl
                     border border-[#a3e635]/25 bg-[#a3e635]/10 shrink-0"
          animate={
            isActive && !reduceMotion
              ? { scale: [1, 1.18, 0.95, 1.05, 1], rotate: [0, -10, 8, -4, 0] }
              : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {feature.icon}
        </motion.div>

        {/* ── text ── */}
        <h3 className="text-base font-bold text-white mb-2 leading-snug
                       group-hover:text-[#e8f8ca] transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-sm text-[#7a8390] leading-relaxed">
          {feature.description}
        </p>

        {/* ── bottom accent bar (expands when active) ── */}
        <motion.div
          className="mt-5 h-px rounded-full bg-gradient-to-r from-[#a3e635] to-[#c8f570]"
          animate={{
            scaleX: isActive ? 1 : 0.25,
            opacity: isActive ? 1 : 0.2,
          }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </div>
  );
}

/* ── section ── */
export function Features() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActiveIndex((c) => (c + 1) % FEATURES.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section id="features" className="relative overflow-hidden py-24 px-4 bg-background">
      {/* Ambient radial backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(138,203,79,0.08)_0%,transparent_50%)]" />

      {/* Floating orbs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#a3e635]/8 blur-3xl"
        animate={{ y: [0, -16, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/8 blur-3xl"
        animate={{ y: [0, 18, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mx-auto mb-5 h-px w-24 bg-gradient-to-r from-transparent via-[#a3e635] to-transparent"
            animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.85, 1.1, 0.85] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a3e635] mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Everything you need to scale
          </h2>
          <p className="text-lg text-[#7a8390]">
            We built the exact tools we wanted for our own LinkedIn growth. No fluff, just pure utility.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <FeatureCard
              key={i}
              feature={f}
              index={i}
              isActive={activeIndex === i}
              onActivate={() => setActiveIndex(i)}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
