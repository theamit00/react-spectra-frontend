import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = {
  "tab-one": [
    {
      question: "Is Spectra compatible with all devices?",
      answer:
        "Yes, Spectra is device-agnostic, ensuring seamless access and compatibility across various devices.",
    },
    {
      question: "Is Spectra compatible with all devices?",
      answer:
        "Yes, Spectra is device-agnostic, ensuring seamless access and compatibility across various devices.",
    },
    {
      question: "Is Spectra compatible with all devices?",
      answer:
        "Yes, Spectra is device-agnostic, ensuring seamless access and compatibility across various devices.",
    },
    {
      question: "Is Spectra compatible with all devices?",
      answer:
        "Yes, Spectra is device-agnostic, ensuring seamless access and compatibility across various devices.",
    },
  ],
  "tab-two": [
    {
      question: "What sets Spectra's interface apart?",
      answer:
        "Spectra blends power and simplicity for both designers and developers, ensuring an intuitive yet robust experience.",
    },
    {
      question: "How does Spectra improve collaboration?",
      answer:
        "Spectra enables real-time collaboration, ensuring seamless communication between design and development teams.",
    },
    {
      question: "Is Spectra adaptable to different preferences?",
      answer:
        "Yes, Spectra is versatile, allowing customization for both designers and developers to suit their preferences.",
    },
    {
      question: "How does Spectra enhance efficiency?",
      answer:
        "Spectra optimizes workflow with an intuitive interface, reducing errors and speeding up project delivery.",
    },
  ],
};

export default function CustomAccordian({ value }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-6 max-w-[520px]"
    >
      {faqs[value].map((faq, index) => (
        <AccordionItem
          key={index}
          value={index + 1}
          className="bg-cream border-[1.5px] border-black rounded-[12px] sm-box-shadow p-[16px_24px] flex flex-col gap-3 "
        >
          <AccordionTrigger className="hover:no-underline text-[18px] leading-5 tracking-[-0.26px] p-0 text-left ">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="sm-p font-inter p-0">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
