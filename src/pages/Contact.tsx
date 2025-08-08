import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Building, Truck } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-900 via-black to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.2),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
              <Phone className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch for premium sand and aggregate solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Get a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project requirements, quantities needed, delivery location, and timeline..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-6 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Phone</h3>
                    <p className="text-gray-700">+27 81 380 7867</p>
                    <p className="text-sm text-gray-600">Available during business hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Email</h3>
                    <p className="text-gray-700">info@rotarysand.co.za</p>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Location</h3>
                    <p className="text-gray-700">Bronkhorstspruit, South Africa</p>
                    <p className="text-sm text-gray-600">Mining operations near Delmas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-600">Weekend and after-hours support available</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-black mb-3">Quick Response</h3>
                <p className="text-gray-700 mb-4">
                  Need an urgent quote? Call us directly at +27 81 380 7867 for immediate assistance.
                </p>
                <p className="text-gray-700">
                  Our team is ready to help with product specifications, delivery schedules, 
                  and custom solutions for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Find Us</h2>
            <p className="text-xl text-gray-700">Located near Delmas for optimal access to high-quality silica deposits</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="aspect-video rounded-lg overflow-hidden">
             <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d28.764437!3d-25.975836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1693234567890!5m2!1sen!2sza"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Rotary Sand Location - Near Delmas, South Africa"
></iframe>

            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-sm text-gray-600">Bronkhorstspruit, Gauteng</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Building className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-900">Mining Operations</p>
                  <p className="text-sm text-gray-600">Near Delmas</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Truck className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-900">Service Area</p>
                  <p className="text-sm text-gray-600">Nationwide Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;