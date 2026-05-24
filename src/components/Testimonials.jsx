import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Johnny Person",
      brand: "AUG11",
      videoId: "dQw4w9WgXcQ", // Replace with your actual video ID
      quote: "The best creative agency we've ever worked with. Our ROAS doubled in 60 days.",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      id: 2,
      name: "Collin Guillroy",
      brand: "RESTOCK",
      videoId: "9bZkp7q19f0", // Replace with your actual video ID
      quote: "Finally found a team that understands performance creative. They're worth every penny.",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg"
    },
    {
      id: 3,
      name: "Asa Jagger",
      brand: "Saint Potential",
      videoId: "JGwWNGJdvx8", // Replace with your actual video ID
      quote: "Incredible results. They took us from $30k to $1M in 6 months.",
      thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg"
    }
  ];

  return (
    <>
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 reveal">
              Hear it directly from{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">our clients</span>
            </h2>
            <p className="text-xl text-gray-400 reveal">
              Watch real testimonials from brands we've helped scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/5 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 overflow-hidden group reveal">
                {/* Video Thumbnail with Play Button */}
                <div 
                  onClick={() => setSelectedVideo(testimonial)}
                  className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer overflow-hidden"
                >
                  <img 
                    src={testimonial.thumbnail}
                    alt={`${testimonial.name} testimonial`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
                      <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-5xl text-amber-500/20 mb-2 font-serif">"</div>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-sm text-amber-500 font-semibold">{testimonial.brand}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-14 right-0 text-white hover:text-amber-500 transition-colors duration-300 flex items-center gap-2"
            >
              <X size={28} />
              <span className="text-sm">Close</span>
            </button>
            
            {/* Video Player */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={`${selectedVideo.name} testimonial - CRTVDON`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Info */}
            <div className="mt-6 text-center">
              <p className="text-white font-bold text-2xl">{selectedVideo.name}</p>
              <p className="text-amber-500 text-lg font-semibold mt-1">{selectedVideo.brand}</p>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
                {selectedVideo.quote}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add animation styles if not present */}
      <style jsx>{`
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

export default Testimonials;