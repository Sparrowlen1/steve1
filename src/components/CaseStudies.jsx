import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      number: "#1",
      story: "We started like normal testing TONS of static volume, to be honest we could not find a winner. We took the semi decent learnings from our static testing & their historical learnings document & made a round of ugc.... first round.. we got this.",
      result: "$100,000+ Spend on one ad",
      metrics: ["$5,000 reduction in cost per acquisition", "#1 ad in the ad account in 60 days"]
    },
    {
      number: "#2",
      story: "We came into a brand & noticed they had a much higher ROAS (return on ad spend) with male customers but none of their ads were speaking to men & the male demo was pulling very little adspend. So we made ads for men.",
      result: "25% ROAS increase, 35% Spend increase",
      metrics: ["25% Higher ROAS", "35% Revenue increase"]
    },
    {
      number: "#3",
      story: "In 2023 we were young, fresh into the game, and a boutique agency working with very few clients. We onboarded a European brand & handled everything (ads, email, sms, sourcing, LP's, etc.) and made it our own. We onboarded them at $30,000/mo, and 6 months later we hit $1,000,000/mo.",
      result: "$30,000/mo to $1,000,000/mo in 6 months",
      metrics: ["3,233% Revenue Growth", "6 Month Timeline"]
    }
  ];

  return (
    <section id="results" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white/5 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-3 sm:mb-4 reveal">
            The results{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">speak for themselves.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-2 reveal">
            We've built creative engines for DTC brands across CPG, apparel, and supplements and the numbers don't lie.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-black/50 rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 hover:border-amber-500/50 transition-all duration-300 reveal">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-500/20 mb-4 sm:mb-6">Case Study {study.number}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-300">The Story:</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">{study.story}</p>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-300">The Result:</h4>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    {study.result}
                  </p>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-300">After VIREON ADs:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {study.metrics.map((metric, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2 text-sm sm:text-base">
                        <span className="text-amber-500 mt-0.5">✓</span> {metric}
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