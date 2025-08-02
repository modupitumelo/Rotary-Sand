import React, { useState, useEffect } from 'react';
import {
  ArrowRight, Check, TestTube, Truck, Building, Award,
  Shield, DollarSign, Leaf, Star, Users, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev % totalSlides) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Product Development & Lab Tests",
      description: "In-house and partner lab testing with certificates",
      features: ["ISO 9001 Certified", "Quality Certificates", "Partner Labs"]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics & Delivery",
      description: "Dry and wet product delivery nationwide",
      features: ["Nationwide Coverage", "Specialized Fleet", "Flexible Scheduling"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Infrastructure Support",
      description: "Mining, drying, and weighbridge facilities",
      features: ["Modern Equipment", "Processing Facilities", "Quality Control"]
    }
  ];

  const benefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assured",
      description: "Certified quality standards",
      stat: "100%"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Nationwide coverage",
      stat: "24/7"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Best Value",
      description: "Competitive pricing",
      stat: "15+"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable",
      description: "Responsible practices",
      stat: "Level 1"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: <Star className="h-6 w-6" /> },
    { number: "1000+", label: "Projects Completed", icon: <Building className="h-6 w-6" /> },
    { number: "50+", label: "Product Varieties", icon: <TestTube className="h-6 w-6" /> },
    { number: "Level 1", label: "B-BBEE Status", icon: <Users className="h-6 w-6" /> }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        {/* Slideshow Background */}
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          <img
            src={`/image${currentSlide}.jpg`}
            alt={`Slide ${currentSlide}`}
            className="w-full h-full object-cover"
            key={currentSlide}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-8">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Your Trusted Partner in
              <span className="block text-gray-300 mt-2">Premium Sand & Stone</span>
              <span className="block text-white mt-2">Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Supplying top-quality sand, aggregates, and construction materials for residential,
              commercial, and industrial projects across South Africa since 2006.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link
                to="/contact"
                className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>Get a Quote Today</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md hover:bg-white hover:text-black transition-colors duration-200 w-full sm:w-auto text-center"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Keep the rest of your sections unchanged */}
      {/* Stats Section */}
      {/* About Section */}
      {/* Services Section */}
      {/* Why Choose Us */}
      {/* CTA Section */}
      {/* ... (as per your original code) */}
    </div>
  );
};

export default Home;
