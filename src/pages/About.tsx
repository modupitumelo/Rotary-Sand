import React from 'react';
import { Award, Shield, Users, Leaf, ArrowRight, CheckCircle, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "We adhere to strict quality standards to ensure top product quality and service excellence.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Environmental Responsibility",
      description: "Committed to responsible mining practices that minimize environmental impact.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Human Resources",
      description: "People-focused approach supporting safety, wellbeing, and sustainable practices.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "Prioritizing community and employee health through comprehensive safety measures.",
      color: "from-red-500 to-red-600"
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Excellence", icon: <Award className="h-6 w-6" /> },
    { number: "1000+", label: "Projects Completed", icon: <Target className="h-6 w-6" /> },
    { number: "Level 1", label: "B-BBEE Status", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "100%", label: "Quality Assured", icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Since 2006
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About Rotary Sand
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leading the industry in premium silica sand and aggregate supply with unwavering commitment to quality and sustainability
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-lg group-hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className="text-gray-600 mb-3 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm font-medium mb-6">
                <Globe className="h-4 w-4 mr-2" />
                Our Story
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Company Overview
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Rotary Sands has been supplying premium silica sand and aggregates since 2006. 
                  Our opencast mine near Delmas produces high-grade silica used in glass, filtration, 
                  mining, and leisure industries.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With decades of experience in the industry, we have established ourselves as 
                  a trusted partner for businesses across South Africa, delivering consistent 
                  quality and reliable service.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our strategic location and state-of-the-art facilities enable us to serve 
                  clients nationwide while maintaining the highest standards of quality and efficiency.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors duration-200 group"
                >
                  Our Services
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/image.jpg" 
                alt="Mining facilities" 
                className="rounded-lg shadow-xl w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold text-gray-900">Premium Quality</div>
                <div className="text-sm text-gray-600">ISO 9001 Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Our Foundation
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                  <div className="bg-black text-white p-4 rounded-lg w-fit mb-6 group-hover:scale-105 transition-transform duration-200">
                    {value.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {/* Quality Assurance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src="/quality.jpg" 
                  alt="Quality testing laboratory" 
                  className="rounded-lg shadow-xl w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm font-medium mb-6">
                  <Award className="h-4 w-4 mr-2" />
                  ISO 9001 Certified
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Quality Assurance</h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At Rotary Sand, quality is not just a promise—it's our foundation. We adhere 
                    to stringent ISO 9001 standards throughout our operations, ensuring that every 
                    grain of sand and aggregate meets the highest industry specifications.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our comprehensive quality control processes include regular testing, 
                    certification, and continuous monitoring to guarantee consistent product 
                    excellence that our clients can depend on.
                  </p>
                </div>
              </div>
            </div>

            {/* Environmental Responsibility */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm font-medium mb-6">
                  <Leaf className="h-4 w-4 mr-2" />
                  Sustainable Practices
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Environmental Responsibility</h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We are committed to responsible mining practices that minimize our environmental 
                    footprint while maximizing the benefits to local communities. Our sustainable 
                    approach includes land rehabilitation, water conservation, and biodiversity protection.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Through innovative mining techniques and environmental management systems, 
                    we ensure that our operations contribute positively to the ecosystem and 
                    surrounding communities for generations to come.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/enviroment.jpg" 
                  alt="Environmental conservation" 
                  className="rounded-lg shadow-xl w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
              </div>
            </div>

            {/* Human Resources */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src="/human.jpg" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-xl w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-md text-sm font-medium mb-6">
                  <Users className="h-4 w-4 mr-2" />
                  People First
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Human Resources</h3>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our people are our greatest asset. We foster a culture of safety, inclusion, 
                    and continuous development, ensuring that every team member has the opportunity 
                    to grow and thrive in a supportive work environment.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Through comprehensive training programs, health and safety initiatives, and 
                    career development opportunities, we invest in our people's success while 
                    building a sustainable future for our industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Partner with Excellence</h2>
          <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Experience the Rotary Sand difference - where quality meets reliability and sustainability drives innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/bee"
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-md hover:bg-white hover:text-black transition-colors duration-200"
            >
              Learn About B-BBEE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
