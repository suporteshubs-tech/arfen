import { Award, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[450px]">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Equipe Arfen"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030306] via-[#030306]/90 to-[#030306]/50" />

          <div className="absolute top-6 right-6">
            <div className="glassmorphism-strong px-5 py-3 rounded-full flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white text-sm font-semibold">100+ Clientes Satisfeitos</span>
            </div>
          </div>

          <div className="relative h-full min-h-[450px] flex items-center">
            <div className="px-10 md:px-16 max-w-2xl py-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 glassmorphism rounded-full mb-6">
                <Award className="text-cyan-400" size={16} />
                <span className="text-gray-300 text-sm">Referência em Qualidade</span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Sua Empresa Merece Ser Vista Como a{' '}
                <span className="text-gradient-cyan">Líder</span> do Mercado
              </h3>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Descubra como podemos transformar sua presença digital e posicionar sua marca no topo do seu segmento.
              </p>
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-bold rounded-full hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 btn-shimmer"
              >
                Fale com um Especialista
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-cyan-500 to-transparent" />
          <div className="absolute top-0 right-0 w-1/4 h-1 bg-gradient-to-l from-cyan-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
