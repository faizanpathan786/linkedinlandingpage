import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Calendar,
  BarChart2,
  Plus,
  LayoutDashboard,
  Send,
  TrendingUp,
  Users,
} from "lucide-react";

export function Hero() {
  const titleRows = [
    ["Automate", "Your"],
    ["LinkedIn", "Growth"],
    ["Without", "the", "Busywork"],
  ];

  return (
    <section className="pt-32 pb-24 px-4 overflow-hidden relative bg-[#f3f2ee]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-125 bg-[#0a66c2]/5 blur-[130px] rounded-full pointer-events-none" />
      <motion.div
        className="absolute top-24 left-[8%] w-80 h-80 bg-[#0a66c2]/6 blur-[90px] rounded-full pointer-events-none"
        animate={{ x: [0, 28, 0], y: [0, -18, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-[8%] w-72 h-72 bg-[#0a66c2]/5 blur-[90px] rounded-full pointer-events-none"
        animate={{ x: [0, -22, 0], y: [0, 22, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0a66c2]/25 bg-[#eef3f8] px-4 py-1.5 text-sm font-medium text-[#0a66c2] mb-7">
              <motion.span
                className="w-2 h-2 rounded-full bg-[#0a66c2] shrink-0"
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              Introducing LinkedInFlow 2.0
            </span>
          </motion.div>

          <motion.h1
            className="hero-tech-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.12] px-2"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { delayChildren: 0.12, staggerChildren: 0.12 },
              },
            }}
          >
            {titleRows.map((row, rowIndex) => (
              <div key={row.join("-")} className="overflow-x-visible overflow-y-hidden">
                <motion.div
                  className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4"
                  variants={{
                    hidden: { y: "120%", opacity: 0 },
                    show: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.72,
                        ease: [0.22, 1, 0.36, 1],
                        delay: rowIndex * 0.06,
                      },
                    },
                  }}
                >
                  {row.map((word) => {
                    const isHighlight = rowIndex === 1;
                    return (
                      <motion.span key={word} className="inline-block">
                        <span className={isHighlight ? "hero-tech-blue animate-shimmer" : "hero-tech-metal"}>
                          {word}
                        </span>
                      </motion.span>
                    );
                  })}
                </motion.div>
              </div>
            ))}
          </motion.h1>

          <motion.div
            className="mx-auto mb-6 h-px w-28 bg-linear-to-r from-transparent via-[#0a66c2] to-transparent"
            initial={{ opacity: 0, scaleX: 0.35 }}
            animate={{ opacity: [0.35, 0.75, 0.35], scaleX: [0.35, 1, 0.35] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
          />

          <motion.p
            className="text-xl text-[#595959] mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Create, schedule, and publish high-quality LinkedIn content from one dashboard.
            The professional's shortcut to building an audience.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="https://linkedinflowfe.vercel.app" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-base bg-[#0a66c2] text-white hover:bg-[#004182] border-0
                           font-semibold shadow-[0_4px_20px_rgba(10,102,194,0.30)] hover:shadow-[0_4px_28px_rgba(10,102,194,0.45)]
                           transition-all duration-200"
              >
                Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="https://linkedinflowfe.vercel.app" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-8 text-base border-[#0a66c2]/25 text-[#0a66c2]
                           hover:bg-[#eef3f8] hover:border-[#0a66c2]/40 transition-all duration-200"
              >
                <Play className="mr-2 w-4 h-4" /> See Demo
              </Button>
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            className="hidden lg:flex absolute -left-2 top-10 z-20 items-center gap-3 rounded-2xl border border-[#dce6f1] bg-white px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, x: -32, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-9 h-9 rounded-xl bg-[#0a66c2]/12 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4 text-[#0a66c2]" />
            </div>
            <div>
              <div className="text-xs text-[#86888a]">Avg. reach increase</div>
              <div className="text-lg font-bold text-[#0a66c2] leading-tight">+400%</div>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:flex absolute -right-2 top-10 z-20 items-center gap-3 rounded-2xl border border-[#dce6f1] bg-white px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, x: 32, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-9 h-9 rounded-xl bg-[#0a66c2]/12 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 text-[#0a66c2]" />
            </div>
            <div>
              <div className="text-xs text-[#86888a]">Active professionals</div>
              <div className="text-lg font-bold text-[#191919] leading-tight">2,000+</div>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto max-w-5xl"
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45 }}
          >
            <div className="absolute -inset-x-8 -bottom-6 h-44 bg-[#0a66c2]/8 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -inset-x-4 bottom-0 h-20 bg-[#0a66c2]/5 blur-2xl rounded-full pointer-events-none" />

            <div className="rounded-2xl border border-[#dce6f1] bg-[#0d1117] shadow-[0_16px_60px_rgba(0,0,0,0.20)] overflow-hidden">
              <div className="h-12 border-b border-white/6 bg-[#111418] flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#c5cac7]" />
                  <div className="w-3 h-3 rounded-full bg-[#a2a5f2]" />
                  <div className="w-3 h-3 rounded-full bg-[#8ad14d]" />
                </div>
                <div className="mx-auto bg-[#0b0d10] rounded-md px-3 py-1 text-xs font-medium text-[#6a7177] border border-white/6 flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-sm bg-primary/90" />
                  </div>
                  linkedinflow.com/dashboard
                </div>
              </div>

              <div className="flex h-150 bg-[#080b0e]">
                <div className="w-64 border-r border-white/6 bg-[#0b0d0f] p-4 hidden md:flex md:flex-col text-white">
                  <div className="space-y-1 mt-4">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#0d243d] text-[#6fb6ff] font-medium border border-[#1c4f88]/60">
                      <LayoutDashboard className="w-4 h-4" /> Dashboard
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-[#8a9299]">
                      <Calendar className="w-4 h-4" /> Calendar
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-[#8a9299]">
                      <BarChart2 className="w-4 h-4" /> Analytics
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/6">
                    <Button className="w-full justify-start bg-[#14181a] text-white border-white/8" variant="outline">
                      <Plus className="w-4 h-4 mr-2" /> New Post
                    </Button>
                  </div>
                </div>

                <div className="flex-1 p-6 overflow-hidden flex flex-col bg-[#080b0e]">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-white">Upcoming Posts</h2>
                    <span className="text-sm text-[#6a7177]">This Week</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 flex flex-col gap-4">
                      <div className="rounded-xl border border-white/6 bg-[#0d1117] p-4 shadow-sm flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">JD</div>
                          <div>
                            <div className="text-sm font-medium text-white">John Doe</div>
                            <div className="text-xs text-[#6a7177]">Posting to LinkedIn</div>
                          </div>
                          <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-[#0a66c2]/15 text-[#0a66c2] font-medium border border-[#0a66c2]/20">
                            Scheduled
                          </span>
                        </div>
                        <div className="text-sm text-[#8a929a] mb-4 font-mono leading-relaxed bg-[#0b0e12] p-3 rounded-lg border border-white/5">
                          Just hit 10k MRR with our new product!<br /><br />
                          Here are 3 lessons we learned along the way:<br />
                          1. Talk to users before building<br />
                          2. Ship fast, iterate faster<br />
                          3. Focus on distribution from day 1<br /><br />
                          What's your biggest takeaway from launching?
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          <div className="text-xs text-[#6a7177] flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" /> Tomorrow, 9:00 AM
                          </div>
                          <Button size="sm" className="h-8 bg-[#0a66c2] text-white hover:bg-[#004182] border-0 font-medium">
                            <Send className="w-3 h-3 mr-1.5" /> Schedule
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="rounded-xl border border-white/6 bg-[#0d1117] p-4 shadow-sm">
                        <div className="text-sm font-medium text-[#6a7177] mb-1">Weekly Reach</div>
                        <div className="text-2xl font-bold text-white">
                          24.5k <span className="text-xs text-[#0a66c2] font-normal ml-1">+12%</span>
                        </div>
                        <div className="h-10 mt-4 flex items-end gap-1">
                          {[40, 70, 45, 90, 65, 30, 80].map((h, i) => (
                            <div key={i} className="flex-1 bg-primary/10 rounded-t-sm relative">
                              <div className="absolute bottom-0 left-0 right-0 bg-primary/70 rounded-t-sm" style={{ height: `${h}%` }} />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/6 bg-[#0d1117] p-4 shadow-sm flex-1">
                        <h3 className="text-sm font-medium text-white mb-3">Queue</h3>
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-start gap-3 p-2 rounded-md hover:bg-white/3 transition-colors">
                              <div className="w-2 h-2 rounded-full bg-[#0a66c2] mt-1.5 shrink-0" />
                              <div>
                                <div className="text-sm font-medium text-white line-clamp-1">How to build a SaaS...</div>
                                <div className="text-xs text-[#6a7177]">Wed, 10:00 AM</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
