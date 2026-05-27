import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/10 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tighter bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-3 sm:mb-4">
              VIREON ADs
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              Scaling DTC brands with high-volume creative & data-driven decisions.
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-gray-300 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><a href="#work" className="hover:text-amber-500 transition-colors">Work</a></li>
              <li><a href="#process" className="hover:text-amber-500 transition-colors">Process</a></li>
              <li><a href="#results" className="hover:text-amber-500 transition-colors">Results</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><Link to="/booking" className="hover:text-amber-500 transition-colors">Book</Link></li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-gray-300 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-500">
              <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:Sparrowlen13@gmail.com" 
                  className="hover:text-amber-500 transition-colors break-all"
                >
                  vireonads757@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <a 
                  href="tel:0740063099" 
                  className="hover:text-amber-500 transition-colors"
                >
                  0113241011
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
                <span>Mon-Fri: 9am-6pm EST</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-gray-300 text-sm sm:text-base">Follow Us</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-500">
              <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 group">
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <a href="https://www.linkedin.com/in/stephen-njue-455727406/" className="hover:text-amber-500 transition-colors" target='_blank'>LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-xs sm:text-sm text-gray-600 pt-6 sm:pt-8 border-t border-white/10">
          © 2026 Sparrowlen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;