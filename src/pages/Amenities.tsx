
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { 
  Wifi, 
  Clock, 
  Car, 
  Phone, 
  Shield, 
  Briefcase, 
  Wind, 
  Tv, 
  Coffee, 
  ShowerHead, 
  Utensils,
  Loader2,
  PersonStanding,
  FirstAid,
  Luggage,
  Shirt
} from 'lucide-react';

// Sample amenities data
const hotelAmenities = [
  {
    category: 'General Amenities',
    items: [
      { name: 'Free WiFi', description: 'High-speed internet throughout the property', icon: <Wifi size={24} className="text-hotel-gold" /> },
      { name: '24/7 Reception', description: 'Front desk assistance available round the clock', icon: <Clock size={24} className="text-hotel-gold" /> },
      { name: 'Free Parking', description: 'Complimentary parking space for guests', icon: <Car size={24} className="text-hotel-gold" /> },
      { name: 'Daily Housekeeping', description: 'Room cleaning and linen change service', icon: <Shirt size={24} className="text-hotel-gold" /> },
      { name: 'Luggage Storage', description: 'Secure storage for early arrivals and late departures', icon: <Luggage size={24} className="text-hotel-gold" /> },
      { name: '24/7 Security', description: 'Around-the-clock security for your safety', icon: <Shield size={24} className="text-hotel-gold" /> }
    ]
  },
  {
    category: 'Room Amenities',
    items: [
      { name: 'Air Conditioning', description: 'Climate control for your comfort', icon: <Wind size={24} className="text-hotel-gold" /> },
      { name: 'Television', description: 'Flat-screen TV with cable channels', icon: <Tv size={24} className="text-hotel-gold" /> },
      { name: 'Tea/Coffee Maker', description: 'In-room facilities for hot beverages', icon: <Coffee size={24} className="text-hotel-gold" /> },
      { name: 'Private Bathroom', description: 'En-suite bathroom with shower', icon: <ShowerHead size={24} className="text-hotel-gold" /> },
      { name: 'Work Desk', description: 'Dedicated space for business needs', icon: <Briefcase size={24} className="text-hotel-gold" /> },
      { name: 'Room Service', description: 'Food and beverage service to your room', icon: <Utensils size={24} className="text-hotel-gold" /> }
    ]
  }
];

const additionalServices = [
  {
    name: 'Laundry Service',
    description: 'Same-day laundry and ironing service available at an additional cost.',
    icon: <Loader2 size={24} className="text-hotel-navy" />
  },
  {
    name: 'Airport/Station Transfer',
    description: 'Pre-arranged pickup and drop-off service to airport or railway station (charges apply).',
    icon: <Car size={24} className="text-hotel-navy" />
  },
  {
    name: 'Local Tour Assistance',
    description: 'Help with planning local sightseeing and arranging transportation.',
    icon: <PersonStanding size={24} className="text-hotel-navy" />
  },
  {
    name: 'First Aid',
    description: 'Basic medical supplies available at reception for emergencies.',
    icon: <FirstAid size={24} className="text-hotel-navy" />
  },
  {
    name: 'Wake-up Call',
    description: 'Morning wake-up call service upon request.',
    icon: <Clock size={24} className="text-hotel-navy" />
  },
  {
    name: 'Business Services',
    description: 'Printing, scanning, and photocopying facilities available at reception.',
    icon: <Briefcase size={24} className="text-hotel-navy" />
  }
];

const Amenities = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Amenities & Services"
        subtitle="Discover the range of facilities and services we offer to make your stay comfortable and convenient."
        imageUrl="https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=1000"
        height="h-[70vh]"
      />
      
      {/* Main Amenities Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Hotel Amenities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a range of essential amenities to ensure a comfortable and hassle-free stay for all our guests.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {hotelAmenities.map((section, sectionIndex) => (
              <div key={section.category}>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
                  className="text-2xl font-semibold text-hotel-navy mb-8 pb-2 border-b border-gray-200"
                >
                  {section.category}
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((amenity, index) => (
                    <motion.div 
                      key={amenity.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (0.1 * index) + (0.2 * sectionIndex) }}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">{amenity.icon}</div>
                        <div>
                          <h4 className="text-lg font-medium text-hotel-navy mb-2">{amenity.name}</h4>
                          <p className="text-gray-600">{amenity.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services Section */}
      <section className="py-16 px-6 bg-hotel-beige">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Additional Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a variety of additional services to enhance your stay at Manzil Lounge.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-hotel-navy/10 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-hotel-navy mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Policies Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Hotel Policies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Important information to ensure a pleasant stay for all guests.
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
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">Check-in & Check-out</h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Check-in:</span> 12:00 PM<br />
                    <span className="font-medium">Check-out:</span> 11:00 AM<br /><br />
                    Early check-in and late check-out are subject to availability and may incur additional charges. Please contact the reception in advance to arrange.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">Identification</h3>
                  <p className="text-gray-600">
                    All guests are required to present valid government-issued photo identification at check-in. Foreign nationals must present their passport and visa.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">Payment</h3>
                  <p className="text-gray-600">
                    We accept cash, major credit/debit cards, and online bank transfers. Full payment is required at check-in. For bookings made in advance, we may pre-authorize your card for the booking amount.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">Cancellation Policy</h3>
                  <p className="text-gray-600">
                    Cancellations made 24 hours or more before the scheduled check-in time are eligible for a full refund. Cancellations made less than 24 hours before check-in may be charged one night's stay.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">Pet Policy</h3>
                  <p className="text-gray-600">
                    We regret that pets are not allowed within the hotel premises, with the exception of service animals.
                  </p>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hotel-navy mb-3">Smoking Policy</h3>
                  <p className="text-gray-600">
                    Manzil Lounge is a non-smoking property. Smoking is strictly prohibited in all indoor areas, including guest rooms. Designated smoking areas are available outside the building.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 bg-hotel-navy text-white">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Need More Information?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              If you have any questions about our amenities or services, our friendly staff is always ready to assist you.
            </p>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center bg-hotel-gold text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-transform hover:translate-y-[-2px] shadow-lg"
            >
              <Phone size={20} className="mr-2" />
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Amenities;
