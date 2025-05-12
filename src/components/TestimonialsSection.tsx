import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'James Wilson',
    role: 'Homeowner',
    content: 'The technician was extremely professional and knowledgeable. They mounted my 75" TV perfectly and took the time to hide all the cables. Looks like it came with the house!',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    content: 'I recommend PremierMount to all my clients. Their attention to detail is outstanding, and they always work cleanly and efficiently. The finished look is always perfect.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Business Owner',
    content: 'We had PremierMount install 6 TVs in our restaurant. The team was quick, professional, and the price was very reasonable. Will definitely use them again for our expansion.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Emily Chen',
    role: 'Homeowner',
    content: 'I was worried about mounting my TV above the fireplace, but they made it look easy. They even helped connect all my devices and showed me how to use the mount. Exceptional service!',
    rating: 5,
    image: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Robert Thompson',
    role: 'Home Theater Enthusiast',
    content: 'As someone who knows a lot about home theater equipment, I was impressed by the expertise of the technicians. They listened to my specific needs and delivered exactly what I wanted.',
    rating: 5,
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setAutoplay(false);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setAutoplay(false);
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-secondary-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't just take our word for it – hear from our satisfied customers
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4 md:px-8"
                >
                  <div className="bg-secondary-50 rounded-xl p-8 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-accent-400 text-accent-400" />
                          ))}
                        </div>
                        <p className="text-secondary-700 mb-6 text-lg italic">"{testimonial.content}"</p>
                        <div>
                          <h4 className="font-display font-semibold text-secondary-900">{testimonial.name}</h4>
                          <p className="text-secondary-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md text-secondary-900 hover:text-accent-600 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md text-secondary-900 hover:text-accent-600 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-accent-500 w-6' : 'bg-secondary-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;