import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Clock, UtensilsCrossed, Coffee, Salad, Pizza, Soup, Phone } from 'lucide-react';

// Sample meal options
const mealOptions = [
  {
    category: 'Breakfast',
    icon: <Coffee className="text-hotel-gold" size={28} />,
    time: '7:00 AM - 10:30 AM',
    description: 'Start your day with our hearty breakfast options, including South Indian and Continental dishes.',
    items: [
      'Dosa with Sambar and Chutney',
      'Idli and Vada Platter',
      'Kerala Parotta with Curry',
      'Bread Toast with Jam and Butter',
      'Fresh Fruit Platter',
      'Tea, Coffee, and Fruit Juices'
    ],
    image: 'https://images.unsplash.com/photo-1551024601-06b3aed95fb3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    category: 'Lunch',
    icon: <Salad className="text-hotel-gold" size={28} />,
    time: '12:30 PM - 3:00 PM',
    description: 'Enjoy a variety of lunch options featuring local Kerala cuisine and Indian favorites.',
    items: [
      'Kerala Sadhya (Traditional Meal)',
      'Vegetable Biriyani with Raita',
      'Fish Curry with Rice',
      'Chicken Curry with Appam',
      'Vegetable Thali',
      'Fresh Lime Soda and Buttermilk'
    ],
    image: 'https://images.unsplash.com/photo-1596797038534-2088b76097b9?auto=format&fit=crop&q=80&w=1000'
  },
  {
    category: 'Dinner',
    icon: <UtensilsCrossed className="text-hotel-gold" size={28} />,
    time: '7:00 PM - 10:00 PM',
    description: 'Wind down with our delicious dinner selections featuring both vegetarian and non-vegetarian options.',
    items: [
      'Tandoori Roti with Paneer Butter Masala',
      'Naan with Chicken Tikka Masala',
      'Kerala Porotta with Beef Curry',
      'Jeera Rice with Dal Fry',
      'Mixed Vegetable Curry',
      'Masala Tea and Coffee'
    ],
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1000'
  },
  {
    category: 'Snacks',
    icon: <Pizza className="text-hotel-gold" size={28} />,
    time: 'Available throughout the day',
    description: 'Light bites and refreshments available for in-between meal cravings.',
    items: [
      'Vegetable Cutlet',
      'Banana Fritters',
      'Masala Vada',
      'Vegetable Sandwich',
      'Samosa with Chutney',
      'Tea, Coffee, and Soft Drinks'
    ],
    image: 'https://images.unsplash.com/photo-1600891963935-9e7024bd8b7b?auto=format&fit=crop&q=80&w=1000'
  }
];

const specialRequests = [
  {
    title: 'Special Diets',
    description: 'We can accommodate various dietary requirements including vegetarian, vegan, and gluten-free options.',
    icon: <Soup size={24} className="text-hotel-navy" />
  },
  {
    title: 'Room Service',
    description: 'Enjoy your meals in the comfort of your room with our room service option available from 7:00 AM to 10:00 PM.',
    icon: <UtensilsCrossed size={24} className="text-hotel-navy" />
  },
  {
    title: 'Early/Late Meals',
    description: 'Early breakfast or late dinner can be arranged with prior notice for guests with specific schedule requirements.',
    icon: <Clock size={24} className="text-hotel-navy" />
  }
];

