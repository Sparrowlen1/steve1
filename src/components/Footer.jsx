import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-4">
              SPARROWLEN
            </h3>
            <p className="text-gray-400 text-sm">
              Scaling DTC brands with high-volume creative & data-driven decisions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><a href="#work" className="hover:text-amber-500 transition-colors">Work</a></li>
              <li><a href="#process" className="hover:text-amber-500 transition-colors">Process</a></li>
              <li><a href="#results" className="hover:text-amber-500 transition-colors">Results</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><Link to="/booking" className="hover:text-amber-500 transition-colors">Book</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:Sparrowlen13@gmail.com" 
                  className="hover:text-amber-500 transition-colors"
                >
                  Sparrowlen13@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <a 
                  href="tel:0740063099" 
                  className="hover:text-amber-500 transition-colors"
                >
                  0740063099
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Mon-Fri: 9am-6pm EST</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Follow Us</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-3 group">
                <Linkedin className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Twitter className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <a href="#" className="hover:text-amber-500 transition-colors">Twitter</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Instagram className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600 pt-8 border-t border-white/10">
          © 2026 Sparrowlen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;