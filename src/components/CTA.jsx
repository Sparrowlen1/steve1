import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent border-t border-white/10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 reveal">
            Your Ad Account Needs{' '}
            <span className="gold-text">More Winners.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 reveal">
            We Build Them. If you're spending $100K+/month on paid ads and your biggest bottleneck is creative volume, quality, or both… we should talk. We'll build your entire creative engine, staff it with operators who've been in your seat, and tie our compensation directly to performance.
          </p>
          <button onClick={() => navigate('/booking')} className="btn-gold text-lg reveal">
            Book a Consultation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;