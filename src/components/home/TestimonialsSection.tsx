import { Link } from 'react-router-dom';
import { Star, Quote, CheckCircle2, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/homeData';

export default function TestimonialsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 glassmorphism rounded-full mb-8">
            <Star className="text-cyan-400" size={18} />
            <span className="text-gray-300 text-sm font-medium">Prova Social</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            O Que Nossos Clientes
            <br />
            <span className="text-gradient-cyan">Dizem Sobre Nós</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Resultados reais de empresas que confiaram em nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative glassmorphism rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-500 hover-lift overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <Quote className="absolute top-4 right-4 text-cyan-500/10" size={40} />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.5)]" size={16} />
                ))}
              </div>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed relative z-10">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-500/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-white" size={12} />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-xs">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/depoimentos"
            className="group inline-flex items-center gap-3 px-8 py-4 glassmorphism-strong text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Ver Todos os Depoimentos
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
