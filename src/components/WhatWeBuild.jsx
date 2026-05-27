import React, { useState, useEffect } from 'react';

const WhatWeBuild = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const items = [
    {
      title: "Afnan 9PM",
      desc: "Sweet. Bold. Attention-grabbing",
      image: "/images/perfume/I13.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Afnan+9PM",
      alt: "Afnan 9PM Perfume"
    },
    {
      title: "9PM + Bvlgari",
      desc: "Darker. Warmer. More intense",
      image: "/images/perfume/I12.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Bvlgari+Man+In+Black",
      alt: "Bvlgari Man In Black Layering"
    },
    {
      title: "9PM + Montblanc",
      desc: "Woodier. More mature",
      image: "/images/perfume/I11.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Montblanc+Explorer",
      alt: "Montblanc Explorer Layering"
    },
    {
      title: "9PM + Bleu de Chanel",
      desc: "Cleaner. Smoother. More polished",
      image: "/images/perfume/I10.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Bleu+de+Chanel",
      alt: "Bleu de Chanel Layering"
    },
    {
      title: "Signature Shape",
      desc: "Same fragrance, different personality",
      image: "/images/perfume/I9.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Signature+Shape",
      alt: "Fragrance Collection"
    },
    {
      title: "Jean Paul Gaultier",
      desc: "Divine Eau de Parfum",
      image: "/images/perfume/I6.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Jean+Paul+Gaultier",
      alt: "Jean Paul Gaultier Divine"
    },
    {
      title: "Montale Starry Nights",
      desc: "Luxury Night Fragrance",
      image: "/images/perfume/I5.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Montale+Starry+Nights",
      alt: "Montale Starry Nights"
    },
    {
      title: "Mind Games",
      desc: "J'Adoube Pomegranate Suede",
      image: "/images/perfume/I2.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Mind+Games",
      alt: "Mind Games J'Adoube"
    },
    {
      title: "The Masked Perfumer",
      desc: "Spray | Slay | Stay Mysterious",
      image: "/images/perfume/I14.jpg",
      fallback: "https://via.placeholder.com/320x320?text=The+Masked+Perfumer",
      alt: "The Masked Perfumer Collection"
    },
    {
      title: "Luna Perfumes",
      desc: "Premium Fragrance Collection",
      image: "/images/perfume/I7.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Luna+Perfumes",
      alt: "Luna Perfumes Collection"
    }
  ];

  const allItems = [...items, ...items, ...items];

  return (
    <section id="work" className="py-12 sm:py-16 md:py-20 overflow-hidden border-t border-white/10">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter reveal">
          What we'll <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">build</span> for you.
        </h2>
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base px-2 reveal">
          A look into some image ads & video ads we've made for premium fragrance brands...
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="slider-track flex gap-3 sm:gap-4 md:gap-6">
          {allItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[320px] flex-shrink-0 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-gray-900 to-gray-800">
                <img 
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[320px] object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = item.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                  <p className="text-white font-semibold text-sm sm:text-base md:text-lg">{item.title}</p>
                  <p className="text-gray-300 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
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

        @media (max-width: 640px) {
          .slider-track {
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeBuild;