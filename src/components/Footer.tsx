
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hotel-navy text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-hotel-gold">Manzil</span> Lounge
            </h3>
            <p className="text-gray-300 mb-4">
              A clean, neat, and quiet hotel near Kazhakoottom Railway Station, offering comfort and convenience for all travelers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-hotel-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-300 hover:text-white transition-colors">Rooms & Suites</Link>
              </li>
              <li>
                <Link to="/dining" className="text-gray-300 hover:text-white transition-colors">Dining</Link>
              </li>
              <li>
                <Link to="/amenities" className="text-gray-300 hover:text-white transition-colors">Amenities</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-hotel-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 text-hotel-gold" />
                <span className="text-gray-300">Near Kazhakoottom Railway Station, Trivandrum, Kerala, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-hotel-gold" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">+91 9876 543 210</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-hotel-gold" />
                <a href="mailto:info@manzillounge.com" className="text-gray-300 hover:text-white transition-colors">info@manzillounge.com</a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mt-1 mr-2 text-hotel-gold" />
                <span className="text-gray-300">24/7 Reception <br /> Check-in: 12:00 PM <br /> Check-out: 11:00 AM</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-hotel-gold">Newsletter</h4>
            <p className="text-gray-300 mb-3">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-hotel-gold"
              />
              <button 
                type="submit"
                className="w-full bg-hotel-gold text-white py-2 rounded hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Manzil Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
