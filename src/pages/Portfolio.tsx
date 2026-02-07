import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Sparkles, Layers } from 'lucide-react';

type Category = 'Tudo' | 'Designs' | 'Capas de Livros' | 'Logotipos' | 'Banners';

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  isVideo?: boolean;
  videoUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, title: 'Velve - Especificacoes Produto', category: 'Designs', image: '/portfolio-images/art1.webp' },
  { id: 2, title: 'Mango Energy - Design Produto', category: 'Designs', image: '/portfolio-images/art2.png' },
  { id: 3, title: 'Starbucks - Social Media', category: 'Designs', image: '/portfolio-images/art3.png' },
  { id: 4, title: 'Heineken - Arte Publicitaria', category: 'Designs', image: '/portfolio-images/art4.png' },
  { id: 5, title: 'Carnaval - Design Festivo', category: 'Designs', image: '/portfolio-images/art5.png' },
  { id: 6, title: 'Barbearia - Social Media', category: 'Designs', image: '/portfolio-images/art6.png' },
  { id: 7, title: 'Gardens Fusion - Evento Cafe', category: 'Designs', image: '/portfolio-images/art7.png' },
  { id: 8, title: 'Arfen - Design Conceito', category: 'Designs', image: '/portfolio-images/art8.png' },
  { id: 10, title: 'Gardens Fusion - Tropical', category: 'Designs', image: '/portfolio-images/art10.png' },
  { id: 11, title: 'Design Premium', category: 'Designs', image: '/portfolio-images/art11.jpg' },
  { id: 12, title: 'Design Criativo', category: 'Designs', image: '/portfolio-images/art12.jpg' },
  { id: 13, title: 'Arte Visual', category: 'Designs', image: '/portfolio-images/art13.jpg' },
  { id: 14, title: 'Design Moderno', category: 'Designs', image: '/portfolio-images/art14.jpg' },
  { id: 15, title: 'Arte Conceitual', category: 'Designs', image: '/portfolio-images/art15.jpg' },
  { id: 16, title: 'Porsche 911 GT3 RS - O Grego', category: 'Designs', image: '/portfolio-images/in16.jpg' },
  { id: 17, title: 'Design Exclusivo', category: 'Designs', image: '/portfolio-images/art16.jpg' },
  { id: 18, title: 'Arte Contemporanea', category: 'Designs', image: '/portfolio-images/art17.jpg' },
  { id: 19, title: 'Design Inovador', category: 'Designs', image: '/portfolio-images/art18.jpg' },
  { id: 20, title: 'Arte Digital', category: 'Designs', image: '/portfolio-images/art19.png' },
  { id: 21, title: 'Interior Design 1', category: 'Designs', image: '/portfolio-images/in8.jpg' },
  { id: 22, title: 'Interior Design 2', category: 'Designs', image: '/portfolio-images/in9.jpg' },
  { id: 23, title: 'Interior Design 3', category: 'Designs', image: '/portfolio-images/in10.jpg' },
  { id: 24, title: 'Interior Design 4', category: 'Designs', image: '/portfolio-images/in11.jpg' },
  { id: 25, title: 'Interior Design 5', category: 'Designs', image: '/portfolio-images/in12.jpg' },
  { id: 26, title: 'Interior Design 6', category: 'Designs', image: '/portfolio-images/in13.jpg' },
  { id: 27, title: 'Interior Design 7', category: 'Designs', image: '/portfolio-images/in14.jpg' },
  { id: 28, title: 'Interior Design 8', category: 'Designs', image: '/portfolio-images/in17.jpg' },
  { id: 29, title: 'Interior Design 9', category: 'Designs', image: '/portfolio-images/in18.jpg' },
  { id: 30, title: 'Interior Design 10', category: 'Designs', image: '/portfolio-images/in20.jpg' },
  { id: 31, title: 'Interior Design 11', category: 'Designs', image: '/portfolio-images/in21.jpg' },
  { id: 32, title: 'Interior Design 12', category: 'Designs', image: '/portfolio-images/in22.jpg' },
  { id: 33, title: 'Interior Design 13', category: 'Designs', image: '/portfolio-images/in23.jpg' },
  { id: 34, title: 'Interior Design 14', category: 'Designs', image: '/portfolio-images/in24.webp' },
  { id: 35, title: 'Design Criativo 1', category: 'Designs', image: '/portfolio-images/in29.png' },
  { id: 36, title: 'Design Criativo 2', category: 'Designs', image: '/portfolio-images/in30.png' },
  { id: 37, title: 'Design Criativo 3', category: 'Designs', image: '/portfolio-images/in31.png' },
  { id: 38, title: 'Design Criativo 4', category: 'Designs', image: '/portfolio-images/in32.png' },
  { id: 39, title: 'Design Criativo 5', category: 'Designs', image: '/portfolio-images/in33.png' },
  { id: 41, title: 'Design Criativo 7', category: 'Designs', image: '/portfolio-images/in35.png' },
  { id: 42, title: 'Design Criativo 8', category: 'Designs', image: '/portfolio-images/in36.jpg' },
  { id: 43, title: 'SaaS Marketplace - Visibilidade Critica', category: 'Designs', image: '/portfolio-images/in37.png' },
  { id: 44, title: 'Design Criativo 10', category: 'Designs', image: '/portfolio-images/in38.png' },
  { id: 60, title: 'Design Criativo 11', category: 'Designs', image: '/portfolio-images/in40.png' },
  { id: 61, title: 'Hair Studio - Marketing Digital', category: 'Designs', image: '/portfolio-images/in34.png' },
  { id: 45, title: 'Capa de Livro 1', category: 'Capas de Livros', image: '/portfolio-images/v14.png' },
  { id: 46, title: 'Capa de Livro 2', category: 'Capas de Livros', image: '/portfolio-images/capa2.png' },
  { id: 47, title: 'Capa de Livro 3', category: 'Capas de Livros', image: '/portfolio-images/capa3.png' },
  { id: 48, title: 'Capa de Livro 4', category: 'Capas de Livros', image: '/portfolio-images/v1.webp' },
  { id: 49, title: 'Capa de Livro 5', category: 'Capas de Livros', image: '/portfolio-images/v2.png' },
  { id: 50, title: 'Capa de Livro 6', category: 'Capas de Livros', image: '/portfolio-images/v3.png' },
  { id: 51, title: 'Capa de Livro 7', category: 'Capas de Livros', image: '/portfolio-images/v4.png' },
  { id: 52, title: 'Capa de Livro 8', category: 'Capas de Livros', image: '/portfolio-images/v5.png' },
  { id: 53, title: 'Capa de Livro 9', category: 'Capas de Livros', image: '/portfolio-images/v6.png' },
  { id: 54, title: 'Capa de Livro 10', category: 'Capas de Livros', image: '/portfolio-images/v7.png' },
  { id: 55, title: 'Capa de Livro 11', category: 'Capas de Livros', image: '/portfolio-images/v8.png' },
  { id: 56, title: 'Capa de Livro 12', category: 'Capas de Livros', image: '/portfolio-images/v9.png' },
  { id: 57, title: 'Capa de Livro 13', category: 'Capas de Livros', image: '/portfolio-images/v10.png' },
  { id: 58, title: 'Capa de Livro 14', category: 'Capas de Livros', image: '/portfolio-images/v11.png' },
  { id: 59, title: 'Nao Era Humana - Rud Gregorio', category: 'Capas de Livros', image: '/portfolio-images/proximo_9.png' },
  { id: 62, title: '30 Dias Sem Reclamar - Camili Gregorio', category: 'Capas de Livros', image: '/portfolio-images/v15.png' },
  { id: 63, title: '30 Dias Sem Reclamar - Variacao', category: 'Capas de Livros', image: '/portfolio-images/v16.png' },
  { id: 81, title: 'Capa de Livro 15', category: 'Capas de Livros', image: '/portfolio-images/proximo_16.jpeg' },
  { id: 64, title: 'Logotipo 1', category: 'Logotipos', image: '/portfolio-images/l1.jpg' },
  { id: 65, title: 'Logotipo 2', category: 'Logotipos', image: '/portfolio-images/l2.jpg' },
  { id: 66, title: 'Logotipo 3', category: 'Logotipos', image: '/portfolio-images/l3.jpg' },
  { id: 67, title: 'Logotipo 4', category: 'Logotipos', image: '/portfolio-images/l4.jpg' },
  { id: 68, title: 'Logotipo 5', category: 'Logotipos', image: '/portfolio-images/l5.jpg' },
  { id: 69, title: 'Logotipo 6', category: 'Logotipos', image: '/portfolio-images/l6.jpg' },
  { id: 70, title: 'Logotipo 7', category: 'Logotipos', image: '/portfolio-images/l7.jpg' },
  { id: 71, title: 'Logotipo 8', category: 'Logotipos', image: '/portfolio-images/l8.jpg' },
  { id: 72, title: 'Logotipo 9', category: 'Logotipos', image: '/portfolio-images/l9.jpg' },
  { id: 73, title: 'Logotipo 10', category: 'Logotipos', image: '/portfolio-images/l10.webp' },
  { id: 74, title: 'Logotipo 11', category: 'Logotipos', image: '/portfolio-images/l11.webp' },
  { id: 75, title: 'Logotipo 12', category: 'Logotipos', image: '/portfolio-images/l12.webp' },
  { id: 76, title: 'Logotipo 13', category: 'Logotipos', image: '/portfolio-images/l13.webp' },
  { id: 77, title: 'Logotipo 14', category: 'Logotipos', image: '/portfolio-images/l14.png' },
  { id: 78, title: 'Logotipo 15', category: 'Logotipos', image: '/portfolio-images/l15.png' },
  { id: 79, title: 'Logotipo 16', category: 'Logotipos', image: '/portfolio-images/l16.png' },
  { id: 80, title: 'Logotipo 17', category: 'Logotipos', image: '/portfolio-images/l17.jpg' },
  { id: 82, title: 'FlyTec - Servicos Aeronauticos', category: 'Banners', image: '/portfolio-images/image-1770408808283.png' },
  { id: 83, title: 'FlyTec - Logo Variacao', category: 'Banners', image: '/portfolio-images/image-1770409692578.png' },
];

