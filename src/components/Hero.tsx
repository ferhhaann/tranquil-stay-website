
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl: string;
  height?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText = "Book Now",
  buttonLink = "/contact",
  imageUrl,
  height = "h-screen"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      setIsLoaded(true);
    };
  }, [imageUrl]);

  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* Background Image with Lazy Loading */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ease-out lazy-image ${!isLoaded ? 'loading' : ''}`} 
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: !isLoaded ? 'blur(10px)' : 'none',
          transform: !isLoaded ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 sm:px-12">
        <div className="max-w-4xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 drop-shadow-md">
            {title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-sm">
            {subtitle}
          </p>
          
          {buttonText && (
            <Link
              to={buttonLink}
              className="inline-flex items-center bg-hotel-gold text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-transform hover:translate-y-[-2px] shadow-lg group"
            >
              {buttonText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          )}
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Hero;
