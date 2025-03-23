
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Map from '@/components/Map';
import { MapPin, Train, Plane, Bus, Car, Building, MapIcon } from 'lucide-react';

// Sample nearby attractions
const nearbyAttractions = [
  {
    name: 'Technopark',
    distance: '5 km',
    travelTime: '10 minutes by car',
    description: 'India\'s largest IT park hosting numerous tech companies.',
    icon: <Building size={24} className="text-hotel-navy" />
  },
  {
    name: 'Kovalam Beach',
    distance: '20 km',
    travelTime: '40 minutes by car',
    description: 'Famous crescent-shaped beach with lighthouse and water activities.',
    icon: <MapIcon size={24} className="text-hotel-navy" />
  },
  {
    name: 'Padmanabhaswamy Temple',
    distance: '15 km',
    travelTime: '30 minutes by car',
    description: 'Historic Hindu temple in Thiruvananthapuram with magnificent architecture.',
    icon: <Building size={24} className="text-hotel-navy" />
  },
  {
    name: 'Napier Museum',
    distance: '12 km',
    travelTime: '25 minutes by car',
    description: 'Art and natural history museum with Indo-Saracenic architecture.',
    icon: <Building size={24} className="text-hotel-navy" />
  }
];

// Transportation options
const transportationOptions = [
  {
    type: 'Railway Station',
    name: 'Kazhakoottam Railway Station',
    distance: '100 meters',
    travelTime: '2 minutes walk',
    description: 'Our hotel is located just steps away from the railway station.',
    icon: <Train size={24} className="text-hotel-gold" />
  },
  {
    type: 'Airport',
    name: 'Trivandrum International Airport',
    distance: '20 km',
    travelTime: '40 minutes by car',
    description: 'Airport transfer service available (additional charges apply).',
    icon: <Plane size={24} className="text-hotel-gold" />
  },
  {
    type: 'Bus Station',
    name: 'Kazhakoottam Bus Terminal',
    distance: '500 meters',
    travelTime: '6 minutes walk',
    description: 'Regular buses available to different parts of the city.',
    icon: <Bus size={24} className="text-hotel-gold" />
  },
  {
    type: 'City Center',
    name: 'Trivandrum City Center',
    distance: '12 km',
    travelTime: '25 minutes by car',
    description: 'Easy access to the city\'s main shopping and entertainment areas.',
    icon: <Car size={24} className="text-hotel-gold" />
  }
];

