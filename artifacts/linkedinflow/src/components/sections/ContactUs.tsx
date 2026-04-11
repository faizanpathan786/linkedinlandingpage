import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactUs() {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary mb-4">
            Contact us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Reach out for a tailored walkthrough.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Send a message and we’ll follow up with the best setup for your team, workflow,
            and publishing goals.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="rounded-3xl border border-border bg-background p-6 md:p-8 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-sm font-medium">
                Name
              </label>
              <Input id="contact-name" name="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label htmlFor="contact-message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder="Tell us what you need help with"
              className="min-h-36"
            />
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 flex-col sm:flex-row">
            <p className="text-sm text-muted-foreground">
              We usually respond within one business day.
            </p>
            <Button type="submit" className="w-full sm:w-auto">
              Send message
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}