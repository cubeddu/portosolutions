import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What types of walls can you mount TVs on?',
    answer: 'We can mount TVs on virtually any wall type, including drywall with wood studs, brick, concrete, stone, and metal studs. Our technicians will assess your wall and recommend the best mounting solution for your specific situation.'
  },
  {
    question: 'Can you hide the cables in the wall?',
    answer: 'Yes, we offer in-wall cable concealment for a clean, professional look. This service is included in our Premium and Custom packages, and can be added to the Standard package for an additional fee.'
  },
  {
    question: 'How long does a typical TV mounting take?',
    answer: 'A standard TV mounting typically takes 1-2 hours to complete. More complex installations with in-wall wiring or custom solutions may take 2-4 hours. We\'ll provide you with a time estimate before beginning the work.'
  },
  {
    question: 'Do I need to provide the mounting bracket?',
    answer: 'We provide high-quality mounting brackets with all our installation packages. If you already have a bracket you\'d like us to use, we can install it as long as it\'s compatible with your TV and wall type.'
  },
  {
    question: 'Is my TV too big to mount?',
    answer: 'We can mount TVs of virtually any size. For very large TVs (over 85"), we recommend our Premium or Custom mounting solutions which include heavy-duty hardware and additional installation measures for safety and security.'
  },
  {
    question: 'What areas do you service?',
    answer: 'We currently service the greater metropolitan area and surrounding suburbs within a 50-mile radius. For locations outside our standard service area, please contact us for availability and any additional travel fees.'
  },
  {
    question: 'How do I prepare for my TV mounting appointment?',
    answer: 'Before we arrive, please ensure your TV and any related devices are unpacked. Clear the area around where you want the TV mounted. If you\'re unsure about the best location, don\'t worry—our technicians can help you determine optimal placement.'
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-secondary-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find answers to our most commonly asked questions
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-secondary-200 pb-4 last:border-b-0 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none group"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-display font-semibold text-secondary-900 group-hover:text-accent-600 transition-colors">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-accent-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                )}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pt-4 text-secondary-600">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-secondary-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 transition-colors duration-200"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;