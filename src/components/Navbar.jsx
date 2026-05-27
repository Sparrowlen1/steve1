import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Work', 'Process', 'Results', 'Services', 'Training'];

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId.toLowerCase());
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-4 px-3 sm:px-4 pointer-events-none">
        <nav className={`pointer-events-auto w-full max-w-6xl transition-all duration-500 rounded-full ${
          isScrolled 
            ? 'bg-black/60 backdrop-blur-xl border border-white/20 shadow-lg' 
            : 'bg-black/40 backdrop-blur-md border border-white/10'
        }`}>
          <div className="px-3 sm:px-6 py-2 sm:py-3">
            <div className="flex items-center justify-between">
              
              <Link to="/" className="text-sm sm:text-xl md:text-2xl font-bold tracking-tighter bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                VIREON ADs
              </Link>

              <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link)}
                    className="text-gray-200 hover:text-amber-400 transition-colors duration-300 text-xs lg:text-sm uppercase tracking-wider"
                  >
                    {link}
                  </button>
                ))}
              </div>
              
              <div className="hidden md:block">
                <button
                  onClick={() => navigate('/booking')}
                  className="px-4 lg:px-5 py-1.5 lg:py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-full font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 text-xs lg:text-sm uppercase tracking-wider"
                >
                  Book Now
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="md:hidden mt-3 pt-3 border-t border-white/20">
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <button
                      key={link}
                      onClick={() => scrollToSection(link)}
                      className="text-gray-200 hover:text-amber-400 transition-colors text-left py-2 text-sm uppercase tracking-wider"
                    >
                      {link}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate('/booking');
                    }}
                    className="px-5 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-full font-semibold text-sm uppercase tracking-wider mt-2"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
      
      <div className="h-14 sm:h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;