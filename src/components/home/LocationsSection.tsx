import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { locations } from '../../data/servicesData';

export default function LocationsSection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            3 Escritórios Estratégicos
            <br />
            <span className="text-gradient-cyan">Sempre Perto de Você</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Atendimento personalizado e presencial nas principais capitais do Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative glassmorphism rounded-2xl p-8 text-center hover:bg-white/[0.05] transition-all duration-500 hover-lift overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-full animate-pulse" />
                <div className="relative w-full h-full bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-cyan-400" size={28} />
                </div>
                <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-ping opacity-50" />
              </div>

              <h3 className="text-white font-bold text-xl mb-2">{location.city}</h3>
              <p className="text-gray-500 text-sm mb-3">{location.address}</p>
              <p className="text-cyan-400 text-xs font-medium">{location.hours}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-400/20" />
          <div className="absolute inset-0 dot-pattern opacity-20" />

          <div className="relative glassmorphism-strong rounded-2xl p-10 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-4">
                Atendimento Personalizado e Presencial
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Agende uma visita e conheça nossa equipe pessoalmente. Estamos prontos para transformar sua visão em realidade.
              </p>
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-bold rounded-full hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 btn-shimmer"
              >
                Agendar Visita
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
