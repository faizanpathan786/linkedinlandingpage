import { motion } from "framer-motion";
import { Link2, PenTool, BarChart3 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Link2 className="w-6 h-6 text-primary" />,
      title: "Connect LinkedIn",
      description: "Securely link your profile or company page via official API."
    },
    {
      icon: <PenTool className="w-6 h-6 text-primary" />,
      title: "Create & Schedule",
      description: "Write, preview, and organize your posts on the visual calendar."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Publish & Track",
      description: "We auto-publish at the best times and collect the engagement data."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How it works</h2>
          <p className="text-lg text-muted-foreground">From blank page to viral post in three steps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-border z-0" />

          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className="relative z-10 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center shadow-sm mb-6 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md">
                  {i + 1}
                </div>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
