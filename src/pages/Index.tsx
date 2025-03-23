import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import RoomCard from '@/components/RoomCard';
import Gallery from '@/components/Gallery';
import Map from '@/components/Map';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingButton from '@/components/BookingButton';
import { ArrowUpRight, Check, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data
const featuredRooms = [
  {
    id: 1,
    title: 'Premium Double Room',
    description: 'Spacious room with a comfortable double bed, workspace, and modern amenities for a relaxing stay.',
    price: 2500,
    imageUrl: '/lovable-uploads/5a781ddd-6cf3-4507-9094-af891958222f.png',
    amenities: ['Free WiFi', 'Air Conditioning', 'LCD TV', 'Room Service'],
    roomType: 'premium' as const,
  },
  {
    id: 2,
    title: 'Deluxe Single Room',
    description: 'Cozy room with a single bed, perfect for solo travelers seeking comfort and convenience.',
    price: 1800,
    imageUrl: '/lovable-uploads/d650882c-efde-445a-ae60-176c5ac0facb.png',
    amenities: ['Free WiFi', 'Air Conditioning', 'Cable TV', 'Desk'],
    roomType: 'deluxe' as const,
  },
];

const galleryImages = [
  { url: '/lovable-uploads/36a930c0-f50c-4309-b3eb-641bdaae2cf7.png', alt: 'Hotel Reception' },
  { url: '/lovable-uploads/5a781ddd-6cf3-4507-9094-af891958222f.png', alt: 'Premium Room' },
  { url: '/lovable-uploads/d650882c-efde-445a-ae60-176c5ac0facb.png', alt: 'Deluxe Room' },
];

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    position: 'Business Traveler',
    comment: 'Clean rooms and professional staff. The location near the railway station was perfect for my business trip.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Menon',
    position: 'Tourist',
    comment: 'Excellent value for money. The rooms were neat and the staff was very helpful in guiding us to local attractions.',
    rating: 4,
  },
  {
    id: 3,
    name: 'James Wilson',
    position: 'Digital Nomad',
    comment: 'The WiFi was fast and reliable which was important for my work. Comfortable stay overall!',
    rating: 5,
  },
];

const features = [
  { title: 'Railway Station Proximity', description: 'Just a 2-minute walk from Kazhakoottom Railway Station' },
  { title: 'Clean & Comfortable Rooms', description: '14 well-maintained rooms with essential amenities' },
  { title: 'Budget-Friendly', description: 'Quality accommodation at affordable prices' },
  { title: '24/7 Reception', description: 'Round-the-clock assistance for all your needs' },
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Welcome to Manzil Lounge"
        subtitle="Experience comfort and convenience at our neat and quiet hotel near Kazhakoottom Railway Station, Trivandrum."
        imageUrl="/lovable-uploads/9b485332-9ab6-443d-8bc3-35b8f0c2a441.png"
      />
      
      {/* Features Section */}
      <section className="py-16 px-6 bg-hotel-beige">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Why Choose Manzil Lounge?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the perfect blend of comfort, convenience, and affordability at our hotel.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-hotel-navy/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-hotel-navy" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-hotel-navy mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/amenities" 
              className="inline-flex items-center text-hotel-navy font-medium hover:text-hotel-gold transition-colors"
            >
              Explore All Amenities
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Rooms Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Our Rooms & Suites
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of comfortable accommodations designed to meet your needs and preferences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
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
                />
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center justify-center bg-hotel-navy/5 rounded-lg p-8 h-full"
            >
              <h3 className="text-xl font-semibold text-hotel-navy mb-3">Discover More Rooms</h3>
              <p className="text-gray-600 text-center mb-6">
                Explore our full range of Premium and Deluxe rooms for your perfect stay.
              </p>
              <Link
                to="/rooms"
                className="flex items-center text-hotel-navy font-medium hover:text-hotel-gold transition-colors"
              >
                View All Rooms
                <ArrowUpRight size={18} className="ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-hotel-beige/30">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a visual tour of our hotel facilities and surroundings.
            </p>
          </motion.div>
          
          <Gallery images={galleryImages} />
          
          <div className="text-center mt-10">
            <Link 
              to="/gallery" 
              className="inline-flex items-center text-hotel-navy font-medium hover:text-hotel-gold transition-colors"
            >
              View Full Gallery
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Guest Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our guests have to say about their stay at Manzil Lounge.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "text-hotel-gold fill-hotel-gold" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <h4 className="font-semibold text-hotel-navy">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-16 px-6 bg-hotel-beige">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
                Convenient Location
              </h2>
              <p className="text-gray-600 mb-6">
                Manzil Lounge is ideally located just steps away from Kazhakoottom Railway Station, making it perfect for travelers seeking easy access to transportation. Our strategic location also offers proximity to:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check size={20} className="text-hotel-gold mr-2 mt-1" />
                  <span>Technopark (10 minutes drive)</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-hotel-gold mr-2 mt-1" />
                  <span>Trivandrum International Airport (20 km)</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-hotel-gold mr-2 mt-1" />
                  <span>Local shopping centers and restaurants</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-hotel-gold mr-2 mt-1" />
                  <span>Business districts and educational institutions</span>
                </li>
              </ul>
              <Link
                to="/location"
                className="inline-flex items-center text-hotel-navy font-medium hover:text-hotel-gold transition-colors"
              >
                View Detailed Directions
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Map />
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
              Ready to Experience Manzil Lounge?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Book your stay now and enjoy our comfortable accommodations and excellent service. We look forward to welcoming you!
            </p>
            <BookingButton large />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
