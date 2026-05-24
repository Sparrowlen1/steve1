import React from 'react';

const WhatYouGet = () => {
  const features = [
    {
      title: "Creative Strategy",
      description: "Every creative starts with a direct-response angle, not a \"cool idea.\" Your strategist is a former brand operator who's managed 6-7 figures in ad spend. They know what converts because they've spent the money on their own projects."
    },
    {
      title: "UGC Production",
      description: "We source, brief, and manage creators at scale. You never touch a single creator DM, contract, or revision request."
    },
    {
      title: "Static Ad Design",
      description: "Results-based creatives, testimonial cards, carousels, and proof-driven statics. Each designed for specific funnel stages and tested in multiple variations."
    }
  ];

  return (
    <section id="services" className="py-24 border-t border-white/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 reveal">
            What You Get.
          </h2>
          <p className="text-xl text-gray-400 reveal">A full-stack creative department that plugs directly into your ad account.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 text-center reveal">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-600/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;