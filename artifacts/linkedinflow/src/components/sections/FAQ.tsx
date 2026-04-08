import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      q: "Is it safe to connect my LinkedIn account?",
      a: "Yes. We use LinkedIn's official OAuth API to connect to your account. We never see or store your password, and you can revoke access at any time from your LinkedIn settings."
    },
    {
      q: "Does using a scheduler hurt my reach?",
      a: "No. LinkedIn's official stance is that using their official API to publish posts does not negatively impact reach or engagement. Content quality is what matters."
    },
    {
      q: "What's included in the 14-day free trial?",
      a: "You get full access to the Pro plan features during your trial, including unlimited scheduling, advanced analytics, and AI suggestions. No credit card required."
    },
    {
      q: "Can I cancel at any time?",
      a: "Absolutely. There are no lock-in contracts. If you cancel, your subscription will remain active until the end of your current billing period."
    },
    {
      q: "What happens to my posts if I downgrade?",
      a: "Your previously published posts remain on LinkedIn forever. If you downgrade to a plan with lower limits, we'll keep your drafts safe but you won't be able to schedule beyond your new limit."
    },
    {
      q: "Do you offer support?",
      a: "Yes, all plans include email support. Pro and Agency plans include priority support with guaranteed 24-hour response times during business days."
    }
  ];

  return (
    <section className="py-24 px-4 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about the product and billing.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
