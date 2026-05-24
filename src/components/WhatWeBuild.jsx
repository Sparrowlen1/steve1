import React from 'react';

const WhatWeBuild = () => {
  const items = [
    {
      title: "Video Ads",
      desc: "High-converting VSLs",
      image: "https://images.unsplash.com/photo-1536240474400-3d7f2b7b2b2f?w=400&h=300&fit=crop",
      alt: "Video ad creative"
    },
    {
      title: "Static Ads", 
      desc: "Result-based creatives",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
      alt: "Static ad design"
    },
    {
      title: "Carousels",
      desc: "Story-driven formats",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      alt: "Carousel ads"
    },
    {
      title: "UGC Content",
      desc: "Authentic testimonials",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
      alt: "User generated content"
    },
    {
      title: "Founder Led",
      desc: "Brand storytelling",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
      alt: "Founder content"
    },
    {
      title: "Proof Ads",
      desc: "Social proof cards",
      image: "https://images.unsplash.com/photo-1553729459-9e2e6b8b5c7f?w=400&h=300&fit=crop",
      alt: "Proof advertisements"
    },
    {
      title: "AI Videos",
      desc: "Cutting-edge AI",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      alt: "AI generated videos"
    },
    {
      title: "Podcast Ads",
      desc: "Street interviews",
      image: "https://images.unsplash.com/photo-1590602847861-f3572b1d6d8f?w=400&h=300&fit=crop",
      alt: "Podcast advertisements"
    }
  ];

  // Duplicate items for infinite scroll effect
  const allItems = [...items, ...items, ...items];

  return (
    <section id="work" className="py-20 overflow-hidden border-t border-white/10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter reveal">
          What we'll <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">build</span> for you.
        </h2>
        <p className="text-gray-400 mt-4 reveal">
          A look into some image ads & video ads we've made for 7, 8, & 9 figure brands...
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="slider-track flex gap-6">
          {allItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[320px] flex-shrink-0 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-[240px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-lg">{item.title}</p>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider-track {
          display: flex;
          animation: scroll 40s linear infinite;
          width: fit-content;
        }
        
        .slider-track:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
};

export default WhatWeBuild;