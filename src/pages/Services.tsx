import React from 'react';
import { TestTube, Truck, Building, FlaskConical, Globe, Scale } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TestTube className="h-12 w-12" />,
      title: "Product Development & Lab Testing",
      id: "filter-sands",
      description: "Comprehensive testing and certification services",
      features: [
        "In-house laboratory testing",
        "Partner lab collaboration for complex analysis",
        "Certificates provided with every delivery",
        "Quality assurance documentation",
        "Custom product development"
      ]
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Logistics & Delivery",
      id: "industrial-sands",
      description: "Nationwide delivery solutions",
      features: [
        "Fleet of specialized tankers",
        "Dry product delivery",
        "Wet product delivery",
        "Nationwide coverage",
        "Flexible scheduling"
      ]
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Infrastructure Support",
      id: "building-materials",
      description: "Complete mining and processing facilities",
      features: [
        "Mining infrastructure",
        "Drying facilities",
        "Weighbridge operations",
        "Storage capabilities",
        "Processing equipment"
      ]
    }
  ];

  React.useEffect(() => {
    // Handle scrolling to section from URL hash
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-black to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
              <Globe className="h-4 w-4 mr-2" />
              Comprehensive Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions from product development to nationwide delivery
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-black mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src="/image.jpg"
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Infrastructure</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              State-of-the-art facilities ensuring quality and efficiency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Building className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-4">Mining Infrastructure</h3>
              <p className="text-gray-600">
                Advanced mining equipment and processes for efficient extraction 
                of high-quality silica sand from our Delmas operations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <FlaskConical className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-4">Drying Infrastructure</h3>
              <p className="text-gray-600">
                Modern drying facilities that ensure optimal moisture content 
                and consistent product quality for various applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Scale className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-4">Weighbridge Facilities</h3>
              <p className="text-gray-600">
                Precision weighing systems ensuring accurate measurements 
                and transparent transactions for all our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section id="sports-leisure" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From extraction to delivery, every step is optimized for quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Extraction</h3>
              <p className="text-gray-600">Careful extraction from our opencast mine near Delmas</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Processing</h3>
              <p className="text-gray-600">Advanced processing and grading to specifications</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Testing</h3>
              <p className="text-gray-600">Rigorous quality testing and certification</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Delivery</h3>
              <p className="text-gray-600">Nationwide delivery with our specialized fleet</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;