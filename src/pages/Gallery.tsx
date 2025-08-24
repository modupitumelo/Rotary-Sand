import React, { useState } from 'react';
import { X, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/1.jpg",
      caption: "Sand Processing Machine"
    },
    {
      src: "/2.jpg",
      caption: "Sand Pile Machinery"
    },
    {
      src: "/3.jpg",
      caption: "Sand Field"
    },
    {
      src: "/4.jpg",
      caption: "Sand processing Plant"
    },
    {
      src: "/5.jpg",
      caption: "Sand Surface Texture"
    },
    {
      src: "/6.jpg",
      caption: "Aerial Sand Mining Site"
    },
    {
      src: "/7.jpg",
      caption: "Sand Dryer Plant"
    },
    {
      src: "/8.jpg",
      caption: "Impeller - Dust Collector - Cyclone Fan"
    },
    {
      src: "/9.jpg",
      caption: "Impeller - Dust Collector - Cyclone Fan"
    }
   
  ];

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    }
  };

  React.useEffect(() => {
    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-900 via-black to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.2),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Our Operations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Gallery
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our facilities, operations, and the quality products we deliver
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group cursor-pointer relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="aspect-square relative overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                    <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <p className="text-xs sm:text-sm font-medium leading-tight">{image.caption}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in" 
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[95vh] flex items-center justify-center animate-fade-in-up">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-black/70 transition-all duration-200"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-4 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-black/70 transition-all duration-200"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-4 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-black/70 transition-all duration-200"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            {/* Image */}
            <img 
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].caption}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
            
            {/* Image Caption */}
            <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-white text-xs sm:text-sm text-center max-w-xs sm:max-w-md">
              {galleryImages[selectedImageIndex].caption}
            </div>
          </div>
        </div>
      )}

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              State-of-the-art facilities and equipment ensuring quality at every step
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-2xl font-bold">
                10+
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-black mb-2">Years Experience</h3>
              <p className="text-xs sm:text-base text-gray-600">Serving South Africa since 2015</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-2xl font-bold">
                50+
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-black mb-2">Product Varieties</h3>
              <p className="text-xs sm:text-base text-gray-600">Wide range of sand and aggregates</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-2xl font-bold">
                24/7
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-black mb-2">Support</h3>
              <p className="text-xs sm:text-base text-gray-600">Round-the-clock customer service</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-2xl font-bold">
                100%
              </div>
              <h3 className="text-sm sm:text-lg font-semibold text-black mb-2">Quality Assured</h3>
              <p className="text-xs sm:text-base text-gray-600">Certified quality processes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
