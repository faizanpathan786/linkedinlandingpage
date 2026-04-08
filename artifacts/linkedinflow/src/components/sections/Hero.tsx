import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Calendar, BarChart2, Plus, LayoutDashboard, Send } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden relative">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              Introducing LinkedInFlow 2.0
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Automate Your LinkedIn Growth Without the Busywork
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
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
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base">
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base">
              <Play className="mr-2 w-4 h-4" /> See Demo
            </Button>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          className="relative mx-auto max-w-5xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Mac window header */}
          <div className="h-12 border-b border-border bg-muted/50 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="mx-auto bg-background rounded-md px-3 py-1 text-xs font-medium text-muted-foreground border border-border shadow-sm flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-sm bg-primary" />
              </div>
              linkedinflow.com/dashboard
            </div>
          </div>
          
          <div className="flex h-[600px] bg-background">
            {/* Sidebar */}
            <div className="w-64 border-r border-border bg-muted/20 p-4 flex flex-col hidden md:flex">
              <div className="space-y-1 mt-4">
                <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-primary/10 text-primary font-medium">
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted">
                  <Calendar className="w-4 h-4" /> Calendar
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted">
                  <BarChart2 className="w-4 h-4" /> Analytics
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-border">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" /> New Post
                </Button>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-6 overflow-hidden flex flex-col bg-background">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Upcoming Posts</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">This Week</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Editor Area */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                  <div className="rounded-lg border border-border bg-card p-4 shadow-sm flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">JD</div>
                      <div>
                        <div className="text-sm font-medium">John Doe</div>
                        <div className="text-xs text-muted-foreground">Posting to LinkedIn</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-foreground/80 mb-4 font-mono leading-relaxed bg-muted/30 p-3 rounded border border-border">
                      Just hit 10k MRR with our new product! 🚀<br/><br/>
                      Here are 3 lessons we learned along the way:<br/>
                      1. Talk to users before building<br/>
                      2. Ship fast, iterate faster<br/>
                      3. Focus on distribution from day 1<br/><br/>
                      What's your biggest takeaway from launching? 👇
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Scheduled for Tomorrow, 9:00 AM
                      </div>
                      <Button size="sm" className="h-8"><Send className="w-3 h-3 mr-2"/> Schedule</Button>
                    </div>
                  </div>
                </div>
                
                {/* Stats / Queue */}
                <div className="flex flex-col gap-4">
                  <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Weekly Reach</div>
                    <div className="text-2xl font-bold">24.5k <span className="text-xs text-green-500 font-normal ml-1">+12%</span></div>
                    <div className="h-10 mt-4 flex items-end gap-1">
                      {[40, 70, 45, 90, 65, 30, 80].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative group">
                           <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-sm transition-all" style={{ height: `${h}%` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-border bg-card p-4 shadow-sm flex-1">
                    <h3 className="text-sm font-medium mb-3">Queue</h3>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-start gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                          <div>
                            <div className="text-sm font-medium line-clamp-1">How to build a SaaS...</div>
                            <div className="text-xs text-muted-foreground">Wed, 10:00 AM</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