const Dining = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Dining Experience"
        subtitle="Enjoy delicious meals in our comfortable dining space at Manzil Lounge."
        imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
        height="h-[70vh]"
      />
      
      {/* Dining Overview */}
      <section className="py-16 px-6 bg-hotel-beige">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Our Dining Space
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy delicious meals in our welcoming dining area, serving a variety of local and international cuisines.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000" 
                alt="Manzil Lounge Dining Area" 
                className="w-full h-auto"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-hotel-navy mb-4">A Comfortable Dining Experience</h3>
              <p className="text-gray-600 mb-4">
                Our communal dining area offers a relaxed atmosphere where guests can enjoy their meals. While we don't have a full-service restaurant, we provide quality meal options prepared with care.
              </p>
              <p className="text-gray-600 mb-6">
                The dining space is open to all guests and features comfortable seating, natural lighting, and a clean environment. It's the perfect place to start your day with breakfast or unwind with dinner after exploring Trivandrum.
              </p>
              
              <div className="flex items-center border-t border-gray-200 pt-6">
                <Clock className="text-hotel-gold mr-3" size={24} />
                <div>
                  <h4 className="font-medium text-hotel-navy">Dining Hours</h4>
                  <p className="text-gray-600">
                    Breakfast: 7:00 AM - 10:30 AM<br />
                    Lunch: 12:30 PM - 3:00 PM<br />
                    Dinner: 7:00 PM - 10:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Meal Options */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Meal Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of delicious food options available throughout the day.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {mealOptions.map((meal, index) => (
              <motion.div 
                key={meal.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="mr-3">
                      {meal.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-hotel-navy">{meal.category}</h3>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-500">
                    <Clock size={18} className="mr-2" />
                    <span>{meal.time}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {meal.description}
                  </p>
                  
                  <div className="bg-hotel-beige p-6 rounded-lg">
                    <h4 className="font-medium text-hotel-navy mb-3">Sample Menu Items:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {meal.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`rounded-lg overflow-hidden shadow-md ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={meal.image} 
                    alt={`${meal.category} at Manzil Lounge`} 
                    className="w-full h-auto object-cover"
                    style={{ height: '350px' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Special Requests */}
      <section className="py-16 px-6 bg-hotel-beige">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Special Requests
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We aim to accommodate your dining preferences and requirements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialRequests.map((request, index) => (
              <motion.div
                key={request.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 bg-hotel-navy/10 rounded-full flex items-center justify-center mb-4">
                  {request.icon}
                </div>
                <h3 className="text-xl font-semibold text-hotel-navy mb-2">{request.title}</h3>
                <p className="text-gray-600">{request.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white p-8 rounded-lg shadow-md border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-hotel-navy mb-4 text-center">Need Something Special?</h3>
            <p className="text-gray-600 text-center mb-6">
              If you have specific dietary requirements or special requests, please let us know in advance so we can do our best to accommodate your needs.
            </p>
            <div className="text-center">
              <a 
                href="tel:+919876543210" 
                className="inline-flex items-center justify-center bg-hotel-navy text-white py-2 px-6 rounded-md hover:bg-hotel-gold transition-colors"
              >
                <Phone size={18} className="mr-2" />
                Contact Us for Special Requests
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Nearby Dining Options */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Nearby Dining Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore local restaurants and eateries within walking distance of Manzil Lounge.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000" 
                alt="Local Kerala Restaurant" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-hotel-navy mb-2">Kerala Traditional Cuisine</h3>
                <p className="text-gray-500 mb-2">Distance: 200m (3 min walk)</p>
                <p className="text-gray-600 mb-4">Authentic Kerala cuisine featuring seafood, beef, and vegetarian specialties.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Open: 11 AM - 11 PM</span>
                  <span className="text-sm font-medium text-hotel-gold">$$ (Budget-friendly)</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000" 
                alt="Multi-cuisine Restaurant" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-hotel-navy mb-2">Spice Garden</h3>
                <p className="text-gray-500 mb-2">Distance: 400m (5 min walk)</p>
                <p className="text-gray-600 mb-4">Multi-cuisine restaurant offering North Indian, Chinese, and Continental dishes.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Open: 12 PM - 10:30 PM</span>
                  <span className="text-sm font-medium text-hotel-gold">$$$ (Mid-range)</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000" 
                alt="Fast Food Joint" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-hotel-navy mb-2">Quick Bites</h3>
                <p className="text-gray-500 mb-2">Distance: 300m (4 min walk)</p>
                <p className="text-gray-600 mb-4">Fast food joint serving burgers, sandwiches, and local street food favorites.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Open: 8 AM - 11 PM</span>
                  <span className="text-sm font-medium text-hotel-gold">$ (Budget)</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8 text-gray-600"
          >
            Our front desk staff will be happy to provide recommendations and directions to local dining options based on your preferences.
          </motion.p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Dining;
