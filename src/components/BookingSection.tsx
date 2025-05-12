import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Check } from 'lucide-react';

// Mock available dates (in a real app, this would come from an API)
const generateAvailableDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    if (date.getDay() !== 0) { // Skip Sundays
      dates.push({
        date: date.toISOString().split('T')[0],
        slots: [
          '9:00 AM',
          '11:00 AM',
          '1:00 PM',
          '3:00 PM',
          '5:00 PM',
        ].filter(() => Math.random() > 0.3) // Randomly remove some slots to simulate availability
      });
    }
  }
  return dates;
};

const BookingSection: React.FC = () => {
  const availableDates = generateAvailableDates();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    tvSize: '',
    wallType: 'drywall',
    additionalInfo: ''
  });
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Booking submitted:', {
      ...formState,
      date: selectedDate,
      time: selectedTime
    });
    
    setIsSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Book Your Installation
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-secondary-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schedule your TV mounting service in just a few steps
          </motion.p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {isSubmitted ? (
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-accent-100 text-accent-600 mb-6">
                <Check className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                Booking Confirmed!
              </h3>
              <p className="text-lg text-secondary-700 mb-2">
                Your TV mounting service has been scheduled for:
              </p>
              <p className="text-xl font-medium text-secondary-900 mb-6">
                {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })} at {selectedTime}
              </p>
              <p className="text-secondary-600 mb-8">
                A confirmation email has been sent to {formState.email} with all the details.
                Our technician will contact you before the appointment.
              </p>
              <a 
                href="#home" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 transition-colors"
              >
                Back to Home
              </a>
            </div>
          ) : (
            <div>
              {/* Steps indicator */}
              <div className="bg-secondary-50 px-8 py-4 border-b border-secondary-200">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${
                    step >= 1 ? 'bg-accent-500 text-white' : 'bg-secondary-200 text-secondary-600'
                  }`}>
                    1
                  </div>
                  <div className={`flex-1 h-1 mx-2 ${
                    step >= 2 ? 'bg-accent-500' : 'bg-secondary-200'
                  }`}></div>
                  <div className={`flex items-center justify-center h-8 w-8 rounded-full ${
                    step >= 2 ? 'bg-accent-500 text-white' : 'bg-secondary-200 text-secondary-600'
                  }`}>
                    2
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-secondary-600">
                  <span>Select Date & Time</span>
                  <span>Your Information</span>
                </div>
              </div>

              {step === 1 ? (
                <div className="p-8">
                  <h3 className="text-xl font-display font-semibold text-secondary-900 mb-6">
                    Select a Date and Time
                  </h3>

                  <div className="mb-8">
                    <h4 className="flex items-center text-secondary-800 font-medium mb-3">
                      <Calendar className="h-5 w-5 mr-2 text-accent-500" />
                      Available Dates
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {availableDates.map((dateObj) => (
                        <button
                          key={dateObj.date}
                          onClick={() => handleDateSelect(dateObj.date)}
                          className={`px-3 py-2 rounded-md text-center border transition-colors ${
                            selectedDate === dateObj.date
                              ? 'bg-accent-500 text-white border-accent-500'
                              : 'border-secondary-300 hover:border-accent-500 text-secondary-700'
                          }`}
                        >
                          {new Date(dateObj.date).toLocaleDateString('en-US', { 
                            weekday: 'short', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <div>
                      <h4 className="flex items-center text-secondary-800 font-medium mb-3">
                        <Clock className="h-5 w-5 mr-2 text-accent-500" />
                        Available Times for {new Date(selectedDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                        {availableDates
                          .find(d => d.date === selectedDate)?.slots
                          .map((time) => (
                            <button
                              key={time}
                              onClick={() => handleTimeSelect(time)}
                              className={`px-3 py-2 rounded-md text-center border transition-colors ${
                                selectedTime === time
                                  ? 'bg-accent-500 text-white border-accent-500'
                                  : 'border-secondary-300 hover:border-accent-500 text-secondary-700'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={handleNextStep}
                      disabled={!selectedDate || !selectedTime}
                      className={`px-6 py-3 rounded-md font-medium ${
                        selectedDate && selectedTime
                          ? 'bg-accent-600 text-white hover:bg-accent-700'
                          : 'bg-secondary-200 text-secondary-500 cursor-not-allowed'
                      } transition-colors`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8">
                  <h3 className="text-xl font-display font-semibold text-secondary-900 mb-6">
                    Your Information
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-secondary-700 font-medium mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-secondary-700 font-medium mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-secondary-700 font-medium mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="address" className="block text-secondary-700 font-medium mb-1">
                      Installation Address*
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formState.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                      placeholder="Enter your full address"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="tvSize" className="block text-secondary-700 font-medium mb-1">
                        TV Size (inches)*
                      </label>
                      <input
                        type="text"
                        id="tvSize"
                        name="tvSize"
                        value={formState.tvSize}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                        placeholder="e.g., 55"
                      />
                    </div>
                    <div>
                      <label htmlFor="wallType" className="block text-secondary-700 font-medium mb-1">
                        Wall Type*
                      </label>
                      <select
                        id="wallType"
                        name="wallType"
                        value={formState.wallType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                      >
                        <option value="drywall">Drywall (standard)</option>
                        <option value="brick">Brick</option>
                        <option value="concrete">Concrete</option>
                        <option value="stone">Stone</option>
                        <option value="other">Other (specify in notes)</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="additionalInfo" className="block text-secondary-700 font-medium mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formState.additionalInfo}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none"
                      placeholder="Any special requirements or questions..."
                    ></textarea>
                  </div>

                  <div className="p-4 bg-secondary-50 rounded-md mb-6">
                    <h4 className="font-medium text-secondary-900 mb-2">Your Appointment</h4>
                    <p className="text-secondary-700">
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })} at {selectedTime}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="order-2 sm:order-1 px-6 py-3 border border-secondary-300 rounded-md text-secondary-700 hover:bg-secondary-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="order-1 sm:order-2 px-6 py-3 bg-accent-600 text-white rounded-md hover:bg-accent-700 transition-colors"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;