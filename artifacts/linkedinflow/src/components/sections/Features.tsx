import { motion } from "framer-motion";
import { Sparkles, Layers, Lock, LineChart, Archive, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "AI-assisted post creation",
      description: "Draft engaging posts in seconds with smart suggestions tailored to your voice."
    },
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "Drafts & publishing workflow",
      description: "Manage your content pipeline from idea to published with a visual kanban board."
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "LinkedIn OAuth connection",
      description: "Connect your LinkedIn account safely with one click. We never ask for passwords."
    },
    {
      icon: <LineChart className="w-6 h-6 text-primary" />,
      title: "Post analytics",
      description: "Track reach, impressions, and engagement on every post to see what resonates."
    },
    {
      icon: <Archive className="w-6 h-6 text-primary" />,
      title: "Content vault",
      description: "Never lose a post — browse, reuse, and remix past high-performing content."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Team batch processing",
      description: "Schedule and publish in bulk for your entire team's accounts from one view."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to scale</h2>
          <p className="text-lg text-muted-foreground">
            We built the exact tools we wanted for our own LinkedIn growth. No fluff, just pure utility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="group p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-all hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
