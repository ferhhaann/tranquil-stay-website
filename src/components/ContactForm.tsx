
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Here you would typically send the form data to a server
    // This is a mock successful submission
    setFormStatus({
      type: 'success',
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: null, message: '' });
    }, 5000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Contact Information */}
        <div className="bg-hotel-navy p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <p className="text-gray-300 mb-8">
            Feel free to reach out to us with any questions or to make a reservation. We're here to help make your stay comfortable and memorable.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 bg-hotel-gold/20 p-3 rounded-full">
                <MapPin size={20} className="text-hotel-gold" />
              </div>
              <div>
                <h4 className="text-hotel-gold font-medium">Location</h4>
                <p className="text-gray-300">Near Kazhakoottom Railway Station, Trivandrum, Kerala, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-hotel-gold/20 p-3 rounded-full">
                <Phone size={20} className="text-hotel-gold" />
              </div>
              <div>
                <h4 className="text-hotel-gold font-medium">Phone</h4>
                <p className="text-gray-300">+91 9876 543 210</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-hotel-gold/20 p-3 rounded-full">
                <Mail size={20} className="text-hotel-gold" />
              </div>
              <div>
                <h4 className="text-hotel-gold font-medium">Email</h4>
                <p className="text-gray-300">info@manzillounge.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h4 className="text-hotel-gold font-medium mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-hotel-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-hotel-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-hotel-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-hotel-navy">Send a Message</h3>
          
          {formStatus.type && (
            <div 
              className={`p-4 mb-6 rounded-md ${
                formStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}
            >
              {formStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-gold"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-gold"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-gold"
                  placeholder="Your Phone Number"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-gold"
                placeholder="Subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-gold"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-hotel-navy text-white py-3 px-6 rounded-md flex items-center justify-center hover:bg-hotel-gold transition-colors"
            >
              Send Message
              <Send size={18} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
