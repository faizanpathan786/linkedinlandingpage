import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isYearly ? 15 : 19,
      description: "Perfect for individuals starting their journey.",
      features: [
        "1 LinkedIn account",
        "100 scheduled posts/month",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: isYearly ? 39 : 49,
      description: "For serious creators who need more power.",
      popular: true,
      features: [
        "5 LinkedIn accounts",
        "Unlimited scheduled posts",
        "Advanced analytics",
        "AI content suggestions",
        "Priority support"
      ]
    },
    {
      name: "Agency",
      price: isYearly ? 79 : 99,
      description: "For teams and social media managers.",
      features: [
        "20 LinkedIn accounts",
        "Team collaboration",
        "Bulk upload & batch scheduling",
        "White-label reports",
        "Dedicated onboarding"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">Start for free, upgrade when you need to.</p>
          
          <div className="flex items-center justify-center gap-3">
            <Label htmlFor="billing-toggle" className={`text-sm ${!isYearly ? 'font-bold' : 'text-muted-foreground'}`}>Monthly</Label>
            <Switch 
              id="billing-toggle" 
              checked={isYearly} 
              onCheckedChange={setIsYearly} 
            />
            <Label htmlFor="billing-toggle" className={`text-sm flex items-center gap-2 ${isYearly ? 'font-bold' : 'text-muted-foreground'}`}>
              Yearly <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">Save 20%</span>
            </Label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl border ${plan.popular ? 'border-primary shadow-lg scale-105 bg-card' : 'border-border bg-card/50'} p-8 flex flex-col h-full`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/mo</span>
                {isYearly && <div className="text-xs text-muted-foreground mt-1">Billed annually</div>}
              </div>
              
              <a href="https://linkedinflowfe.vercel.app" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full mb-8"
                >
                  {plan.popular ? "Start Free Trial" : "Choose Plan"}
                </Button>
              </a>
              
              <div className="space-y-4 mt-auto">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
