import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Youtube, TrendingUp, Image, Video, ArrowRight, ExternalLink } from 'lucide-react';

const Training = () => {
  const navigate = useNavigate();

  const trainings = [
    {
      title: "Understand our creative strategy",
      description: "on a macro level",
      icon: TrendingUp,
      iconColor: "text-blue-500",
      type: "Guide",
      action: "book"
    },
    {
      title: "Static ads masterclass",
      description: "Learn the fundamentals",
      icon: Image,
      iconColor: "text-green-500",
      type: "Masterclass",
      action: "book"
    },
    {
      title: "Video ads masterclass",
      description: "Master video creative",
      icon: Video,
      iconColor: "text-purple-500",
      type: "Masterclass",
      action: "book"
    }
  ];

  const handleTrainingClick = (training) => {
    if (training.action === 'watch' && training.link) {
      window.open(training.link, '_blank');
    } else {
      navigate('/booking');
    }
  };

  return (
    <section id="training" className="py-24 bg-white/5 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 reveal">
            Free <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Trainings.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto reveal">
            We give away the strategy. Execution is what separates the operators from the audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainings.map((training, index) => {
            const Icon = training.icon;
            return (
              <div 
                key={index} 
                onClick={() => handleTrainingClick(training)}
                className="bg-black/50 p-6 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  <Icon className={`w-12 h-12 ${training.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider text-amber-500 font-semibold">{training.type}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-amber-500 transition-colors">
                  {training.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{training.description}</p>
                <div className="flex items-center gap-2 text-sm text-amber-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span>{training.action === 'watch' ? 'Watch Now' : 'Get Access'}</span>
                  {training.action === 'watch' ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Training;