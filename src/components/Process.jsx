import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Systematic Testing",
      description: "We use high volume static testing & a structured learnings document to establish personas, angles, hooks, headlines, and creative types."
    },
    {
      number: "02",
      title: "Creative Diversity",
      description: "Once we understand your brand & what works inside your ad account, we add diversity. We make longer form VSL's as well as UGC content."
    },
    {
      number: "03",
      title: "Informed Volume",
      description: "Once we have a very established learnings document, and consistent winners, we deploy VOLUME. More statics, More UGC, more VSL's, as well as Founder led content, AI videos, and street interview / podcast ads (if necessary). This is the step that allows us to scale spend WITHOUT sacrificing CAC."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white/5 border-t border-white/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 reveal">
            Our simple 3 step process to{' '}
            <span className="gold-text">CONSISTENTLY scale</span>
          </h2>
          <p className="text-xl text-gray-400 reveal">your spend with a stable CAC.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-black/50 p-8 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 reveal">
              <div className="text-7xl font-bold gold-text/20 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;