
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import { BedDouble, UtensilsCrossed, Home, MapPin, Coffee } from 'lucide-react';

// Sample gallery images
const hotelImages = {
  exterior: [
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000', alt: 'Hotel Exterior - Front View' },
    { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000', alt: 'Hotel Entrance' },
    { url: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&q=80&w=1000', alt: 'Hotel Building - Night View' },
  ],
  rooms: [
    { url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000', alt: 'Premium Double Room' },
    { url: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80&w=1000', alt: 'Premium Twin Room' },
    { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000', alt: 'Deluxe Single Room' },
    { url: 'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80&w=1000', alt: 'Deluxe Double Room' },
    { url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1000', alt: 'Deluxe Budget Room' },
    { url: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&q=80&w=1000', alt: 'Deluxe Compact Room' },
  ],
  dining: [
    { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000', alt: 'Dining Area' },
    { url: 'https://images.unsplash.com/photo-1551024601-06b3aed95fb3?auto=format&fit=crop&q=80&w=1000', alt: 'Breakfast Spread' },
    { url: 'https://images.unsplash.com/photo-1596797038534-2088b76097b9?auto=format&fit=crop&q=80&w=1000', alt: 'Kerala Traditional Meal' },
  ],
  surroundings: [
    { url: 'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&q=80&w=1000', alt: 'Kazhakoottam Railway Station' },
    { url: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&q=80&w=1000', alt: 'Nearby Park' },
    { url: 'https://images.unsplash.com/photo-1516938259075-0596e1231380?auto=format&fit=crop&q=80&w=1000', alt: 'Street View' },
  ],
};

// Categories
const categories = [
  { id: 'all', label: 'All', icon: <Home size={20} /> },
  { id: 'exterior', label: 'Exterior', icon: <Home size={20} /> },
  { id: 'rooms', label: 'Rooms', icon: <BedDouble size={20} /> },
  { id: 'dining', label: 'Dining', icon: <UtensilsCrossed size={20} /> },
  { id: 'surroundings', label: 'Surroundings', icon: <MapPin size={20} /> },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayedImages, setDisplayedImages] = useState<typeof hotelImages.exterior>([]);
  
  useEffect(() => {
    // Combine all images or filter based on the selected category
    if (selectedCategory === 'all') {
      const allImages = [
        ...hotelImages.exterior,
        ...hotelImages.rooms,
        ...hotelImages.dining,
        ...hotelImages.surroundings,
      ];
      setDisplayedImages(allImages);
    } else {
      setDisplayedImages(hotelImages[selectedCategory as keyof typeof hotelImages] || []);
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Photo Gallery"
        subtitle="Take a visual tour of our hotel facilities, rooms, and surroundings."
        imageUrl="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000"
        height="h-[70vh]"
      />
      
      {/* Gallery Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Explore Our Hotel
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our gallery to get a glimpse of what awaits you at Manzil Lounge.
            </p>
          </motion.div>
          
          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-5 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-hotel-navy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </motion.div>
          
          {/* Images Gallery */}
          <Gallery images={displayedImages} className="mt-8" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center text-gray-600"
          >
            <p>
              Click on any image to view it in full size. Our gallery is regularly updated with new photos.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Virtual Tour CTA */}
      <section className="py-16 px-6 bg-gradient-to-b from-hotel-beige/50 to-white">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-semibold text-hotel-navy mb-4">
              Ready to Experience Manzil Lounge?
            </h2>
            <p className="text-gray-600 mb-8">
              The photos give you a glimpse, but there's nothing like experiencing our comfortable accommodations in person. Book your stay now to enjoy our warm hospitality.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-hotel-gold text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-transform hover:translate-y-[-2px] shadow-md"
            >
              <Coffee size={20} className="mr-2" />
              Book Your Stay
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
