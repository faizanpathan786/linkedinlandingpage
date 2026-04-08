import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to scale your LinkedIn presence?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Join 2,000+ professionals who have put their LinkedIn growth on autopilot. 
          Start your 14-day free trial today.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-base text-primary">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
            Book a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
