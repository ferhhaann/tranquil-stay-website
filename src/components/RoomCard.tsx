
import React, { useState, useEffect } from 'react';
import { Wifi, Tv, Wind, Coffee, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface RoomCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  amenities: string[];
  roomType: 'premium' | 'deluxe';
  available?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({
  title,
  description,
  price,
  imageUrl,
  amenities,
  roomType,
  available = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsLoaded(true);
  }, [imageUrl]);

  const getAmenityIcon = (amenity: string) => {
    const amenityLower = amenity.toLowerCase();
    if (amenityLower.includes('wifi')) return <Wifi size={16} />;
    if (amenityLower.includes('tv')) return <Tv size={16} />;
    if (amenityLower.includes('air') || amenityLower.includes('ac')) return <Wind size={16} />;
    if (amenityLower.includes('breakfast') || amenityLower.includes('coffee')) return <Coffee size={16} />;
    return <CheckCircle size={16} />;
  };

  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-lg shadow-md transition-all duration-300 bg-white hover:shadow-xl",
        isHovered ? "scale-[1.01]" : "scale-100",
        roomType === 'premium' ? 'border-hotel-gold border' : 'border border-gray-100'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Room Image */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-out",
            isHovered ? "scale-110" : "scale-100",
            !isLoaded ? "blur-sm" : "blur-0"
          )}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Room Type Badge */}
        <div 
          className={cn(
            "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold",
            roomType === 'premium' 
              ? "bg-hotel-gold text-white" 
              : "bg-hotel-navy/10 text-hotel-navy"
          )}
        >
          {roomType === 'premium' ? 'Premium Room' : 'Deluxe Room'}
        </div>
        
        {/* Availability Badge */}
        {!available && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Booked
          </div>
        )}
      </div>
      
      {/* Room Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-hotel-navy">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        {/* Amenities */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-3">
            {amenities.slice(0, 4).map((amenity, index) => (
              <div key={index} className="flex items-center text-gray-500 text-sm">
                {getAmenityIcon(amenity)}
                <span className="ml-1">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-hotel-navy">
            <span className="text-2xl font-bold">₹{price}</span>
            <span className="text-gray-500 text-sm ml-1">/night</span>
          </div>
          <Link
            to="/contact"
            className={cn(
              "px-4 py-2 rounded text-sm font-medium transition-colors",
              available 
                ? "bg-hotel-navy text-white hover:bg-hotel-gold" 
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            )}
          >
            {available ? 'Book Now' : 'Unavailable'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
