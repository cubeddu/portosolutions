import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cable, Briefcase, Shield, Wrench, Settings } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="h-10 w-10" />,
    title: 'Standard TV Mounting',
    description: 'Secure mounting of TVs up to 65" on drywall with stud detection and proper anchoring.'
  },
  {
    icon: <Cable className="h-10 w-10" />,
    title: 'Cable Management',
    description: 'Clean, professional cable management solutions to eliminate unsightly wires and cables.'
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: 'Commercial Installation',
    description: 'Specialized mounting solutions for businesses, conference rooms, and digital signage.'
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Concealed Wiring',
    description: 'In-wall cable routing for a completely clean look with no visible wires.'
  },
  {
    icon: <Wrench className="h-10 w-10" />,
    title: 'Custom Solutions',
    description: 'Unique mounting configurations for special requirements or difficult wall materials.'
  },
  {
    icon: <Settings className="h-10 w-10" />,
    title: 'Setup & Calibration',
    description: 'Complete TV setup, connection to devices, and professional picture calibration.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Professional Services
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-secondary-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From basic TV mounting to complex custom installations, we offer comprehensive solutions to meet your exact needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-secondary-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-secondary-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-accent-500 mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-600">
                {service.description}
              </p>
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
          <a 
            href="#booking" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 transition-colors duration-200"
          >
            Schedule a Service
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;