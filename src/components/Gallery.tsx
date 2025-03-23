
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  images: { url: string; alt: string; }[];
  className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, className = "" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const openLightbox = (index: number) => {
    document.body.style.overflow = 'hidden';
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    document.body.style.overflow = 'auto';
    setActiveIndex(null);
  };

  const goToPrevious = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % images.length);
    }
  };

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-64"
            onClick={() => openLightbox(index)}
          >
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            <img
              src={image.url}
              alt={image.alt}
              className={`w-full h-full object-cover transition-all duration-500 ${
                loadedImages[index] ? 'opacity-100' : 'opacity-0'
              } group-hover:scale-105`}
              onLoad={() => handleImageLoad(index)}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <div className="absolute top-4 right-4">
            <button 
              className="text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button 
              className="text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button 
              className="text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div 
            className="max-w-4xl max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex].url}
              alt={images[activeIndex].alt}
              className="max-w-full max-h-[80vh] object-contain animate-scale-in"
            />
          </div>
          
          <div className="absolute bottom-4 text-white text-center w-full">
            <p className="text-lg">{images[activeIndex].alt}</p>
            <p className="text-sm text-gray-300">{activeIndex + 1} of {images.length}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
