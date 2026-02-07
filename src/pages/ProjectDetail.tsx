import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Star,
  MessageCircle,
  Quote,
  Calendar,
  Tag,
  Clock,
  CheckCircle2,
  Sparkles,
  Share2,
  Heart,
  Eye,
  Palette,
  Layers,
  Zap
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  client: string;
  date: string;
  duration: string;
  description: string;
  services: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
    company: string;
    rating: number;
    avatar: string;
  };
  stats: {
    views: number;
    likes: number;
  };
  relatedProjects: number[];
}

const projects: Record<number, Project> = {
  1: {
    id: 1,
    title: 'Velve - Especificacoes Produto',
    category: 'Designs',
    image: '/portfolio-images/art1.webp',
    client: 'Velve Ferramentas',
    date: 'Janeiro 2025',
    duration: '3 dias',
    description: 'Design profissional de especificacoes tecnicas para produto industrial. Arte criada com foco em clareza visual e comunicacao eficiente das caracteristicas do produto, destacando funcionalidades como encaixe de matrizes e trava para aperto.',
    services: ['Design de Produto', 'Arte Tecnica', 'Comunicacao Visual'],
    testimonial: {
      text: 'O material ficou extremamente profissional e claro. Nossos clientes agora entendem perfeitamente as especificacoes do produto!',
      author: 'Carlos Eduardo',
      role: 'Gerente de Marketing',
      company: 'Velve Ferramentas',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 1850, likes: 142 },
    relatedProjects: [2, 3, 4]
  },
  2: {
    id: 2,
    title: 'Mango Energy - Design Produto',
    category: 'Designs',
    image: '/portfolio-images/art2.png',
    client: 'Mango Energy Drinks',
    date: 'Dezembro 2024',
    duration: '5 dias',
    description: 'Arte publicitaria vibrante para bebida energetica sabor manga. Design que transmite frescor e energia, com composicao dinamica incluindo frutas e splash de liquido para criar impacto visual maximo.',
    services: ['Design Publicitario', 'Arte de Produto', 'Composicao Visual'],
    testimonial: {
      text: 'A arte capturou perfeitamente a essencia refrescante do nosso produto. As vendas aumentaram significativamente!',
      author: 'Patricia Lima',
      role: 'Diretora Criativa',
      company: 'Mango Energy',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 3200, likes: 267 },
    relatedProjects: [1, 3, 5]
  },
  3: {
    id: 3,
    title: 'Starbucks - Social Media',
    category: 'Designs',
    image: '/portfolio-images/art3.png',
    client: 'Projeto Conceitual',
    date: 'Novembro 2024',
    duration: '36 horas',
    description: 'Design conceitual para social media inspirado na estetica Starbucks. Arte elegante apresentando produto com informacoes de tamanho, sabor e calorias em layout sofisticado e profissional.',
    services: ['Social Media Design', 'Arte Conceitual', 'Branding Visual'],
    testimonial: {
      text: 'Trabalho impecavel que demonstra dominio total de branding e design para redes sociais. Qualidade excepcional!',
      author: 'Amanda Costa',
      role: 'Social Media Manager',
      company: 'Studio Criativo',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 4500, likes: 389 },
    relatedProjects: [1, 2, 4]
  },
  4: {
    id: 4,
    title: 'Heineken - Arte Publicitaria',
    category: 'Designs',
    image: '/portfolio-images/art4.png',
    client: 'Projeto Conceitual',
    date: 'Outubro 2024',
    duration: '4 dias',
    description: 'Arte publicitaria conceitual para cerveja premium. Composicao rica com elementos naturais como lupulo e trigo, criando atmosfera sofisticada que ressalta a qualidade e tradicao da marca.',
    services: ['Arte Publicitaria', 'Composicao Fotografica', 'Design Premium'],
    testimonial: {
      text: 'A composicao visual ficou absolutamente impressionante. Captura perfeitamente a essencia de uma marca premium!',
      author: 'Ricardo Mendes',
      role: 'Diretor de Arte',
      company: 'Agencia Premium',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 5100, likes: 412 },
    relatedProjects: [1, 3, 5]
  },
  5: {
    id: 5,
    title: 'Carnaval - Design Festivo',
    category: 'Designs',
    image: '/portfolio-images/art5.png',
    client: 'Evento Cultural',
    date: 'Fevereiro 2025',
    duration: '24 horas',
    description: 'Arte vibrante celebrando o Carnaval brasileiro. Design explosivo com cores tropicais, elementos festivos e tipografia impactante que transmite toda a alegria e energia da maior festa popular do Brasil.',
    services: ['Design Festivo', 'Arte Cultural', 'Tipografia Criativa'],
    testimonial: {
      text: 'A arte conseguiu capturar toda a magia e energia do Carnaval. Ficou simplesmente espetacular!',
      author: 'Juliana Santos',
      role: 'Produtora de Eventos',
      company: 'Carnaval Brasil',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 6200, likes: 534 },
    relatedProjects: [2, 3, 4]
  },
  6: {
    id: 6,
    title: 'Barbearia - Social Media',
    category: 'Designs',
    image: '/portfolio-images/art6.png',
    client: 'Barbearia Premium',
    date: 'Janeiro 2025',
    duration: '2 dias',
    description: 'Design impactante para social media de barbearia. Arte com tipografia forte e elementos visuais que transmitem masculinidade e estilo, incentivando agendamentos para o final de semana.',
    services: ['Social Media Design', 'Tipografia Criativa', 'Marketing Visual'],
    testimonial: {
      text: 'O engajamento nas redes sociais triplicou depois dessa arte! Os clientes adoraram o visual moderno.',
      author: 'Fernando Alves',
      role: 'Proprietario',
      company: 'Barbearia Premium',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 2800, likes: 215 },
    relatedProjects: [7, 8, 9]
  },
  7: {
    id: 7,
    title: 'Gardens Fusion - Evento Cafe',
    category: 'Designs',
    image: '/portfolio-images/art7.png',
    client: 'Gardens Fusion',
    date: 'Junho 2024',
    duration: '4 dias',
    description: 'Flyer elegante para evento de cafe com estetica premium. Design sofisticado com elementos dourados e tipografia refinada, transmitindo a atmosfera exclusiva do evento.',
    services: ['Design de Evento', 'Flyer Promocional', 'Branding Visual'],
    testimonial: {
      text: 'O flyer ficou absolutamente lindo! Vendemos todos os ingressos em tempo recorde.',
      author: 'Marcos Oliveira',
      role: 'Organizador de Eventos',
      company: 'Gardens Fusion',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 3400, likes: 287 },
    relatedProjects: [6, 9, 10]
  },
  8: {
    id: 8,
    title: 'Arfen - Design Conceito',
    category: 'Designs',
    image: '/portfolio-images/art8.png',
    client: 'Arfen Design',
    date: 'Dezembro 2024',
    duration: '48 horas',
    description: 'Arte conceitual promocional demonstrando que design vai alem da estetica. Composicao moderna com personagem 3D e elementos graficos que comunicam a filosofia de trabalho da marca.',
    services: ['Arte Conceitual', 'Design 3D', 'Branding Pessoal'],
    testimonial: {
      text: 'Esse post viralizou e trouxe varios clientes novos! A mensagem ficou clara e impactante.',
      author: 'Lucas Silva',
      role: 'Designer',
      company: 'Arfen Design',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 5200, likes: 456 },
    relatedProjects: [6, 7, 10]
  },
  9: {
    id: 9,
    title: 'Gardens Fusion - Carnaval',
    category: 'Designs',
    image: '/portfolio-images/art9.png',
    client: 'Gardens Fusion',
    date: 'Fevereiro 2025',
    duration: '3 dias',
    description: 'Flyer vibrante para edicao especial de Carnaval. Design explosivo com cores tropicais, penas coloridas e elementos festivos que capturam toda a energia da celebracao brasileira.',
    services: ['Design de Evento', 'Arte Carnavalesca', 'Marketing Festivo'],
    testimonial: {
      text: 'A arte capturou perfeitamente o espirito do Carnaval! Evento lotado e muito sucesso!',
      author: 'Ana Paula',
      role: 'Produtora',
      company: 'Gardens Fusion',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 4100, likes: 378 },
    relatedProjects: [7, 10, 5]
  },
  10: {
    id: 10,
    title: 'Gardens Fusion - Tropical',
    category: 'Designs',
    image: '/portfolio-images/art10.png',
    client: 'Gardens Fusion',
    date: 'Fevereiro 2025',
    duration: '5 dias',
    description: 'Arte tropical luxuosa para evento de aniversario de 1 ano. Design com mascara de carnaval dourada, elementos naturais e tipografia festiva em composicao rica e vibrante.',
    services: ['Design Premium', 'Arte Tropical', 'Identidade de Evento'],
    testimonial: {
      text: 'Superou todas as expectativas! O visual ficou tao lindo que os convidados queriam levar o flyer de lembranca.',
      author: 'Rafael Costa',
      role: 'Diretor',
      company: 'Gardens Fusion',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 4800, likes: 412 },
    relatedProjects: [7, 9, 5]
  },
  11: {
    id: 11,
    title: 'Design Premium',
    category: 'Designs',
    image: '/portfolio-images/art11.jpg',
    client: 'Marca Premium',
    date: 'Janeiro 2025',
    duration: '4 dias',
    description: 'Desenvolvimento de identidade visual premium com foco em elegancia e sofisticacao. Projeto que combina elementos modernos com classicos atemporais, criando uma comunicacao visual de alto impacto para marcas que buscam exclusividade.',
    services: ['Identidade Visual', 'Design Premium', 'Branding Corporativo'],
    testimonial: {
      text: 'A identidade visual criada elevou nossa marca para outro nivel. Conseguimos transmitir exatamente a sofisticacao que buscavamos.',
      author: 'Beatriz Martins',
      role: 'Diretora de Marketing',
      company: 'Marca Premium',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 3800, likes: 298 },
    relatedProjects: [1, 4, 8]
  },
  12: {
    id: 12,
    title: 'Design Criativo',
    category: 'Designs',
    image: '/portfolio-images/art12.jpg',
    client: 'Studio Criativo',
    date: 'Dezembro 2024',
    duration: '6 dias',
    description: 'Projeto criativo focado em inovacao e ousadia visual. Design que quebra padroes convencionais, utilizando composicoes experimentais e paleta de cores vibrante para criar experiencias visuais memoraveis e impactantes.',
    services: ['Design Experimental', 'Arte Conceitual', 'Comunicacao Visual'],
    testimonial: {
      text: 'Exatamente o que precisavamos! Um design que realmente se destaca e chama atencao. Nossa taxa de engajamento aumentou 150%!',
      author: 'Thiago Rodrigues',
      role: 'Diretor Criativo',
      company: 'Studio Criativo',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 5600, likes: 445 },
    relatedProjects: [8, 5, 2]
  },
  13: {
    id: 13,
    title: 'Arte Visual',
    category: 'Designs',
    image: '/portfolio-images/art13.jpg',
    client: 'Galeria de Arte',
    date: 'Novembro 2024',
    duration: '5 dias',
    description: 'Criacao de arte visual sofisticada para exposicao de galeria. Trabalho que explora conceitos de forma, cor e composicao para criar pecas que dialogam com o publico de maneira profunda e emocional.',
    services: ['Arte Digital', 'Design Artistico', 'Composicao Visual'],
    testimonial: {
      text: 'Um trabalho artistico excepcional! As pecas criaram uma conexao emocional imediata com os visitantes da galeria.',
      author: 'Mariana Souza',
      role: 'Curadora',
      company: 'Galeria de Arte',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 4200, likes: 367 },
    relatedProjects: [11, 14, 15]
  },
  14: {
    id: 14,
    title: 'Design Moderno',
    category: 'Designs',
    image: '/portfolio-images/art14.jpg',
    client: 'Tech Startup',
    date: 'Outubro 2024',
    duration: '7 dias',
    description: 'Design moderno e minimalista para startup de tecnologia. Projeto que une funcionalidade e estetica, criando uma identidade visual limpa, contemporanea e alinhada com os valores de inovacao da empresa.',
    services: ['Design Minimalista', 'UX/UI Design', 'Branding Tech'],
    testimonial: {
      text: 'O design moderno e limpo reflete perfeitamente nossa filosofia de inovacao. Recebemos muitos elogios de investidores!',
      author: 'Gabriel Santos',
      role: 'CEO',
      company: 'Tech Startup',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 6100, likes: 523 },
    relatedProjects: [8, 11, 12]
  },
  15: {
    id: 15,
    title: 'Arte Conceitual',
    category: 'Designs',
    image: '/portfolio-images/art15.jpg',
    client: 'Projeto Cultural',
    date: 'Setembro 2024',
    duration: '8 dias',
    description: 'Desenvolvimento de arte conceitual para projeto cultural de grande porte. Trabalho que explora narrativas visuais complexas, mesclando referencias culturais com tecnicas contemporaneas para criar uma experiencia visual unica e significativa.',
    services: ['Arte Conceitual', 'Design Cultural', 'Narrativa Visual'],
    testimonial: {
      text: 'Uma obra-prima! A arte conceitual criou uma narrativa visual poderosa que ressoou profundamente com nosso publico.',
      author: 'Isabella Ferreira',
      role: 'Produtora Cultural',
      company: 'Projeto Cultural',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 5400, likes: 478 },
    relatedProjects: [13, 11, 12]
  },
  16: {
    id: 16,
    title: 'Porsche 911 GT3 RS - O Grego',
    category: 'Designs',
    image: '/portfolio-images/in16.jpg',
    client: 'O Grego',
    date: 'Fevereiro 2025',
    duration: '5 dias',
    description: 'Design automotivo premium para apresentacao do Porsche 911 GT3 RS. Arte conceitual com tipografia impactante e composicao fotografica sofisticada que destaca as linhas agressivas e a performance do veiculo de alta performance, criando uma experiencia visual que transmite velocidade, precisao e exclusividade.',
    services: ['Design Automotivo', 'Composicao Fotografica', 'Arte Premium'],
    testimonial: {
      text: 'O design capturou perfeitamente a essencia do GT3 RS - agressivo, elegante e poderoso. Superou todas as expectativas!',
      author: 'Pedro Grego',
      role: 'Diretor',
      company: 'O Grego',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    stats: { views: 7200, likes: 612 },
    relatedProjects: [11, 14, 4]
  },
  17: {
    id: 17,
    title: 'Design Exclusivo',
    category: 'Designs',
    image: '/portfolio-images/art16.jpg',
    client: 'Cliente Premium',
    date: 'Fevereiro 2025',
    duration: '4 dias',
    description: 'Projeto de design exclusivo desenvolvido com atencao aos minimos detalhes. Trabalho que combina criatividade e estrategia para criar uma comunicacao visual impactante e memoravel.',
    services: ['Design Exclusivo', 'Arte Visual', 'Branding'],
    stats: { views: 3100, likes: 245 },
    relatedProjects: [18, 19, 20]
  },
  18: {
    id: 18,
    title: 'Arte Contemporanea',
    category: 'Designs',
    image: '/portfolio-images/art17.jpg',
    client: 'Galeria Moderna',
    date: 'Fevereiro 2025',
    duration: '5 dias',
    description: 'Arte contemporanea que explora novas formas de expressao visual. Projeto criativo que desafia convencoes e cria experiencias visuais unicas.',
    services: ['Arte Digital', 'Design Contemporaneo', 'Expressao Visual'],
    stats: { views: 2800, likes: 198 },
    relatedProjects: [17, 19, 20]
  },
  19: {
    id: 19,
    title: 'Design Inovador',
    category: 'Designs',
    image: '/portfolio-images/art18.jpg',
    client: 'Startup Inovadora',
    date: 'Fevereiro 2025',
    duration: '6 dias',
    description: 'Design inovador que quebra paradigmas e estabelece novos padroes visuais. Projeto desenvolvido para marcas que buscam se destacar no mercado.',
    services: ['Design Inovador', 'Comunicacao Visual', 'Estrategia Criativa'],
    stats: { views: 3400, likes: 267 },
    relatedProjects: [17, 18, 20]
  },
  20: {
    id: 20,
    title: 'Arte Digital',
    category: 'Designs',
    image: '/portfolio-images/art19.png',
    client: 'Digital Arts Studio',
    date: 'Fevereiro 2025',
    duration: '4 dias',
    description: 'Arte digital de alta qualidade que combina tecnicas tradicionais com tecnologia moderna. Projeto que demonstra dominio tecnico e visao artistica.',
    services: ['Arte Digital', 'Ilustracao', 'Design Grafico'],
    stats: { views: 2900, likes: 212 },
    relatedProjects: [17, 18, 19]
  },
  21: {
    id: 21,
    title: 'Interior Design 1',
    category: 'Designs',
    image: '/portfolio-images/in8.jpg',
    client: 'Arquitetura Premium',
    date: 'Janeiro 2025',
    duration: '5 dias',
    description: 'Design de interiores sofisticado que combina elegancia e funcionalidade. Projeto desenvolvido com foco em criar espacos que inspiram e acolhem.',
    services: ['Design de Interiores', 'Visualizacao 3D', 'Decoracao'],
    stats: { views: 4100, likes: 334 },
    relatedProjects: [22, 23, 24]
  },
  22: {
    id: 22,
    title: 'Interior Design 2',
    category: 'Designs',
    image: '/portfolio-images/in9.jpg',
    client: 'Casa Moderna',
    date: 'Janeiro 2025',
    duration: '4 dias',
    description: 'Projeto de interiores moderno com linhas limpas e acabamentos premium. Design que valoriza a luz natural e os materiais nobres.',
    services: ['Design Residencial', 'Arquitetura de Interiores', 'Ambientacao'],
    stats: { views: 3800, likes: 298 },
    relatedProjects: [21, 23, 24]
  },
  23: {
    id: 23,
    title: 'Interior Design 3',
    category: 'Designs',
    image: '/portfolio-images/in10.jpg',
    client: 'Espaco Corporativo',
    date: 'Janeiro 2025',
    duration: '6 dias',
    description: 'Design de interiores para ambiente corporativo que equilibra produtividade e bem-estar. Espacos pensados para inspirar colaboracao e criatividade.',
    services: ['Design Corporativo', 'Layout de Escritorio', 'Ergonomia'],
    stats: { views: 3500, likes: 276 },
    relatedProjects: [21, 22, 24]
  },
  24: {
    id: 24,
    title: 'Interior Design 4',
    category: 'Designs',
    image: '/portfolio-images/in11.jpg',
    client: 'Loft Contemporaneo',
    date: 'Janeiro 2025',
    duration: '5 dias',
    description: 'Design de loft contemporaneo que maximiza o espaco e valoriza a arquitetura industrial. Projeto que une rustico e moderno de forma harmoniosa.',
    services: ['Design de Loft', 'Reforma', 'Decoracao Industrial'],
    stats: { views: 4200, likes: 345 },
    relatedProjects: [21, 22, 23]
  },
  25: {
    id: 25,
    title: 'Interior Design 5',
    category: 'Designs',
    image: '/portfolio-images/in12.jpg',
    client: 'Suite Master',
    date: 'Janeiro 2025',
    duration: '4 dias',
    description: 'Design de suite master que cria um santuario de conforto e elegancia. Ambiente pensado para proporcionar relaxamento e sofisticacao.',
    services: ['Design de Quartos', 'Iluminacao', 'Texturas e Acabamentos'],
    stats: { views: 3900, likes: 312 },
    relatedProjects: [21, 24, 26]
  },
  26: {
    id: 26,
    title: 'Interior Design 6',
    category: 'Designs',
    image: '/portfolio-images/in13.jpg',
    client: 'Espaco Gourmet',
    date: 'Janeiro 2025',
    duration: '5 dias',
    description: 'Design de espaco gourmet que une funcionalidade e estetica. Ambiente perfeito para recepcionar convidados com estilo e conforto.',
    services: ['Design de Cozinha', 'Espaco Gourmet', 'Planejamento'],
    stats: { views: 4500, likes: 367 },
    relatedProjects: [21, 24, 25]
  },
  27: {
    id: 27,
    title: 'Interior Design 7',
    category: 'Designs',
    image: '/portfolio-images/in14.jpg',
    client: 'Residencia Moderna',
    date: 'Janeiro 2025',
    duration: '5 dias',
    description: 'Projeto de interiores com foco em modernidade e conforto. Espacos planejados para proporcionar bem-estar e funcionalidade.',
    services: ['Design de Interiores', 'Planejamento', 'Decoracao'],
    stats: { views: 3200, likes: 256 },
    relatedProjects: [28, 29, 30]
  },
  28: {
    id: 28,
    title: 'Interior Design 8',
    category: 'Designs',
    image: '/portfolio-images/in17.jpg',
    client: 'Apartamento Luxo',
    date: 'Janeiro 2025',
    duration: '6 dias',
    description: 'Design sofisticado para apartamento de alto padrao. Acabamentos premium e atencao aos detalhes.',
    services: ['Design Premium', 'Interiores', 'Ambientacao'],
    stats: { views: 3500, likes: 289 },
    relatedProjects: [27, 29, 30]
  },
  29: {
    id: 29,
    title: 'Interior Design 9',
    category: 'Designs',
    image: '/portfolio-images/in18.jpg',
    client: 'Casa Contemporanea',
    date: 'Janeiro 2025',
    duration: '5 dias',
    description: 'Projeto contemporaneo que valoriza linhas limpas e materiais naturais. Design que conecta interior e exterior.',
    services: ['Arquitetura de Interiores', 'Design', 'Paisagismo'],
    stats: { views: 3800, likes: 312 },
    relatedProjects: [27, 28, 30]
  },
  30: {
    id: 30,
    title: 'Interior Design 10',
    category: 'Designs',
    image: '/portfolio-images/in20.jpg',
    client: 'Penthouse',
    date: 'Janeiro 2025',
    duration: '7 dias',
    description: 'Design exclusivo para penthouse com vista panoramica. Espacos que maximizam a luminosidade e as vistas.',
    services: ['Design Exclusivo', 'Interiores Premium', 'Iluminacao'],
    stats: { views: 4200, likes: 345 },
    relatedProjects: [27, 28, 29]
  },
  31: {
    id: 31,
    title: 'Interior Design 11',
    category: 'Designs',
    image: '/portfolio-images/in21.jpg',
    client: 'Loft Industrial',
    date: 'Janeiro 2025',
    duration: '5 dias',
    description: 'Projeto de loft com influencias industriais. Materiais brutos combinados com elementos sofisticados.',
    services: ['Design Industrial', 'Reforma', 'Decoracao'],
    stats: { views: 3600, likes: 298 },
    relatedProjects: [32, 33, 34]
  },
  32: {
    id: 32,
    title: 'Interior Design 12',
    category: 'Designs',
    image: '/portfolio-images/in22.jpg',
    client: 'Studio Criativo',
    date: 'Janeiro 2025',
    duration: '4 dias',
    description: 'Design de studio compacto e funcional. Solucoes inteligentes para espacos reduzidos.',
    services: ['Design Compacto', 'Otimizacao', 'Mobiliario'],
    stats: { views: 3400, likes: 278 },
    relatedProjects: [31, 33, 34]
  },
  33: {
    id: 33,
    title: 'Interior Design 13',
    category: 'Designs',
    image: '/portfolio-images/in23.jpg',
    client: 'Casa de Campo',
    date: 'Janeiro 2025',
    duration: '6 dias',
    description: 'Projeto de casa de campo que harmoniza rustico e moderno. Conforto e aconchego em meio a natureza.',
    services: ['Design Rural', 'Interiores', 'Paisagismo'],
    stats: { views: 3900, likes: 323 },
    relatedProjects: [31, 32, 34]
  },
  34: {
    id: 34,
    title: 'Interior Design 14',
    category: 'Designs',
    image: '/portfolio-images/in24.webp',
    client: 'Cobertura Duplex',
    date: 'Janeiro 2025',
    duration: '8 dias',
    description: 'Design de cobertura duplex com terracos integrados. Espacos de estar e lazer em perfeita harmonia.',
    services: ['Design Duplex', 'Terracos', 'Areas Externas'],
    stats: { views: 4500, likes: 378 },
    relatedProjects: [31, 32, 33]
  },
  35: {
    id: 35,
    title: 'Design Criativo 1',
    category: 'Designs',
    image: '/portfolio-images/in29.png',
    client: 'Marca Inovadora',
    date: 'Fevereiro 2025',
    duration: '3 dias',
    description: 'Design criativo que combina ousadia e estrategia. Comunicacao visual impactante e memoravel.',
    services: ['Design Grafico', 'Branding', 'Comunicacao'],
    stats: { views: 2800, likes: 234 },
    relatedProjects: [36, 37, 38]
  },
  36: {
    id: 36,
    title: 'Design Criativo 2',
    category: 'Designs',
    image: '/portfolio-images/in30.png',
    client: 'Startup Tech',
    date: 'Fevereiro 2025',
    duration: '4 dias',
    description: 'Arte digital moderna para empresa de tecnologia. Visual futurista e inovador.',
    services: ['Arte Digital', 'Tech Design', 'Branding'],
    stats: { views: 3100, likes: 256 },
    relatedProjects: [35, 37, 38]
  },
  37: {
    id: 37,
    title: 'Design Criativo 3',
    category: 'Designs',
    image: '/portfolio-images/in31.png',
    client: 'Agencia Criativa',
    date: 'Fevereiro 2025',
    duration: '3 dias',
    description: 'Projeto visual que explora cores vibrantes e formas geometricas. Design que chama atencao.',
    services: ['Design Visual', 'Arte Grafica', 'Publicidade'],
    stats: { views: 2900, likes: 245 },
    relatedProjects: [35, 36, 38]
  },
  38: {
    id: 38,
    title: 'Design Criativo 4',
    category: 'Designs',
    image: '/portfolio-images/in32.png',
    client: 'Empresa Digital',
    date: 'Fevereiro 2025',
    duration: '4 dias',
    description: 'Comunicacao visual digital com foco em engajamento. Design pensado para redes sociais.',
    services: ['Social Media', 'Design Digital', 'Marketing'],
    stats: { views: 3300, likes: 278 },
    relatedProjects: [35, 36, 37]
  },
  39: {
    id: 39,
    title: 'Design Criativo 5',
    category: 'Designs',
    image: '/portfolio-images/in33.png',
    client: 'Marca Lifestyle',
    date: 'Fevereiro 2025',
    duration: '3 dias',
    description: 'Design de lifestyle que transmite modernidade e sofisticacao. Visual clean e elegante.',
    services: ['Lifestyle Design', 'Branding', 'Visual'],
    stats: { views: 2700, likes: 223 },
    relatedProjects: [40, 41, 42]
  },
  40: {
    id: 40,
    title: 'Design Criativo 6',
    category: 'Designs',
    image: '/portfolio-images/in34.png',
    client: 'E-commerce',
    date: 'Fevereiro 2025',
    duration: '5 dias',
    description: 'Design para plataforma de e-commerce. Interface atraente focada em conversao.',
    services: ['UI Design', 'E-commerce', 'Conversao'],
    stats: { views: 3600, likes: 298 },
    relatedProjects: [39, 41, 42]
  },
  41: {
    id: 41,
    title: 'Design Criativo 7',
    category: 'Designs',
    image: '/portfolio-images/in35.png',
    client: 'App Mobile',
    date: 'Fevereiro 2025',
    duration: '4 dias',
    description: 'Design de interface para aplicativo mobile. Experiencia de usuario intuitiva e agradavel.',
    services: ['Mobile Design', 'UX/UI', 'App Design'],
    stats: { views: 3400, likes: 287 },
    relatedProjects: [39, 40, 42]
  },
  42: {
    id: 42,
    title: 'Design Criativo 8',
    category: 'Designs',
    image: '/portfolio-images/in36.jpg',
    client: 'Revista Digital',
    date: 'Fevereiro 2025',
    duration: '4 dias',
    description: 'Design editorial para revista digital. Layouts dinamicos e tipografia marcante.',
    services: ['Design Editorial', 'Revista', 'Tipografia'],
    stats: { views: 3200, likes: 267 },
    relatedProjects: [39, 40, 41]
  },
  43: {
    id: 43,
    title: 'Design Criativo 9',
    category: 'Designs',
    image: '/portfolio-images/in37.png',
    client: 'Produto Digital',
    date: 'Fevereiro 2025',
    duration: '5 dias',
    description: 'Design de produto digital com foco em usabilidade. Interface moderna e funcional.',
    services: ['Product Design', 'UX', 'Interface'],
    stats: { views: 3100, likes: 256 },
    relatedProjects: [44, 35, 36]
  },
  44: {
    id: 44,
    title: 'Design Criativo 10',
    category: 'Designs',
    image: '/portfolio-images/in38.png',
    client: 'Plataforma Web',
    date: 'Fevereiro 2025',
    duration: '6 dias',
    description: 'Design de plataforma web completa. Visual profissional e navegacao intuitiva.',
    services: ['Web Design', 'Plataforma', 'UX/UI'],
    stats: { views: 3500, likes: 289 },
    relatedProjects: [43, 35, 36]
  }
};

const allProjectImages: Record<number, string> = {
  1: '/portfolio-images/art1.webp',
  2: '/portfolio-images/art2.png',
  3: '/portfolio-images/art3.png',
  4: '/portfolio-images/art4.png',
  5: '/portfolio-images/art5.png',
  6: '/portfolio-images/art6.png',
  7: '/portfolio-images/art7.png',
  8: '/portfolio-images/art8.png',
  9: '/portfolio-images/art9.png',
  10: '/portfolio-images/art10.png',
  11: '/portfolio-images/art11.jpg',
  12: '/portfolio-images/art12.jpg',
  13: '/portfolio-images/art13.jpg',
  14: '/portfolio-images/art14.jpg',
  15: '/portfolio-images/art15.jpg',
  16: '/portfolio-images/in16.jpg',
  17: '/portfolio-images/art16.jpg',
  18: '/portfolio-images/art17.jpg',
  19: '/portfolio-images/art18.jpg',
  20: '/portfolio-images/art19.png',
  21: '/portfolio-images/in8.jpg',
  22: '/portfolio-images/in9.jpg',
  23: '/portfolio-images/in10.jpg',
  24: '/portfolio-images/in11.jpg',
  25: '/portfolio-images/in12.jpg',
  26: '/portfolio-images/in13.jpg',
  27: '/portfolio-images/in14.jpg',
  28: '/portfolio-images/in17.jpg',
  29: '/portfolio-images/in18.jpg',
  30: '/portfolio-images/in20.jpg',
  31: '/portfolio-images/in21.jpg',
  32: '/portfolio-images/in22.jpg',
  33: '/portfolio-images/in23.jpg',
  34: '/portfolio-images/in24.webp',
  35: '/portfolio-images/in29.png',
  36: '/portfolio-images/in30.png',
  37: '/portfolio-images/in31.png',
  38: '/portfolio-images/in32.png',
  39: '/portfolio-images/in33.png',
  40: '/portfolio-images/in34.png',
  41: '/portfolio-images/in35.png',
  42: '/portfolio-images/in36.jpg',
  43: '/portfolio-images/in37.png',
  44: '/portfolio-images/in38.png',
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id || '1');
  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030306] pt-28 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Projeto nao encontrado</h1>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-bold rounded-full"
          >
            <ArrowLeft size={20} />
            Voltar ao Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030306] pt-28 pb-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[200px] animate-glow-pulse" />
        <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[150px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[100px]" />
      </div>

      <div className="fixed inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-3 px-6 py-3 glassmorphism rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Voltar</span>
          </button>

          <div className="flex items-center gap-3">
            <button className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all">
              <Share2 size={20} />
            </button>
            <button className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all">
              <Heart size={20} />
            </button>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 border border-cyan-500/30 rounded-full mb-6 animate-fade-in">
            <Tag className="text-cyan-400" size={16} />
            <span className="text-cyan-300 text-sm font-semibold">{project.category}</span>
          </div>
        </div>

        <div className="relative mb-16 animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 rounded-3xl blur-sm opacity-50 animate-border-dance" />
          <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/20 via-transparent to-cyan-500/20 rounded-3xl blur-xl" />

          <div className="relative glassmorphism-strong rounded-3xl p-3 overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-contain max-h-[70vh]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030306]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
                    <Eye size={16} className="text-cyan-400" />
                    <span className="text-white text-sm font-medium">{project.stats.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
                    <Heart size={16} className="text-red-400" />
                    <span className="text-white text-sm font-medium">{project.stats.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl animate-float" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-400/15 rounded-full blur-2xl animate-float-reverse" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="flex-1">
            <div className="glassmorphism rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-xl flex items-center justify-center">
                  <Layers className="text-cyan-400" size={24} />
                </div>
                <h2 className="text-xl font-bold text-white">Sobre o Projeto</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-lg flex items-center justify-center">
                  <Zap className="text-cyan-400" size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">Servicos Aplicados</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.services.map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 glassmorphism rounded-full text-sm text-gray-300 border border-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-80">
            <div className="glassmorphism rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 rounded-lg flex items-center justify-center">
                  <Palette className="text-cyan-400" size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">Detalhes</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-gray-500 text-sm">Cliente</span>
                  <span className="text-white font-medium text-sm">{project.client}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-gray-500 text-sm">Categoria</span>
                  <span className="text-cyan-400 font-medium text-sm">{project.category}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-gray-500 text-sm">Data</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gray-500" />
                    <span className="text-white font-medium text-sm">{project.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-500 text-sm">Duracao</span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gray-500" />
                    <span className="text-white font-medium text-sm">{project.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-bold rounded-2xl hover:from-cyan-400 hover:to-cyan-300 transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 btn-shimmer"
            >
              <MessageCircle size={22} />
              Converse Conosco
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {project.testimonial && (
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-cyan-400/30 to-cyan-500/30 rounded-3xl blur-sm" />

              <div className="relative glassmorphism-strong rounded-3xl p-8 md:p-10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500" />

                <Quote className="absolute top-6 right-6 text-cyan-500/10" size={80} />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex gap-1">
                      {[...Array(project.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]" size={24} />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">Avaliacao {project.testimonial.rating}.0</span>
                  </div>

                  <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 italic">
                    "{project.testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={project.testimonial.avatar}
                        alt={project.testimonial.author}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-cyan-500/50"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="text-white" size={14} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{project.testimonial.author}</h4>
                      <p className="text-cyan-400 text-sm font-medium">{project.testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{project.testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-cyan-500 to-cyan-400" />
          <div className="absolute inset-0 dot-pattern opacity-10" />

          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float-reverse" />

          <div className="relative px-8 py-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Sparkles className="text-white" size={18} />
              <span className="text-white text-sm font-medium">Projeto Personalizado</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Pronto para elevar sua marca?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-10 text-lg">
              Assim como transformamos a visao de <span className="font-bold">{project.client}</span>, podemos criar solucoes unicas para o seu negocio.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-bold rounded-full hover:bg-white/95 transition-all shadow-2xl shadow-black/20 hover:scale-105 text-lg"
            >
              <MessageCircle size={22} />
              Iniciar Conversa
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Projetos <span className="text-gradient-cyan">Relacionados</span>
            </h2>
            <p className="text-gray-400">Explore mais trabalhos do nosso portfolio</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.relatedProjects.map((relatedId) => (
              <Link
                key={relatedId}
                to={`/portfolio/${relatedId}`}
                className="group relative glassmorphism rounded-2xl overflow-hidden hover-lift"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={allProjectImages[relatedId] || '/portfolio-images/art1.webp'}
                    alt={`Projeto ${relatedId}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#030306] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5 w-full flex items-center justify-between">
                    <span className="text-white font-semibold">Ver Projeto</span>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ArrowRight className="text-white" size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 px-8 py-4 glassmorphism-strong text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Ver Todo Portfolio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
