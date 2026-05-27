import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 reveal">
            Your Ad Account Needs{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">More Winners.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 reveal">
            We Build Them. If you're spending $100,000/month on paid ads and your biggest bottleneck is creative volume, quality, or both we should talk. We'll build your entire creative engine, staff it with operators who've been in your seat, and tie our compensation directly to performance.
          </p>
          <button onClick={() => navigate('/booking')} className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg reveal">
            Book a Consultation 
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;