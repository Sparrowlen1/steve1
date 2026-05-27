import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tighter">
            Scaling DTC Brands with{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent block sm:inline">
              Creative Volume
            </span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            We build creative engines that consistently scale spend with stable CAC. 
            Performance-based creative agency for 7-9 figure brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button 
              onClick={() => navigate('/booking')} 
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Book a Consultation 
            </button>
            <button 
              onClick={scrollToWork}
              className="border-2 border-amber-500 text-amber-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Play size={18} className="sm:w-5 sm:h-5" /> View Our Work
            </button>
          </div>
          <div className="mt-10 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-1 sm:gap-2"> 100+ Creatives/Month</div>
            <div className="flex items-center gap-1 sm:gap-2"> Performance-Based</div>
            <div className="flex items-center gap-1 sm:gap-2"> Former Brand Operators</div>
            <div className="flex items-center gap-1 sm:gap-2"> No Long-Term Contracts</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;