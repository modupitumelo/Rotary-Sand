import React from 'react';
import { ArrowRight, Check, TestTube, Truck, Building, Award, Shield, DollarSign, Leaf, Star, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Product Development & Lab Tests",
      description: "In-house and partner lab testing with certificates",
      features: ["Quality Certificates", "Partner Labs", "Professional Testing"]
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
      description: "Stringent quality standards",
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
    { number: "10+", label: "Years Experience", icon: <Star className="h-6 w-6" /> },
    { number: "1000+", label: "Projects Completed", icon: <Building className="h-6 w-6" /> },
    { number: "50+", label: "Product Varieties", icon: <TestTube className="h-6 w-6" /> },
    { number: "24/7", label: "Customer Support", icon: <Users className="h-6 w-6" /> }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/image.jpg" 
            alt="Sand mining operation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-8">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Your Trusted Partner in
              <span className="block text-gray-300 mt-2">
                Premium Sand & Stone
              </span>
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

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-lg group-hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className="text-gray-600 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/image.jpg" 
                  alt="Sand mining operation" 
                  className="rounded-lg shadow-xl w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-gray-900">Since 2015</div>
                  <div className="text-sm text-gray-600">Trusted Excellence</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm font-medium mb-6">
                <Award className="h-4 w-4 mr-2" />
                Level 1 B-BBEE Contributor
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                About Rotary Sand
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
                Rotary Sand is a leading supplier of graded silica sand and aggregates. 
                We deliver trusted, high-quality materials with decades of experience across South Africa.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since 2015, our opencast mine near Delmas has been producing premium-grade 
                silica sand for glass, filtration, mining, and leisure industries.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors duration-200 group"
              >
                Learn More
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm font-medium mb-6">
              <Globe className="h-4 w-4 mr-2" />
              Comprehensive Solutions
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              From product development to nationwide delivery, we provide end-to-end solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  <div className="bg-black text-white p-4 rounded-lg w-fit mb-6 group-hover:scale-105 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Why Choose Rotary Sand?</h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Your success is our commitment - built on quality, reliability, and trust
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors duration-200 border border-gray-700">
                  <div className="bg-white text-black p-4 rounded-lg w-fit mx-auto mb-6 group-hover:scale-105 transition-transform duration-200">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2 text-white">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Contact us today for premium sand and aggregate solutions tailored to your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Get Quote Now
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-md hover:bg-white hover:text-black transition-colors duration-200"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;