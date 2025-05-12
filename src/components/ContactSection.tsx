import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'standard'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formState);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'standard'
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-secondary-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us for a free quote or to schedule your TV mounting service
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-secondary-900 mb-6">
              Contact Us
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center text-center py-10">
                <CheckCircle2 className="h-16 w-16 text-accent-500 mb-4" />
                <h4 className="text-xl font-display font-semibold text-secondary-900 mb-2">
                  Thank You!
                </h4>
                <p className="text-secondary-600 mb-6">
                  Your message has been received. We'll get back to you shortly!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-secondary-100 text-secondary-700 rounded-md hover:bg-secondary-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-secondary-700 font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-secondary-700 font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-secondary-700 font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="block text-secondary-700 font-medium mb-1">
                    Interested Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                  >
                    <option value="standard">Standard TV Mounting</option>
                    <option value="premium">Premium TV Mounting</option>
                    <option value="custom">Custom Solution</option>
                    <option value="commercial">Commercial Installation</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-secondary-700 font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-colors"
                    placeholder="Tell us about your project or ask a question..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 transition-colors duration-200"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary-900 text-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-display font-bold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+18005551234" className="text-gray-300 hover:text-white transition-colors">
                      (800) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:info@premiermount.com" className="text-gray-300 hover:text-white transition-colors">
                      info@premiermount.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-gray-300">
                      123 Main Street<br />
                      Suite 100<br />
                      Anytown, ST 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-accent-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Business Hours</p>
                    <p className="text-gray-300">
                      Monday - Friday: 8am - 6pm<br />
                      Saturday: 9am - 4pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
                Service Area
              </h3>
              <p className="text-secondary-600 mb-4">
                We provide TV mounting services throughout the greater metropolitan area, 
                including all surrounding suburbs within a 50-mile radius.
              </p>
              <div className="aspect-video bg-secondary-100 rounded-lg flex items-center justify-center">
                <p className="text-secondary-500">Service Area Map</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;