const Location = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Location & Directions"
        subtitle="Conveniently located near Kazhakoottam Railway Station for easy access to Trivandrum's attractions."
        imageUrl="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&q=80&w=1000"
        height="h-[70vh]"
      />
      
      {/* Hotel Location Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Our Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Manzil Lounge is ideally situated near Kazhakoottam Railway Station, offering convenient access to transportation and local attractions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-start mb-6">
                <MapPin size={24} className="text-hotel-gold mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-hotel-navy mb-2">Address</h3>
                  <p className="text-gray-600">
                    Manzil Lounge<br />
                    Near Kazhakoottam Railway Station<br />
                    Kazhakoottam, Trivandrum<br />
                    Kerala, India - 695582
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-hotel-navy mb-3">GPS Coordinates</h3>
                <p className="text-gray-600 font-mono bg-gray-100 p-3 rounded">
                  8.5676317, 76.9037189
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-hotel-navy mb-3">Landmarks</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-hotel-gold mr-2">•</span>
                    Adjacent to Kazhakoottam Railway Station
                  </li>
                  <li className="flex items-start">
                    <span className="text-hotel-gold mr-2">•</span>
                    500 meters from NH-66 (National Highway)
                  </li>
                  <li className="flex items-start">
                    <span className="text-hotel-gold mr-2">•</span>
                    5 km from Technopark
                  </li>
                  <li className="flex items-start">
                    <span className="text-hotel-gold mr-2">•</span>
                    Opposite to State Bank of India branch
                  </li>
                </ul>
              </div>
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
      
      {/* Transportation Options */}
      <section className="py-16 px-6 bg-hotel-beige">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Transportation & Accessibility
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how to reach Manzil Lounge from different points in Trivandrum.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportationOptions.map((option, index) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md flex"
              >
                <div className="mr-4">
                  <div className="w-12 h-12 bg-hotel-navy/10 rounded-full flex items-center justify-center">
                    {option.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-hotel-navy mb-1">{option.type}</h3>
                  <h4 className="text-lg text-hotel-navy/80 mb-2">{option.name}</h4>
                  <div className="flex space-x-6 text-sm text-gray-500 mb-3">
                    <span>Distance: {option.distance}</span>
                    <span>Travel Time: {option.travelTime}</span>
                  </div>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Directions Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Getting Here
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed directions to help you reach Manzil Lounge easily.
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
                  <div className="flex items-center mb-3">
                    <Plane size={24} className="text-hotel-gold mr-3" />
                    <h3 className="text-xl font-semibold text-hotel-navy">From Trivandrum International Airport</h3>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-2">
                    <li>Exit the airport and head towards NH-66 (Kazhakuttam-Kovalam Road).</li>
                    <li>Drive northwest on NH-66 for approximately 17 km towards Kazhakoottam.</li>
                    <li>Upon reaching Kazhakoottam junction, take the right turn towards the railway station.</li>
                    <li>Proceed for about 500 meters and Manzil Lounge will be visible on your right, adjacent to the railway station.</li>
                    <li>Total distance: Approximately 20 km; Travel time: Around 40 minutes by car.</li>
                  </ol>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Train size={24} className="text-hotel-gold mr-3" />
                    <h3 className="text-xl font-semibold text-hotel-navy">From Trivandrum Central Railway Station</h3>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-2">
                    <li>Take a local train to Kazhakoottam Railway Station (multiple trains available throughout the day).</li>
                    <li>Upon arriving at Kazhakoottam Railway Station, exit the station from the main entrance.</li>
                    <li>Manzil Lounge is located just opposite the station entrance.</li>
                    <li>Total distance: Approximately 15 km; Travel time: Around 30 minutes by train.</li>
                  </ol>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Bus size={24} className="text-hotel-gold mr-3" />
                    <h3 className="text-xl font-semibold text-hotel-navy">From Trivandrum Central Bus Station</h3>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-2">
                    <li>Take a city bus to Kazhakoottam Bus Terminal (buses available every 15-20 minutes).</li>
                    <li>From the bus terminal, walk towards the railway station (about 500 meters).</li>
                    <li>Manzil Lounge is located adjacent to the railway station.</li>
                    <li>Total distance: Approximately 15 km; Travel time: Around 45 minutes by bus + 6 minutes walking.</li>
                  </ol>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Car size={24} className="text-hotel-gold mr-3" />
                    <h3 className="text-xl font-semibold text-hotel-navy">By Private Vehicle</h3>
                  </div>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-2">
                    <li>If coming from Trivandrum city, take NH-66 towards Kollam.</li>
                    <li>Continue on NH-66 until you reach Kazhakoottam Junction.</li>
                    <li>From the junction, take the road towards Kazhakoottam Railway Station.</li>
                    <li>Manzil Lounge will be visible on your right, adjacent to the railway station.</li>
                    <li>Free parking is available for hotel guests.</li>
                  </ol>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-center text-gray-600"
            >
              <p>
                Need assistance with directions? Feel free to contact us at <a href="tel:+919876543210" className="text-hotel-navy font-medium hover:text-hotel-gold">+91 9876 543 210</a> for guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Nearby Attractions */}
      <section className="py-16 px-6 bg-hotel-beige">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-hotel-navy mb-4">
              Nearby Attractions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore popular destinations near Manzil Lounge during your stay.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nearbyAttractions.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-md flex"
              >
                <div className="mr-4">
                  <div className="w-12 h-12 bg-hotel-navy/10 rounded-full flex items-center justify-center">
                    {attraction.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-hotel-navy mb-2">{attraction.name}</h3>
                  <div className="flex space-x-6 text-sm text-gray-500 mb-3">
                    <span>Distance: {attraction.distance}</span>
                    <span>Travel Time: {attraction.travelTime}</span>
                  </div>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-gray-600 mb-4">
              Our front desk staff can provide more information about local attractions and help arrange transportation.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center text-hotel-navy font-medium hover:text-hotel-gold transition-colors"
            >
              Contact Us for Travel Assistance
              <MapPin size={16} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Location;
