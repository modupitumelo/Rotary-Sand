import React from 'react';
import { Filter, Wrench, Home, Volleyball } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: <Filter className="h-12 w-12" />,
      title: "Filter Sands, Grits & Pebbles",
      description: "High-quality filtration materials for water treatment",
      products: [
        "Fine Filters (0.3mm to 0.7mm)",
        "Filter Pebbles (5–45mm sizes)",
        "Coarse Filters (0.8mm to 1.3mm)",
        "Filter Grits (2–7mm)"
      ]
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Industrial Sands & Grits",
      description: "Specialized materials for industrial applications",
      products: [
        "Industrial Sands (various microns)",
        "Colored Industrial Sands",
        "Industrial Grits (1–7mm)",
        "Custom Specifications Available"
      ]
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Building Sand, Grit & Stone",
      description: "Construction materials for all building needs",
      products: [
        "River Sand (washed & unwashed)",
        "Builder Sand",
        "Plaster Sand",
        "Building Grit & Stone (various sizes)"
      ]
    },
    {
      icon: <Volleyball className="h-12 w-12" />,
      title: "Sports & Leisure Sands",
      description: "Premium sands for recreational applications",
      products: [
        "Beach Volleyball Sand",
        "Bunker Sand",
        "Playpen Sand",
        "Golf Course Sand"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-900 via-black to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(34,197,94,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_80%,rgba(34,197,94,0.2),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
              <Filter className="h-4 w-4 mr-2" />
              Premium Materials
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Products
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Premium sand and aggregate solutions for every industry and application
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-black mb-6">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-black mb-4">{category.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{category.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                          <span className="text-gray-800 font-medium">{product}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src="/image.jpg"
                    alt={category.title}
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Quality Standards</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every product meets stringent quality specifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-black mb-4">ISO 9001 Certified</h3>
              <p className="text-gray-600">
                All products manufactured under ISO 9001 quality management standards
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-black mb-4">Lab Tested</h3>
              <p className="text-gray-600">
                Comprehensive testing ensures consistent quality and specifications
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-black mb-4">Certified Delivery</h3>
              <p className="text-gray-600">
                Every delivery includes quality certificates and documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black text-white p-12 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-6">Need Custom Specifications?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              We can develop custom sand and aggregate solutions tailored to your specific requirements
            </p>
            <button className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;