import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const Process = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Systematic Testing",
      description: "We use high volume static testing & a structured learnings document to establish personas, angles, hooks, headlines, and creative types.",
      videoUrl: "/videos/systematic.mp4",
      videoTitle: "Systematic Testing Process"
    },
    {
      number: "02",
      title: "Creative Diversity",
      description: "Once we understand your brand & what works inside your ad account, we add diversity. We make longer form VSL's as well as UGC content.",
      videoUrl: "/videos/creative.mp4",
      videoTitle: "Creative Diversity in Action"
    },
    {
      number: "03",
      title: "Informed Volume",
      description: "Once we have a very established learnings document, and consistent winners, we deploy VOLUME. More statics, More UGC, more VSL's, as well as Founder led content, AI videos, and street interview / podcast ads (if necessary). This is the step that allows us to scale spend WITHOUT sacrificing CAC.",
      videoUrl: "/videos/informed.mp4",
      videoTitle: "Informed Volume Strategy"
    }
  ];

  return (
    <>
      <section id="process" className="py-24 bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 reveal">
              Our simple 3 step process to{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">CONSISTENTLY scale</span>
            </h2>
            <p className="text-xl text-gray-400 reveal">your spend with a stable CAC.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-black/50 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 overflow-hidden reveal">
                {/* Video Player Directly in Container */}
                <div 
                  onClick={() => setActiveVideo(step)}
                  className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer group"
                >
                  <video 
                    src={step.videoUrl}
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
                      <Play className="w-7 h-7 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="text-5xl font-bold text-amber-500/20 mb-3">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-14 right-0 text-white hover:text-amber-500 transition-colors duration-300 flex items-center gap-2"
            >
              <X size={28} />
              <span className="text-sm">Close</span>
            </button>
            
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
              <video
                src={activeVideo.videoUrl}
                className="w-full h-full"
                controls
                autoPlay
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-white font-bold text-xl">{activeVideo.title}</p>
              <p className="text-gray-400 mt-2">
                {activeVideo.description.substring(0, 100)}...
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Process;