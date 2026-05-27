import React, { useState, useEffect, useRef } from 'react';

const WhatWeBuild = () => {
  const videoRefs = useRef({});
  const [hoveredVideo, setHoveredVideo] = useState(null);

  // Alternating images and videos
  const items = [
    {
      type: "image",
      title: "Afnan 9PM",
      desc: "Sweet. Bold. Attention-grabbing",
      image: "/images/perfume/I1.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Afnan+9PM",
      alt: "Afnan 9PM Perfume"
    },
    {
      type: "video",
      title: "Fragrance Layering",
      desc: "Watch how we layer scents",
      videoUrl: "/videos/P1.mp4",
      alt: "Fragrance layering video"
    },
    {
      type: "image",
      title: "9PM + Montblanc",
      desc: "Woodier. More mature",
      image: "/images/perfume/I11.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Montblanc+Explorer",
      alt: "Montblanc Explorer Layering"
    },
    {
      type: "video",
      title: "Scent Experience",
      desc: "Immersive fragrance journey",
      videoUrl: "/videos/P7.mp4",
      alt: "Scent experience video"
    },
    {
      type: "image",
      title: "Signature Shape",
      desc: "Same fragrance, different personality",
      image: "/images/perfume/I9.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Signature+Shape",
      alt: "Fragrance Collection"
    },
    {
      type: "video",
      title: "Perfume Crafting",
      desc: "Behind the scenes",
      videoUrl: "/videos/P6.mp4",
      alt: "Perfume crafting video"
    },
    {
      type: "image",
      title: "Montale Starry Nights",
      desc: "Luxury Night Fragrance",
      image: "/images/perfume/I5.jpg",
      fallback: "https://via.placeholder.com/320x320?text=Montale+Starry+Nights",
      alt: "Montale Starry Nights"
    },
    {
      type: "video",
      title: "Fragrance Review",
      desc: "Expert insights",
      videoUrl: "/videos/P4.mp4",
      alt: "Fragrance review video"
    },
    {
      type: "image",
      title: "The Masked Perfumer",
      desc: "Spray | Slay | Stay Mysterious",
      image: "/images/perfume/I3.jpg",
      fallback: "https://via.placeholder.com/320x320?text=The+Masked+Perfumer",
      alt: "The Masked Perfumer Collection"
    },
    {
      type: "video",
      title: "Luna Collection",
      desc: "Premium fragrances",
      videoUrl: "/videos/P5.mp4",
      alt: "Luna Perfumes video"
    }
  ];

  // Duplicate for infinite scroll (3x for seamless loop)
  const allItems = [...items, ...items, ...items];

  // Auto-play all videos when component mounts
  useEffect(() => {
    // Play all videos automatically
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.play().catch(error => {
          // Autoplay was prevented, will play on user interaction
          console.log('Autoplay prevented:', error);
        });
      }
    });
  }, []);

  // Handle video visibility (play when visible, pause when hidden)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(e => console.log('Play error:', e));
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.5 });

    Object.values(videoRefs.current).forEach(video => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

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
              className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[320px] flex-shrink-0 group"
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-gray-900 to-gray-800">
                
                {/* Video or Image Content */}
                {item.type === 'video' ? (
                  <video
                    ref={el => videoRefs.current[idx] = el}
                    src={item.videoUrl}
                    className="w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[320px] object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                ) : (
                  <img 
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[320px] object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = item.fallback;
                    }}
                  />
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
                
                {/* Video Badge */}
                {item.type === 'video' && (
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-amber-500 flex items-center gap-1 z-10">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    <span>Video</span>
                  </div>
                )}
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 z-10">
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