import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is sexual wellness and why is it important?",
    answer:
      "Sexual wellness refers to a state of physical, emotional, mental, and social well-being in relation to sexuality. It is important for overall health, self-esteem, and healthy relationships.",
  },
  {
    question: "How can I learn more about safe sex practices?",
    answer:
      "Our blog offers articles on protection methods, consent, and communication. Staying informed helps prevent STIs and unplanned pregnancies and fosters healthy intimacy.",
  },
  {
    question: "Is it normal to have questions about sexuality?",
    answer:
      "Yes, it's completely normal. Sexuality is a personal and evolving aspect of life. Our content is designed to answer common questions and break harmful stigmas.",
  },
  {
    question: "What are common myths about sexual health?",
    answer:
      "There are many myths, such as 'you can't get an STI from oral sex' or 'only teenagers need sex education.' Our blog debunks these with facts and science-backed insights.",
  },
  {
    question: "Can sexual wellness impact mental health?",
    answer:
      "Absolutely. Sexual well-being is closely linked to mental health. Feeling safe, respected, and confident in your sexuality can greatly improve emotional well-being.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#fdfaf6] py-10 px-4 md:px-10 min-h-screen flex items-center justify-center -mb-30">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-10 max-w-3xl w-full">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-gray-800 font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>

              {activeIndex === index && (
                <p className="mt-2 text-gray-700 text-sm md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
