import { useState } from 'react';
import { Star, Play, Quote, MessageSquare, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

type TestimonialCategory = 'Todos' | 'Depoimentos Texto' | 'Depoimentos de Páginas' | 'Depoimentos de Vídeo';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role?: string;
  text: string;
  rating: number;
  image: string;
  category: TestimonialCategory;
}

interface VideoTestimonial {
  id: number;
  name: string;
  title: string;
  thumbnail: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: 'Carlos Silva', company: 'Tech Solutions', text: 'Trabalho incrível! A equipe da Arfen transformou completamente a presença digital da minha empresa. Resultados surpreendentes!', rating: 5, image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 2, name: 'Maria Santos', company: 'Beauty Store', text: 'Profissionais excepcionais. Os resultados superaram todas as minhas expectativas. Super recomendo!', rating: 5, image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 3, name: 'João Oliveira', company: 'Food Delivery', text: 'A melhor decisão que tomei foi contratar a Arfen. Meu faturamento dobrou em 3 meses!', rating: 5, image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 4, name: 'Ana Beatriz', company: 'Fashion Brand', text: 'Design impecável e atendimento de primeira. A identidade visual ficou perfeita!', rating: 5, image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 5, name: 'Pedro Henrique', company: 'Startup Tech', text: 'Entrega rápida e qualidade premium. Muito satisfeito com o resultado do nosso site.', rating: 5, image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 6, name: 'Fernanda Lima', company: 'Consultoria RH', text: 'Profissionalismo do início ao fim. A landing page converteu muito acima da média!', rating: 5, image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 7, name: 'Ricardo Mendes', company: 'Imobiliária Prime', text: 'Os banners para redes sociais aumentaram nosso engajamento em 300%. Incrível!', rating: 5, image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 8, name: 'Camila Rocha', company: 'E-commerce Fashion', text: 'A identidade visual da minha marca ficou linda. Recebi muitos elogios dos clientes!', rating: 5, image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 9, name: 'Lucas Ferreira', company: 'Academia Fitness', text: 'Os vídeos promocionais ficaram sensacionais. Aumentou muito o interesse pela academia!', rating: 5, image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 10, name: 'Juliana Costa', company: 'Clínica Estética', text: 'Trabalho impecável! A equipe entendeu exatamente o que eu precisava.', rating: 5, image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 11, name: 'Thiago Martins', company: 'Agência de Viagens', text: 'Os materiais gráficos elevaram o nível da nossa comunicação. Excelente trabalho!', rating: 5, image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 12, name: 'Patrícia Alves', company: 'Loja de Decoração', text: 'O catálogo digital ficou lindo! As fotos dos produtos ficaram profissionais.', rating: 5, image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos Texto' },
  { id: 13, name: 'Eduardo Santos', company: 'Tech Company', role: 'CEO', text: 'O site institucional superou todas as expectativas. Design moderno e funcional.', rating: 5, image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos de Páginas' },
  { id: 14, name: 'Larissa Menezes', company: 'E-commerce Plus', role: 'Diretora', text: 'A loja virtual ficou perfeita. As conversões aumentaram 150% após o lançamento.', rating: 5, image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos de Páginas' },
  { id: 15, name: 'Bruno Costa', company: 'Startup Digital', role: 'Fundador', text: 'Landing page incrível! Taxa de conversão muito acima da média do mercado.', rating: 5, image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos de Páginas' },
  { id: 16, name: 'Amanda Ribeiro', company: 'Consultoria Business', role: 'Sócia', text: 'O portal corporativo ficou elegante e profissional. Nossos clientes adoraram!', rating: 5, image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos de Páginas' },
  { id: 17, name: 'Rafael Gomes', company: 'Marketing Agency', role: 'Diretor', text: 'Site responsivo impecável. Funciona perfeitamente em todos os dispositivos.', rating: 5, image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos de Páginas' },
  { id: 18, name: 'Carolina Lima', company: 'Health Clinic', role: 'Gestora', text: 'O sistema de agendamento online integrado ao site facilitou muito nossa operação.', rating: 5, image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150', category: 'Depoimentos de Páginas' },
];

const videoTestimonials: VideoTestimonial[] = [
  { id: 201, name: 'Roberto Almeida', title: 'Reels - Criador de Agosto', thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 202, name: 'Daniela Torres', title: 'Video Edit - Depoimento', thumbnail: 'https://images.pexels.com/photos/7991482/pexels-photo-7991482.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 203, name: 'Felipe Souza', title: 'Photonix - Video Momento', thumbnail: 'https://images.pexels.com/photos/7991663/pexels-photo-7991663.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 204, name: 'Mariana Castro', title: 'Photonix - Webinar Result', thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const categories: TestimonialCategory[] = ['Todos', 'Depoimentos Texto', 'Depoimentos de Páginas', 'Depoimentos de Vídeo'];

export default function Depoimentos() {
  const [activeCategory, setActiveCategory] = useState<TestimonialCategory>('Todos');

  const filteredTestimonials = activeCategory === 'Todos'
    ? testimonials
    : activeCategory === 'Depoimentos de Vídeo'
    ? []
    : testimonials.filter(t => t.category === activeCategory);

  const showVideoSection = activeCategory === 'Todos' || activeCategory === 'Depoimentos de Vídeo';

  return (
    <div className="min-h-screen bg-[#030306] pt-28 pb-20">
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 glassmorphism rounded-full mb-8">
            <Star className="text-cyan-400" size={18} />
            <span className="text-gray-300 text-sm font-medium">O que dizem sobre nós</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            <span className="text-gradient-cyan">Depoimentos</span> de Clientes
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Veja o que nossos clientes têm a dizer sobre nosso trabalho e resultados.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/30'
                  : 'glassmorphism text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {activeCategory !== 'Depoimentos de Vídeo' && filteredTestimonials.filter(t => t.category === 'Depoimentos Texto' || activeCategory === 'Todos').length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                <MessageSquare className="text-cyan-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Depoimentos em Texto</h2>
                <p className="text-gray-500 text-sm">Feedback real de clientes satisfeitos</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(activeCategory === 'Todos' ? testimonials.filter(t => t.category === 'Depoimentos Texto') : filteredTestimonials.filter(t => t.category === 'Depoimentos Texto')).map((testimonial) => (
                <div
                  key={testimonial.id}
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
                      <p className="text-gray-500 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeCategory !== 'Depoimentos de Vídeo' && (activeCategory === 'Todos' || activeCategory === 'Depoimentos de Páginas') && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                <Star className="text-cyan-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Depoimentos de Páginas</h2>
                <p className="text-gray-500 text-sm">Clientes que aprovaram seus projetos web</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.filter(t => t.category === 'Depoimentos de Páginas').map((testimonial) => (
                <div
                  key={testimonial.id}
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
                      <p className="text-cyan-400 text-xs font-medium">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showVideoSection && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                <Play className="text-cyan-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Depoimentos em Video</h2>
                <p className="text-gray-500 text-sm">Veja o que nossos clientes tem a dizer</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoTestimonials.map((video) => (
                <div
                  key={video.id}
                  className="group relative glassmorphism rounded-2xl overflow-hidden hover-lift cursor-pointer"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                      <Play className="text-white ml-1" size={28} fill="white" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-white font-bold text-sm">{video.name}</p>
                    <p className="text-gray-500 text-xs">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-cyan-500 to-cyan-400" />
            <div className="absolute inset-0 dot-pattern opacity-10" />

            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float-reverse" />

            <div className="relative px-8 py-16 md:py-20 text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
                <Sparkles className="text-white" size={18} />
                <span className="text-white text-sm font-medium">Junte-se aos nossos clientes</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                Pronto para transformar
                <br />seu negocio?
              </h2>
              <p className="text-white/90 max-w-xl mx-auto mb-10 text-lg">
                Junte-se aos nossos clientes satisfeitos e alcance resultados incriveis.
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-bold rounded-full hover:bg-white/95 transition-all shadow-2xl shadow-black/20 hover:scale-105 text-lg"
              >
                Fale Conosco Agora
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
