import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, MapPin, Phone, ArrowUpRight, Sparkles } from 'lucide-react';

const footerLinks = {
  navegacao: [
    { name: 'Home', path: '/' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Depoimentos', path: '/depoimentos' },
    { name: 'Contato', path: '/#contato' },
  ],
  servicos: [
    { name: 'Design Gráfico', path: '/#servicos' },
    { name: 'Marketing Digital', path: '/#servicos' },
    { name: 'Criação de Sites', path: '/#servicos' },
    { name: 'Edição de Vídeos', path: '/#servicos' },
    { name: 'Gestão de Tráfego', path: '/#servicos' },
    { name: 'Social Media', path: '/#servicos' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  { icon: Mail, href: '#', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#030306] border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <Link to="/" className="group inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300">
                  <span className="text-white font-black text-xl">A</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              </div>
              <div>
                <span className="text-white font-bold text-2xl tracking-tight">Arfen</span>
                <span className="text-cyan-400 font-bold text-2xl">.</span>
              </div>
            </Link>

            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              Transformando empresas em líderes de mercado através do design e marketing digital de alta performance.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-12 h-12 glassmorphism rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Navegação</h4>
            <ul className="space-y-4">
              {footerLinks.navegacao.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Serviços</h4>
            <ul className="space-y-4">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Contato</h4>
            <ul className="space-y-5">
              <li>
                <a href="tel:+5511999999999" className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 glassmorphism rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/10 transition-colors">
                    <Phone size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Telefone</p>
                    <p className="text-sm">(11) 99999-9999</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:contato@arfen.com.br" className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <div className="w-10 h-10 glassmorphism rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/10 transition-colors">
                    <Mail size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">E-mail</p>
                    <p className="text-sm">contato@arfen.com.br</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="group flex items-start gap-3 text-gray-400">
                  <div className="w-10 h-10 glassmorphism rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Escritório SP</p>
                    <p className="text-sm">Av. Paulista, 1000 - São Paulo</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="glassmorphism rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Pronto para começar?</h4>
                <p className="text-gray-400 text-sm">Entre em contato e transforme sua empresa.</p>
              </div>
            </div>
            <a
              href="/#contato"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-bold rounded-full hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 btn-shimmer whitespace-nowrap"
            >
              Falar Conosco
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm">
              © 2024 Arfen. Todos os direitos reservados.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                Termos de Uso
              </a>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                Política de Privacidade
              </a>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
