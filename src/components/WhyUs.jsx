import React from 'react';

const WhyUs = () => {
  const typicalAgency = [
    "Charges a flat retainer whether the ads work or not",
    "Delivers less total output",
    "Focus on design & aesthetics",
    "No iteration system (every new batch starts from scratch)",
    "You're still managing the creative process yourself"
  ];

  const crtvdon = [
    "Performance based pay",
    "100+ creatives / month across every format and funnel stage",
    "Strategists & team members are former brand owners (not linkedin talent…)",
    "Documented testing system that compounds learnings over time",
    "You never brief, manage, or review a single creative again"
  ];

  return (
    <section className="py-24 bg-white/5 border-t border-white/10">
      <div className="container-custom">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Why CRTVDON Over Everyone Else?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 reveal">
            <h3 className="text-2xl font-bold mb-6 text-red-400">The Typical Creative Agency:</h3>
            <ul className="space-y-3">
              {typicalAgency.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-400 text-xl">✕</span>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 reveal">
            <h3 className="text-2xl font-bold mb-6 text-amber-400">CRTVDON:</h3>
            <ul className="space-y-3">
              {crtvdon.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;