import React, { Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TVModel from './TVModel';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-secondary-900 to-secondary-950 overflow-hidden">
      {/* 3D TV Model */}
      <div className="absolute inset-0 flex items-center justify-center opacity-60 md:opacity-80">
        <Suspense fallback={<div>Loading 3D model...</div>}>
          <TVModel />
        </Suspense>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-16 min-h-screen flex flex-col justify-center z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Professional TV Mounting with{' '}
            <span className="text-accent-400">Precision</span> and{' '}
            <span className="text-accent-400">Care</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Experience premium TV installation by certified professionals. Perfect mounting, 
            cable management, and setup – guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#booking"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-secondary-900 bg-accent-400 hover:bg-accent-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Installation
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            
            <motion.a 
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.a>
          </div>
          
          <div className="mt-12 flex items-center space-x-8">
            <div className="flex items-center">
              <div className="text-accent-400 font-display font-bold text-4xl">100+</div>
              <div className="ml-2 text-gray-300">TVs Mounted</div>
            </div>
            <div className="flex items-center">
              <div className="text-accent-400 font-display font-bold text-4xl">100%</div>
              <div className="ml-2 text-gray-300">Satisfaction</div>
            </div>
            <div className="hidden md:flex items-center">
              <div className="text-accent-400 font-display font-bold text-4xl">5★</div>
              <div className="ml-2 text-gray-300">Rated Service</div>
            </div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;