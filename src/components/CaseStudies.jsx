import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      number: "#1",
      story: "We started like normal testing TONS of static volume... to be honest.. we COULD NOT find a winner. We took the SEMI decent learnings from our static testing & their historical learnings document & made a round of ugc.... first round.. we got THIS.",
      result: "$100k+ Spend on ONE ad",
      metrics: ["$5 reduction in cost per acquisition", "#1 ad in the ad account in 60 days"]
    },
    {
      number: "#2",
      story: "We came into a brand & noticed they had a much higher ROAS with male customers... but NONE of their ads were speaking to men & the male demo was pulling VERY little adspend. So we made ads for men.",
      result: "25% ROAS increase, 35% Spend increase",
      metrics: ["25% Higher ROAS", "35% Revenue increase"]
    },
    {
      number: "#3",
      story: "In 2023 we were young, fresh into the game, and a boutique agency working with VERY few clients. We onboarded a European brand & handled EVERYTHING (ads, email, sms, sourcing, LP's, etc.) and made it our own. we onboarded them at $30k/mo, and 6 months later we hit a $1m/mo.",
      result: "$30k/mo to $1m/mo in 6 months.",
      metrics: ["3,233% Revenue Growth", "6 Month Timeline"]
    }
  ];

  return (
    <section id="results" className="py-24 bg-white/5 border-t border-white/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 reveal">
            The results{' '}
            <span className="gold-text">speak for themselves.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto reveal">
            We've built creative engines for DTC brands across CPG, apparel, and supplements — and the numbers don't lie.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-black/50 rounded-2xl border border-white/10 p-8 hover:border-amber-500/50 transition-all duration-300 reveal">
              <h3 className="text-3xl font-bold gold-text/20 mb-6">Case Study {study.number}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-300">The Story:</h4>
                  <p className="text-gray-400 leading-relaxed mb-6">{study.story}</p>
                  <h4 className="text-lg font-semibold mb-3 text-gray-300">The Result:</h4>
                  <p className="text-2xl font-bold gold-text">{study.result}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-300">After CRTVDON:</h4>
                  <ul className="space-y-3">
                    {study.metrics.map((metric, i) => (
                      <li key={i} className="text-gray-400 flex items-center gap-2">
                        <span className="text-amber-500">✓</span> {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;