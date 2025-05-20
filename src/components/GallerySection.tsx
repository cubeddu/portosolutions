import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Gallery images from Pexels
const galleryImages = [
  {
    url: '/image4.jpeg',
    title: "Living Room TV Installation",
    description: "65\" OLED mounted above fireplace with concealed wiring"
  },
  {
    url: '/image5.jpeg',
    title: "Home Theater Setup",
    description: "85\" 4K TV with surround sound system installation"
  },
  {
    url: '/image7.jpeg',
    title: "Bedroom TV Mount",
    description: "Articulating mount for perfect viewing from any angle"
  },
  {
    url: '/image9.jpeg',
    title: "Office Conference Room",
    description: "Dual display setup with integrated cable management"
  },
  {
    url: '/image12.jpeg',
    title: "Outdoor TV Installation",
    description: "Weather-resistant mounting for patio entertainment"
  },
  {
    url: '/image10.jpeg',
    title: "Modern Apartment Setup",
    description: "Clean wall mounting with hidden components"
  },
  {
    url: '/image15.jpeg',
    title: "Living Room TV Installation",
    description: "65\" OLED mounted above fireplace with concealed wiring"
  },
  {
    url: '/image17.jpeg',
    title: "Home Theater Setup",
    description: "85\" 4K TV with surround sound system installation"
  },
  {
    url: '/image18.jpeg',
    title: "Bedroom TV Mount",
    description: "Articulating mount for perfect viewing from any angle"
  },
  {
    url: '/image19.jpeg',
    title: "Office Conference Room",
    description: "Dual display setup with integrated cable management"
  },
  {
    url: '/image20.jpeg',
    title: "Outdoor TV Installation",
    description: "Weather-resistant mounting for patio entertainment"
  },
  {
    url: '/image25.jpeg',
    title: "Modern Apartment Setup",
    description: "Clean wall mounting with hidden components"
  },
  {
    url: '/image26.jpeg',
    title: "Office Conference Room",
    description: "Dual display setup with integrated cable management"
  },
  {
    url: '/image27.jpeg',
    title: "Outdoor TV Installation",
    description: "Weather-resistant mounting for patio entertainment"
  },
  {
    url: '/image28.jpeg',
    title: "Modern Apartment Setup",
    description: "Clean wall mounting with hidden components"
  }
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-24 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Installation Gallery
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-secondary-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Browse our portfolio of professional TV mounting projects and installations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative h-72">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  {/* <h3 className="text-white font-medium text-lg">{image.title}</h3> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              <motion.div
                className="relative max-w-5xl max-h-[90vh]"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
              >
                <img
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].title}
                  className="max-h-[80vh] max-w-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-medium text-xl">{galleryImages[selectedImage].title}</h3>
                  <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
                </div>
              </motion.div>
              
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                onClick={handleNext}
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;