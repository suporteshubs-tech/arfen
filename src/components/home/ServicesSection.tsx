import { Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../../data/servicesData';

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 glassmorphism rounded-full mb-8">
            <Zap className="text-cyan-400" size={18} />
            <span className="text-gray-300 text-sm font-medium">Soluções Completas</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Tudo que <span className="text-gradient-cyan">Você Precisa</span>
            <br />
            para Dominar o Mercado
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções completas de marketing digital e design para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glassmorphism rounded-2xl p-8 hover:bg-white/[0.05] transition-all duration-500 hover-lift overflow-hidden"
            >
              {service.popular && (
                <div className="absolute -top-px -right-px">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-2xl">
                    Mais Contratado
                  </div>
                </div>
              )}

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative w-full h-full bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <service.icon className="text-white" size={28} />
                </div>
              </div>

              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.desc}</p>

              <ul className="space-y-3 mb-8">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-gray-400 text-sm">
                    <CheckCircle2 className="text-cyan-500 flex-shrink-0" size={16} />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="group/link inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Saiba mais
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
