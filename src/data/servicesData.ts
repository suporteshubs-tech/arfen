import {
  Palette,
  TrendingUp,
  Video,
  Globe,
  Users,
  Target,
  Zap,
  Award,
  Image,
  FileImage,
  BookOpen,
  Layers,
  Film,
  Monitor,
} from 'lucide-react';

export const features = [
  { icon: Palette, title: 'Design Exclusivo', desc: 'Criações únicas que destacam sua marca no mercado', number: '01' },
  { icon: TrendingUp, title: 'Estratégia de Crescimento', desc: 'Planos personalizados para escalar seu negócio', number: '02' },
  { icon: Video, title: 'Produção de Vídeo', desc: 'Conteúdo audiovisual de alta qualidade', number: '03' },
  { icon: Globe, title: 'Presença Digital', desc: 'Sites e landing pages que convertem', number: '04' },
  { icon: Users, title: 'Gestão de Redes', desc: 'Gerenciamento completo das suas redes sociais', number: '05' },
  { icon: Target, title: 'Tráfego Pago', desc: 'Campanhas otimizadas para máximo ROI', number: '06' },
  { icon: Zap, title: 'Resultados Rápidos', desc: 'Entregas ágeis sem perder qualidade', number: '07' },
  { icon: Award, title: 'Excelência Total', desc: 'Compromisso com a perfeição em cada projeto', number: '08' },
];

export const portfolioCategories = [
  { icon: Image, name: 'Artes', count: '150+', image: '/portfolio-images/art19.png', featured: true },
  { icon: FileImage, name: 'Banners', count: '200+', image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: BookOpen, name: 'Capas de Livro', count: '80+', image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Layers, name: 'Logotipos', count: '120+', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Film, name: 'Vídeos', count: '50+', image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=400', hasPlay: true },
  { icon: Monitor, name: 'Sites', count: '30+', image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export const services = [
  {
    icon: Palette,
    title: 'Design Gráfico',
    desc: 'Identidade visual completa que comunica autoridade e profissionalismo',
    items: ['Logotipos Premium', 'Materiais Gráficos', 'Identidade Visual'],
    popular: true
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    desc: 'Estratégias completas para crescimento online exponencial',
    items: ['Funis de Venda', 'Automações', 'Analytics Avançado']
  },
  {
    icon: Globe,
    title: 'Criação de Sites',
    desc: 'Sites modernos e otimizados para máxima conversão',
    items: ['Landing Pages', 'E-commerce', 'Sistemas Web']
  },
  {
    icon: Video,
    title: 'Edição de Vídeos',
    desc: 'Produção audiovisual profissional de alto impacto',
    items: ['Vídeos Institucionais', 'Reels & Shorts', 'Motion Graphics']
  },
  {
    icon: Target,
    title: 'Gestão de Tráfego',
    desc: 'Campanhas pagas estratégicas com ROI comprovado',
    items: ['Meta Ads', 'Google Ads', 'Remarketing'],
    popular: true
  },
  {
    icon: Users,
    title: 'Social Media',
    desc: 'Gestão completa das redes sociais com resultados reais',
    items: ['Conteúdo Diário', 'Engajamento', 'Crescimento Orgânico']
  },
];

export const locations = [
  { city: 'São Paulo', address: 'Av. Paulista, 1000 - Bela Vista', hours: 'Seg-Sex: 9h às 18h' },
  { city: 'Rio de Janeiro', address: 'Av. Rio Branco, 500 - Centro', hours: 'Seg-Sex: 9h às 18h' },
  { city: 'Belo Horizonte', address: 'Av. Afonso Pena, 200 - Centro', hours: 'Seg-Sex: 9h às 18h' },
];
