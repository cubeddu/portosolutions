import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle } from 'lucide-react';

interface PricingPlan {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    title: 'Standard Mount',
    price: 149,
    description: 'Perfect for standard TV mounting on drywall',
    features: [
      'TVs up to 65"',
      'Drywall with stud mounting',
      'Basic cable management',
      'TV leveling and secure installation',
      'Equipment setup and testing',
    ],
  },
  {
    id: 'premium',
    title: 'Premium Mount',
    price: 249,
    description: 'Enhanced installation with advanced features',
    features: [
      'TVs up to 85"',
      'All wall types including brick and concrete',
      'In-wall cable concealment',
      'TV leveling and secure installation',
      'Full connection of all devices',
      'Cable box/console shelf installation',
    ],
    popular: true,
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    price: 349,
    description: 'For complex or specialized installations',
    features: [
      'TVs of any size',
      'Custom mounting solutions',
      'Full in-wall wiring system',
      'Sound system integration',
      'Smart home setup and integration',
      'Articulating/motorized mounts',
    ],
  },
];

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-24 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-secondary-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the perfect mounting package for your needs with no hidden fees
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white border-2 border-accent-500 shadow-xl scale-105 md:scale-110 z-10' 
                  : 'bg-white border border-secondary-200 shadow-md'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-accent-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-2">
                  {plan.title}
                </h3>
                <p className="text-secondary-600 mb-6">{plan.description}</p>

                <div className="flex items-end mb-6">
                  <span className="text-4xl font-display font-bold text-secondary-900">${plan.price}</span>
                  <span className="text-secondary-500 ml-2 mb-1">one-time fee</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-accent-500 text-white hover:bg-accent-600'
                      : 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-white rounded-xl shadow-md max-w-4xl mx-auto p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start">
            <HelpCircle className="h-6 w-6 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-2">Need a custom quote?</h3>
              <p className="text-secondary-600 mb-4">
                Have a unique situation or complex installation needs? We offer free in-home consultations and custom quotes.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700"
              >
                Contact us for a custom solution
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;