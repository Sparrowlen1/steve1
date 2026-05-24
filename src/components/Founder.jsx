import React from 'react';

const Founder = () => {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 reveal">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Meet the <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">founder.</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I've spent 10+ years in the trenches of DTC. Started Dropshipping at 13, Then worked in house at a large brand, then transitioned into a fractional CMO for a few brands… I spent my time sourcing products (in person trips to china), building brands (handling EVERY marketing channel… Tiktok, Meta, Email, content creation, media buying)
                </p>
                <p>
                  I built CRTVDON because I learned what I'm best at. I spent my late teens & early twenties as a generalist in dtc ecom. Now I am a SPECIALIST in direct response marketing through meta. Over the last few years we've narrowed our scope & began working with 8 & 9 figure brands specifically on ad creative.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-bold text-2xl">Jared Robinson</p>
                <p className="text-gray-500">Founder at Don Global Solutions</p>
              </div>
            </div>
            <div className="order-1 md:order-2 reveal">
              <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center border border-amber-500/30 overflow-hidden">
                <img 
                  src="/images/founder.png"
                  alt="Jared Robinson - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;