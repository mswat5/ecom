import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How long does shipping take?</AccordionTrigger>
          <AccordionContent>
            Shipping typically takes 3-5 business days for domestic orders and
            7-14 days for international orders.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            We offer a 30-day return policy for all unused items in their
            original packaging.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Do you offer warranty on products?
          </AccordionTrigger>
          <AccordionContent>
            Yes, all our products come with a standard 1-year warranty against
            manufacturing defects.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
