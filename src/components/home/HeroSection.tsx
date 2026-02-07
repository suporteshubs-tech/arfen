import { Sparkles, Play, ArrowRight } from 'lucide-react';
import { stats } from '../../data/homeData';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.03] via-transparent to-transparent" />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-400/8 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-400/40 rounded-full animate-float-slow" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-cyan-300/30 rounded-full animate-float-reverse" />
      <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-cyan-500/20 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-float-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-10 w-3 h-3 bg-cyan-400/25 rounded-full animate-float-reverse" style={{ animationDelay: '0.5s' }} />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030306] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 glassmorphism rounded-full mb-10 animate-fade-in">
            <div className="relative">
              <Sparkles className="text-cyan-400" size={18} />
              <div className="absolute inset-0 animate-pulse-ring">
                <Sparkles className="text-cyan-400/50" size={18} />
              </div>
            </div>
            <span className="text-gray-300 text-sm font-medium tracking-wide">Mais de 3 anos transformando empresas em líderes de mercado</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight animate-fade-in-up">
            Eleve Sua Empresa
            <br />
            <span className="relative">
              <span className="text-gradient-animated">
                a Um Novo Nível
              </span>
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-8 rounded-full animate-fade-in" style={{ animationDelay: '0.3s' }} />

          <p className="text-gray-400 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Qualidade premium por um preço que você nunca imaginou.
            <br />
            <span className="text-white font-semibold">
              Transformamos sua presença digital e fazemos você dominar o mercado.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-24 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a
              href="#contato"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-bold rounded-full hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 btn-shimmer text-lg"
            >
              Transformar Minha Empresa
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 glassmorphism-strong text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
            >
              <div className="relative">
                <Play size={20} className="text-cyan-400" fill="currentColor" />
              </div>
              Conhecer Serviços
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative glassmorphism rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-500 card-hover"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <stat.icon className="text-cyan-400/60 mx-auto mb-3" size={24} />
                <div className="text-3xl md:text-4xl font-black text-gradient-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <div className="w-8 h-14 border-2 border-cyan-400/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
