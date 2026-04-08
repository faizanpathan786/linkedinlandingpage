import { motion } from "framer-motion";
import { Star, Linkedin, Music, Tv, Wind } from "lucide-react";

export function SocialProof() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Founder & CEO",
      quote: "LinkedInFlow completely changed how I manage my presence. I went from spending 3 hours a week on content to 30 minutes. The engagement speaks for itself.",
      initials: "SJ"
    },
    {
      name: "Marcus Wei",
      role: "Growth Marketer",
      quote: "The analytics are exactly what I needed. I can see exactly which formats work and double down. My reach is up 400% since I started using this tool.",
      initials: "MW"
    },
    {
      name: "Elena Rodriguez",
      role: "B2B Sales Leader",
      quote: "Scheduling posts for my entire team from one dashboard is a superpower. We look like a coordinated media machine.",
      initials: "ER"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            Trusted by 2,000+ professionals at innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            <Music className="w-8 h-8" />
            <Wind className="w-8 h-8" />
            <Tv className="w-8 h-8" />
            <Linkedin className="w-8 h-8" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex gap-1 text-primary mb-4">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
