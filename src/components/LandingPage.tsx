import React, { useState } from 'react';
import {
  Globe,
  Truck,
  Shield,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Star,
  Menu,
  X,
  TrendingUp,
  Clock,
  Award,
  Zap
} from 'lucide-react';

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src='/goglobal_logo.png' className='w-24 h-10' />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-[#025C64] hover:text-green-700 px-3 py-2 text-lg font-medium transition-colors">Services</a>
                <a href="#about" className="text-[#025C64] hover:text-green-700 px-3 py-2 text-lg font-medium transition-colors">About</a>
                <a href="#testimonials" className="text-[#025C64] hover:text-green-700 px-3 py-2 text-lg font-medium transition-colors">Testimonials</a>
                <a href="#contact" className="text-[#025C64] hover:text-green-700 px-3 py-2 text-lg font-medium transition-colors">Contact</a>
                <button className="bg-[#025C64] text-white px-6 py-2 text-lg font-medium hover:bg-green-700 transition-colors">
                  Why Global
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#025C64] hover:text-green-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-[#025C64] hover:text-green-700">Services</a>
              <a href="#about" className="block px-3 py-2 text-[#025C64] hover:text-green-700">About</a>
              <a href="#testimonials" className="block px-3 py-2 text-[#025C64] hover:text-green-700">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-[#025C64] hover:text-green-700">Contact</a>
              <button className="w-full text-left bg-[#025C64] text-white px-3 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-white text-[#025C64]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Connect Your Business to
              <span className="text-yellow-400 block">Global Markets</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#025C64] max-w-3xl mx-auto leading-relaxed">
              Streamline international trade with our comprehensive platform. From import/export documentation to logistics coordination, we make global commerce simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-500 text-[#025C64] px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-[#025C64] px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 hover:text-blue-900 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-[#025C64] mb-2 group-hover:text-yellow-500 transition-colors">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-[#025C64] mb-2 group-hover:text-yellow-500 transition-colors">10K+</div>
              <div className="text-gray-600">Active Traders</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-[#025C64] mb-2 group-hover:text-yellow-500 transition-colors">$2B+</div>
              <div className="text-gray-600">Trade Volume</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-[#025C64] mb-2 group-hover:text-yellow-500 transition-colors">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Trade Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in international trade, from documentation to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6 group-hover:bg-yellow-100 transition-colors">
                <Truck className="h-8 w-8 text-[#025C64] group-hover:text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Logistics</h3>
              <p className="text-gray-600 mb-6">End-to-end logistics management with real-time tracking and optimized shipping routes worldwide.</p>
              <a href="#" className="text-[#025C64] font-medium hover:text-yellow-600 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6 group-hover:bg-yellow-100 transition-colors">
                <Shield className="h-8 w-8 text-[#025C64] group-hover:text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trade Compliance</h3>
              <p className="text-gray-600 mb-6">Automated compliance checks and documentation to ensure smooth customs clearance.</p>
              <a href="#" className="text-[#025C64] font-medium hover:text-yellow-600 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6 group-hover:bg-yellow-100 transition-colors">
                <BarChart3 className="h-8 w-8 text-[#025C64] group-hover:text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Analytics</h3>
              <p className="text-gray-600 mb-6">Advanced market insights and trade data to help you make informed business decisions.</p>
              <a href="#" className="text-blue-800 font-medium hover:text-yellow-600 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6 group-hover:bg-yellow-100 transition-colors">
                <Users className="h-8 w-8 text-[#025C64] group-hover:text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Buyer Network</h3>
              <p className="text-gray-600 mb-6">Connect with verified buyers and suppliers across our global network of trusted partners.</p>
              <a href="#" className="text-[#025C64] font-medium hover:text-yellow-600 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6 group-hover:bg-yellow-100 transition-colors">
                <Zap className="h-8 w-8 text-[#025C64] group-hover:text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Platform</h3>
              <p className="text-gray-600 mb-6">Streamlined digital tools for quote management, order tracking, and communication.</p>
              <a href="#" className="text-blue-800 font-medium hover:text-yellow-600 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6 group-hover:bg-yellow-100 transition-colors">
                <Clock className="h-8 w-8 text-[#025C64] group-hover:text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 mb-6">Round-the-clock expert support to help you navigate complex international trade scenarios.</p>
              <a href="#" className="text-blue-800 font-medium hover:text-yellow-600 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Simplifying Global Trade Since 2010
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We've been at the forefront of digital trade transformation, helping businesses of all sizes navigate the complexities of international commerce. Our platform combines cutting-edge technology with deep industry expertise.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Certified trade compliance experts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">ISO 27001 security certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Award-winning customer service</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Multi-language platform support</span>
                </div>
              </div>
              <button className="bg-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition-colors">
                Learn Our Story
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-yellow-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900">150%</div>
                  <div className="text-gray-600">Avg. Growth</div>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-gray-600">Industry Awards</div>
                </div>
                <div className="text-center">
                  <Globe className="h-12 w-12 text-[#025C64] mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-gray-600">Trade Routes</div>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Expert Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Global Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See what our clients say about their trading success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "GoGlobal Trade transformed our export business. We've expanded to 15 new markets in just 6 months with their platform."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-semibold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                  <div className="text-gray-600 text-sm">CEO, TechExport Inc.</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The compliance automation saved us countless hours. Their support team is incredibly knowledgeable and responsive."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-800 font-semibold">MC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Miguel Chen</div>
                  <div className="text-gray-600 text-sm">Trade Director, Global Foods</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Outstanding platform! The market analytics helped us identify profitable opportunities we never knew existed."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-800 font-semibold">AK</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Aisha Kumar</div>
                  <div className="text-gray-600 text-sm">Founder, Textile Traders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white text-[#025C64] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Expand Your Global Reach?
          </h2>
          <p className="text-xl mb-8 text-[#025C64]">
            Join thousands of businesses already trading successfully on our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-[#025C64] px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-[#025C64] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated on Global Trade Trends</h3>
          <p className="text-gray-300 mb-8">Get weekly insights, market analysis, and trading tips delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white text-[#025C64] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-yellow-500" />
                <span className="ml-2 text-xl font-bold">GoGlobal Trade</span>
              </div>
              <p className="text-[#025C64] mb-6 max-w-md">
                Empowering businesses to succeed in global markets through innovative trade solutions and expert support.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-[#025C64]">hello@goglobal.trade</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-[#025C64]">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-[#025C64]">New York, London, Singapore</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-[#025C64]">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Global Logistics</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Trade Compliance</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Market Analytics</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Buyer Network</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-[#025C64]">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#025C64] text-sm">
                © 2025 GoGlobal Trade. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-[#025C64] hover:text-yellow-500 text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-[#025C64] hover:text-yellow-500 text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-[#025C64] hover:text-yellow-500 text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;