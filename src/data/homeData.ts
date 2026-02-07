import {
  Clock,
  CheckCircle2,
  Users,
  Shield,
  Target,
  PenTool,
  Video,
  Zap,
  Settings,
  Lightbulb
} from 'lucide-react';

export const founders = [
  {
    name: 'Rud Junior',
    tag: '@rudjunior',
    role: 'Estratégia Digital & Produção Visual',
    badge: 'Co-Fundador',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Especialista em estratégias de conversão e produção visual de alto impacto. Com anos de experiência no mercado digital, lidera projetos que transformam marcas em autoridades.',
    quote: 'Cada pixel conta uma história de sucesso.',
    skills: [
      { icon: Target, label: 'Estratégia' },
      { icon: PenTool, label: 'Design' },
      { icon: Video, label: 'Vídeo' },
    ]
  },
  {
    name: 'Kaue Lopes',
    tag: '@kauelopes',
    role: 'Gestão de Projetos & Inovação',
    badge: 'Co-Fundador',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Especialista em gestão de projetos digitais e inovação tecnológica. Lidera a coordenação de equipes e garante a entrega de soluções de alta performance.',
    quote: 'Inovação é o combustível do crescimento.',
    skills: [
      { icon: Zap, label: 'Gestão' },
      { icon: Settings, label: 'Projetos' },
      { icon: Lightbulb, label: 'Inovação' },
    ]
  },
];

export const stats = [
  { value: '3+', label: 'Anos de Experiência', icon: Clock },
  { value: '100+', label: 'Empresas Transformadas', icon: CheckCircle2 },
  { value: '98%', label: 'Clientes Satisfeitos', icon: Users },
  { value: '24/7', label: 'Suporte Disponível', icon: Shield },
];

export const testimonials = [
  {
    name: 'Carlos Silva',
    company: 'Tech Solutions',
    role: 'CEO',
    text: 'A Arfen transformou completamente nossa presença digital. Em apenas 3 meses, triplicamos nossas vendas online. Profissionalismo e resultados incomparáveis.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Maria Santos',
    company: 'Beauty Store',
    role: 'Diretora',
    text: 'Profissionais excepcionais que realmente entendem do negócio. Nossa marca agora é reconhecida como líder no segmento de beleza.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'João Oliveira',
    company: 'Food Delivery',
    role: 'Fundador',
    text: 'A melhor decisão que tomei foi contratar a Arfen. Meu faturamento dobrou em 3 meses! Equipe extremamente dedicada e competente.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Ana Costa',
    company: 'Fitness Pro',
    role: 'Proprietária',
    text: 'Trabalho impecável do início ao fim. A identidade visual que criaram para minha academia é simplesmente perfeita. Recomendo fortemente!',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];
