
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import { Clock, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Contact Us"
        subtitle="Get in touch with us for inquiries, reservations, or to provide feedback about your stay."
        imageUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1000"
        height="h-[70vh]"
      />
      
      {/* Quick Contact Section */}
      <section className="py-16 px-6 bg-hotel-beige">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to answer any questions you may have about our accommodations, services, or special requirements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 mx-auto bg-hotel-navy/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-hotel-navy" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-hotel-navy mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Talk to our reception desk directly</p>
              <a 
                href="tel:+919876543210" 
                className="text-hotel-gold font-medium hover:underline"
              >
                +91 9876 543 210
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 mx-auto bg-hotel-navy/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-hotel-navy" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-hotel-navy mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Send us an email anytime</p>
              <a 
                href="mailto:info@manzillounge.com" 
                className="text-hotel-gold font-medium hover:underline"
              >
                info@manzillounge.com
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 mx-auto bg-hotel-navy/10 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="text-hotel-navy" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-hotel-navy mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Message us for quick responses</p>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-hotel-gold font-medium hover:underline"
              >
                +91 9876 543 210
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 mx-auto bg-hotel-navy/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-hotel-navy" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-hotel-navy mb-2">Reception Hours</h3>
              <p className="text-gray-600 mb-4">We're available 24/7</p>
              <span className="text-hotel-gold font-medium">
                Open All Day
              </span>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Map Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below for inquiries, feedback, or to book your stay at Manzil Lounge.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ContactForm />
              </motion.div>
            </div>
            
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-hotel-navy mb-4">Our Location</h3>
                  <div className="flex items-start mb-4">
                    <MapPin size={20} className="text-hotel-gold mr-3 mt-1" />
                    <p className="text-gray-600">
                      Manzil Lounge<br />
                      Near Kazhakoottam Railway Station<br />
                      Kazhakoottam, Trivandrum<br />
                      Kerala, India - 695582
                    </p>
                  </div>
                  <Map />
                </div>
                
                <div className="bg-hotel-navy/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">Booking Information</h3>
                  <p className="text-gray-600 mb-4">
                    For immediate booking confirmations, we recommend calling our reception desk directly. For special requests or group bookings, please fill out the contact form.
                  </p>
                  <div className="flex items-center text-gray-700">
                    <Clock size={18} className="mr-2" />
                    <span>
                      Check-in: 12:00 PM | Check-out: 11:00 AM
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6 bg-hotel-beige">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our hotel and services.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="divide-y divide-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">Do you offer airport transfers?</h3>
                  <p className="text-gray-600">
                    Yes, we can arrange airport transfers for an additional fee. Please inform us about your flight details at least 24 hours in advance to arrange the service.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">Is breakfast included in the room rate?</h3>
                  <p className="text-gray-600">
                    Breakfast is included in some room packages and can be added to others for an additional charge. Please check your booking details or inquire at reception.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">Do you have facilities for differently-abled guests?</h3>
                  <p className="text-gray-600">
                    We have ground floor rooms with wheelchair accessibility and are committed to accommodating guests with special needs. Please inform us in advance so we can provide the best assistance.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">What is your cancellation policy?</h3>
                  <p className="text-gray-600">
                    Free cancellation is available up to 24 hours before the scheduled check-in time. Cancellations made less than 24 hours before check-in may incur a charge equivalent to one night's stay.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">Is WiFi available at the hotel?</h3>
                  <p className="text-gray-600">
                    Yes, we provide complimentary high-speed WiFi access throughout the property for all our guests.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600">
                Have more questions? Feel free to <a href="#contact-form" className="text-hotel-navy font-medium hover:text-hotel-gold">contact us</a> directly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
