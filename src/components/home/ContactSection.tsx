import { Sparkles, Shield, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contato" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-cyan-500 to-cyan-400" />
          <div className="absolute inset-0 dot-pattern opacity-10" />

          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float-reverse" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-2xl animate-float" />

          <div className="relative px-8 py-20 md:py-28 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-10 border border-white/20">
              <Sparkles className="text-white" size={18} />
              <span className="text-white text-sm font-medium">Agenda Limitada - Vagas Abertas</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Pronto para Transformar
              <br />
              seu Negócio?
            </h2>

            <p className="text-white/90 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar resultados extraordinários.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Shield className="text-white" size={18} />
                <span>Satisfação Garantida</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full" />
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="text-white" size={18} />
                <span>Sem Compromisso</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-cyan-600 font-bold rounded-full hover:bg-white/95 transition-all shadow-2xl shadow-black/20 hover:scale-105 text-lg"
              >
                <Phone size={22} />
                Falar pelo WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:contato@arfen.com.br"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all text-lg"
              >
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
