import { PageTransition } from '@/components/PageTransition';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I track my order?',
    answer: 'Once your order ships, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier\'s website.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all items in their original condition with tags attached. Simply initiate a return through your account or contact our customer service team.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by location. All duties and taxes are the responsibility of the customer.',
  },
  {
    question: 'How do I know what size to order?',
    answer: 'Each product page includes a detailed size guide. We recommend taking your measurements and comparing them to our size chart. If you\'re between sizes, we suggest sizing up for a more comfortable fit.',
  },
  {
    question: 'Are your products authentic?',
    answer: 'Absolutely. We guarantee that all products sold on our website are 100% authentic and sourced directly from authorized distributors and brands.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Domestic orders typically arrive within 3-5 business days. International shipping takes 7-14 business days depending on your location. Express shipping options are available at checkout.',
  },
  {
    question: 'Can I cancel or modify my order?',
    answer: 'Orders can be modified or cancelled within 1 hour of placement. After that, the order enters our fulfillment process and cannot be changed. Please contact us immediately if you need to make changes.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay for your convenience.',
  },
];

const FAQ = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about orders, shipping, and returns
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a href="/contact" className="text-primary hover:underline font-medium">
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default FAQ;
