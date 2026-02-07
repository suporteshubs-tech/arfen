import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { portfolioCategories } from '../../data/servicesData';

export default function PortfolioPreview() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Nosso <span className="text-gradient-cyan">Portfólio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore nossos trabalhos e veja a qualidade premium que entregamos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {portfolioCategories.map((category, index) => (
            <Link
              key={index}
              to="/portfolio"
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover-lift ${
                category.featured ? 'md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[400px]' : 'min-h-[180px] md:min-h-[200px]'
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030306] via-[#030306]/60 to-transparent group-hover:via-[#030306]/40 transition-all duration-500" />

              {category.featured && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full">
                    Destaque
                  </span>
                </div>
              )}

              {category.hasPlay && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="text-white ml-1" size={28} fill="white" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="w-10 h-10 glassmorphism rounded-xl flex items-center justify-center mb-3">
                      <category.icon className="text-cyan-400" size={20} />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">{category.name}</h4>
                    <p className="text-cyan-400 text-sm font-semibold">{category.count} trabalhos</p>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="text-white" size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-bold rounded-full hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 btn-shimmer"
          >
            Ver Portfólio Completo
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
