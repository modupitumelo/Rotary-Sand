import React from 'react';
import { Award, Users, Building, Target } from 'lucide-react';

const BEE = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-900 via-black to-orange-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(249,115,22,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(249,115,22,0.2),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Level 1 Contributor
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              B-BBEE Commitment
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Empowering communities and driving transformation through responsible business practices
            </p>
          </div>
        </div>
      </section>

      {/* Level 1 Contributor */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="h-20 w-20 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Level 1 B-BBEE Contributor</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300 mb-8">
              Rotary Sand is proud to be recognized as a Level 1 Contributor and Empowering Supplier, 
              demonstrating our commitment to transformation and economic empowerment.
            </p>
            <div className="bg-gray-800 p-8 rounded-lg inline-block">
              <p className="text-2xl font-bold">Level 1 Status</p>
              <p className="text-gray-300">Verified B-BBEE Contributor</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is B-BBEE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">What is B-BBEE?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Broad-Based Black Economic Empowerment (B-BBEE) is a transformative policy 
                framework designed to address the economic inequalities of South Africa's past 
                and ensure meaningful participation in the economy.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                B-BBEE measures companies across multiple elements including ownership, 
                management control, skills development, enterprise and supplier development, 
                and socio-economic development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Level 1 status reflects our commitment to these principles and our 
                active role in creating opportunities for previously disadvantaged individuals 
                and communities.
              </p>
            </div>
            <div>
              <img 
                src="/rotary-sand-b-bbee.jpg"
                alt="Diverse team collaboration"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Benefits to Our Clients</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Partnering with a Level 1 B-BBEE contributor brings significant advantages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Target className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-4">Enhanced Scoring</h3>
              <p className="text-gray-600">
                Boost your own B-BBEE scorecard through procurement from a Level 1 supplier
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Building className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-4">Compliance Support</h3>
              <p className="text-gray-600">
                Meet procurement requirements and support transformation goals
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Users className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-4">Community Impact</h3>
              <p className="text-gray-600">
                Contribute to meaningful socio-economic development initiatives
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-4">Preferred Supplier</h3>
              <p className="text-gray-600">
                Gain recognition as a responsible business partner in tenders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Transformation Commitment</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We actively contribute to economic transformation through various initiatives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Skills Development</h3>
                  <p className="text-gray-700">
                    Investing in training and development programs to build capacity 
                    within our workforce and the broader community.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Enterprise Development</h3>
                  <p className="text-gray-700">
                    Supporting small and medium enterprises through mentorship, 
                    funding, and procurement opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Supplier Development</h3>
                  <p className="text-gray-700">
                    Actively sourcing from black-owned suppliers and providing 
                    support to enhance their capabilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Socio-Economic Development</h3>
                  <p className="text-gray-700">
                    Contributing to community development projects that create 
                    lasting positive impact in local areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Employment Equity</h3>
                  <p className="text-gray-700">
                    Promoting diversity and inclusion at all levels of our 
                    organization, from entry-level to executive positions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Ownership Transformation</h3>
                  <p className="text-gray-700">
                    Maintaining meaningful black ownership and participation 
                    in our business operations and decision-making processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Download Button */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold mb-6">Partner with a Level 1 Supplier</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Enhance your B-BBEE scorecard while accessing premium sand and aggregate solutions
          </p>
          <div className="space-x-4">
            <a
              href="/Rotary-ITE-Certificate.pdf"
              download
              className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Download ITE Certificate
            </a>
            <button className="inline-block bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-md hover:bg-orange-700 transition-colors duration-200">
              Get Your Quote Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BEE;
