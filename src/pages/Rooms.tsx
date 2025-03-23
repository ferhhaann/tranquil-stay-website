import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RoomCard from '@/components/RoomCard';
import Hero from '@/components/Hero';
import { Wifi, Tv, Wind, Coffee, UtensilsCrossed, Car, Phone } from 'lucide-react';

// Updated room data with correct pricing and options
const premiumRooms = [
  {
    id: 1,
    title: 'Premium Room',
    description: 'Spacious room with a comfortable double bed, workspace, and modern amenities for a relaxing stay.',
    price: 1999,
    imageUrl: '/lovable-uploads/e6a1b9b2-f3fa-4e45-bd18-6b4d08250cf3.png',
    amenities: ['Free WiFi', 'Air Conditioning', 'LCD TV', 'Room Service'],
    roomType: 'premium' as const,
    available: true,
  },
];

const deluxeRooms = [
  {
    id: 2,
    title: 'Deluxe Room',
    description: 'Comfortable room with essential amenities, perfect for travelers seeking value and convenience.',
    price: 1699,
    imageUrl: '/lovable-uploads/93f731d3-2359-4a2e-bdb2-ac7e81a93aae.png',
    amenities: ['Free WiFi', 'Air Conditioning', 'TV', 'Desk'],
    roomType: 'deluxe' as const,
    available: true,
  },
];

const familyRooms = [
  {
    id: 3,
    title: 'Family Room',
    description: 'Spacious room designed for families, with multiple beds and amenities to ensure a comfortable stay for everyone.',
    price: 2200,
    imageUrl: '/lovable-uploads/93f731d3-2359-4a2e-bdb2-ac7e81a93aae.png',
    amenities: ['Free WiFi', 'Air Conditioning', 'LCD TV', 'Extra Beds'],
    roomType: 'premium' as const,
    available: true,
  },
];

// Amenities with icons
const roomAmenities = [
  { name: 'Free WiFi', icon: <Wifi className="text-hotel-navy" size={24} /> },
  { name: 'Air Conditioning', icon: <Wind className="text-hotel-navy" size={24} /> },
  { name: 'Television', icon: <Tv className="text-hotel-navy" size={24} /> },
  { name: 'Room Service', icon: <UtensilsCrossed className="text-hotel-navy" size={24} /> },
  { name: 'Free Parking', icon: <Car className="text-hotel-navy" size={24} /> },
  { name: '24/7 Front Desk', icon: <Phone className="text-hotel-navy" size={24} /> },
  { name: 'Coffee/Tea Facilities', icon: <Coffee className="text-hotel-navy" size={24} /> },
];

const Rooms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Rooms & Accommodations"
        subtitle="Discover our range of comfortable and affordable rooms designed for your relaxing stay."
        imageUrl="/lovable-uploads/e6a1b9b2-f3fa-4e45-bd18-6b4d08250cf3.png"
        height="h-[70vh]"
      />
      
      {/* Room Amenities Section */}
      <section className="py-16 px-6 bg-hotel-beige">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Room Amenities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All our rooms are equipped with essential amenities to ensure a comfortable and convenient stay.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
            {roomAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-3">
                  {amenity.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{amenity.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Premium Rooms Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-hotel-navy mb-4">
              Premium Rooms
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Our Premium rooms offer additional space and upgraded amenities for guests seeking extra comfort during their stay.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <RoomCard
                  title={room.title}
                  description={room.description}
                  price={room.price}
                  imageUrl={room.imageUrl}
                  amenities={room.amenities}
                  roomType={room.roomType}
                  available={room.available}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Family Rooms Section */}
      <section className="py-16 px-6 bg-hotel-beige/30">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-hotel-navy mb-4">
              Family Rooms
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Our Family rooms are specially designed to accommodate families with spacious layouts and family-friendly amenities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familyRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <RoomCard
                  title={room.title}
                  description={room.description}
                  price={room.price}
                  imageUrl={room.imageUrl}
                  amenities={room.amenities}
                  roomType={room.roomType}
                  available={room.available}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Deluxe Rooms Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-hotel-beige/30">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-hotel-navy mb-4">
              Deluxe Rooms
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Our Deluxe rooms provide comfort and value with all essential amenities for a pleasant stay.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deluxeRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <RoomCard
                  title={room.title}
                  description={room.description}
                  price={room.price}
                  imageUrl={room.imageUrl}
                  amenities={room.amenities}
                  roomType={room.roomType}
                  available={room.available}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking Policy Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-hotel-navy/5 rounded-lg p-8 border border-hotel-navy/10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-hotel-navy mb-4">Booking Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-hotel-navy mb-2">Check-in & Check-out</h4>
                  <p className="text-gray-600">
                    Check-in time: 12:00 PM<br />
                    Check-out time: 11:00 AM<br />
                    Early check-in and late check-out available upon request and subject to availability.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-hotel-navy mb-2">Reservation Policy</h4>
                  <p className="text-gray-600">
                    All reservations require a valid ID at check-in. For guaranteed reservations, we may require advance payment or credit card details.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-hotel-navy mb-2">Cancellation Policy</h4>
                  <p className="text-gray-600">
                    Free cancellation up to 24 hours before check-in. Cancellations made less than 24 hours before check-in may be subject to a charge equivalent to one night's stay.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-hotel-navy mb-2">Payment Methods</h4>
                  <p className="text-gray-600">
                    We accept cash, credit/debit cards, and online bank transfers. Full payment is due at check-in.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Rooms;