const categories: Category[] = ['Tudo', 'Designs', 'Capas de Livros', 'Logotipos', 'Banners'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('Tudo');

  const filteredItems = activeCategory === 'Tudo'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#030306] pt-28 pb-20">
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 glassmorphism rounded-full mb-8">
            <Layers className="text-cyan-400" size={18} />
            <span className="text-gray-300 text-sm font-medium">Explore Nossos Trabalhos</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Nosso <span className="text-gradient-cyan">Portfólio</span> Completo
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-300 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore nossos projetos que transformaram marcas e alcancaram resultados incriveis.
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

        {filteredItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/portfolio/${item.id}`}
                className="group relative glassmorphism rounded-2xl overflow-hidden hover-lift cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030306] via-[#030306]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5 w-full">
                    <p className="text-white font-bold text-sm truncate mb-1">{item.title}</p>
                    <p className="text-cyan-400 text-xs font-medium">{item.category}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink className="text-white" size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-cyan-500 to-cyan-400" />
            <div className="absolute inset-0 dot-pattern opacity-10" />

            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float-reverse" />

            <div className="relative px-8 py-16 md:py-20 text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
                <Sparkles className="text-white" size={18} />
                <span className="text-white text-sm font-medium">Projeto Exclusivo</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                Quer um trabalho exclusivo
                <br />para sua empresa?
              </h2>
              <p className="text-white/90 max-w-xl mx-auto mb-10 text-lg">
                Entre em contato e vamos criar algo incrível juntos.
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-bold rounded-full hover:bg-white/95 transition-all shadow-2xl shadow-black/20 hover:scale-105 text-lg"
              >
                Solicitar Orçamento
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
