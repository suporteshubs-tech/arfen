"use client"

import { useState } from "react"
import { Star, ArrowRight, MessageSquare, Briefcase, Quote } from "lucide-react"
import Link from "next/link"

const tabs = [
  { id: "todos", label: "Todos" },
  { id: "digitais", label: "Depoimentos Digitais" },
  { id: "projetos", label: "Depoimentos de Projetos" },
]

const digitalTestimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechStart",
    text: "A Arfen transformou completamente nossa presenca digital. Em apenas 3 meses, triplicamos nosso engajamento nas redes sociais e aumentamos em 150% o trafego organico do nosso site. O profissionalismo e a criatividade da equipe sao incomparaveis.",
    rating: 5,
    date: "Jan 2026",
  },
  {
    name: "Ana Silva",
    role: "Diretora, Moda Express",
    text: "Desde que comecamos a trabalhar com a Arfen, nossa marca ganhou uma nova identidade no digital. Os conteudos sao criativos, estrategicos e realmente conectam com nosso publico. Nossas vendas online cresceram 200%.",
    rating: 5,
    date: "Dez 2025",
  },
  {
    name: "Roberto Alves",
    role: "Fundador, FitLife",
    text: "A gestao de trafego da Arfen e sensacional. O ROI das nossas campanhas melhorou drasticamente e estamos conseguindo escalar nosso negocio de forma sustentavel. Recomendo de olhos fechados!",
    rating: 5,
    date: "Nov 2025",
  },
  {
    name: "Juliana Costa",
    role: "Gerente, Bella Casa",
    text: "Os designs criados pela Arfen sao simplesmente lindos. Cada arte, cada post transmite exatamente a essencia da nossa marca. Nossos clientes sempre elogiam nosso visual nas redes.",
    rating: 5,
    date: "Out 2025",
  },
  {
    name: "Fernando Lima",
    role: "Proprietario, Auto Premium",
    text: "Contratamos a Arfen para gerenciar nossas redes sociais e o resultado foi surpreendente. Em poucos meses, nos tornamos referencia no nosso segmento na regiao. O atendimento e impecavel.",
    rating: 5,
    date: "Set 2025",
  },
  {
    name: "Patricia Rocha",
    role: "Socia, Studio Beleza",
    text: "A estrategia de conteudo da Arfen e muito bem planejada. Cada postagem tem um proposito claro e os resultados aparecem naturalmente. Nosso perfil cresceu organicamente e as consultas aumentaram muito.",
    rating: 5,
    date: "Ago 2025",
  },
  {
    name: "Marcos Pereira",
    role: "Diretor, Construmax",
    text: "Estamos extremamente satisfeitos com o trabalho da Arfen. A equipe entende perfeitamente nosso mercado e cria campanhas que realmente convertem. O investimento se paga sozinho.",
    rating: 5,
    date: "Jul 2025",
  },
  {
    name: "Camila Santos",
    role: "CEO, Pet Haven",
    text: "A Arfen e simplesmente a melhor agencia com quem ja trabalhei. Eles realmente se importam com os resultados e estao sempre buscando maneiras de otimizar nossas campanhas.",
    rating: 5,
    date: "Jun 2025",
  },
  {
    name: "Diego Oliveira",
    role: "Fundador, Tech Solutions",
    text: "A presenca digital que a Arfen construiu para nossa empresa nos posicionou como lider no mercado local. O trabalho de SEO e conteudo e excepcional. Muito profissionais!",
    rating: 5,
    date: "Mai 2025",
  },
]

const projectTestimonials = [
  {
    name: "Lucas Ferreira",
    role: "CEO, LF Investimentos",
    text: "O site que a Arfen desenvolveu para nossa empresa e extraordinario. Moderno, rapido e totalmente otimizado para conversao. Recebemos elogios constantemente de nossos clientes.",
    rating: 5,
    date: "Jan 2026",
    project: "Site Institucional",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-01-29%20150949-XdjGNlYXpXGJSQQW0iiGNh9gqvT1wO.png",
  },
  {
    name: "Mariana Souza",
    role: "Diretora Criativa, MS Design",
    text: "A identidade visual criada pela Arfen capturou perfeitamente a essencia da nossa marca. O logotipo, as cores, a tipografia - tudo ficou perfeito e coerente. Trabalho impecavel!",
    rating: 5,
    date: "Dez 2025",
    project: "Identidade Visual",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cortes-3bfGAez51OYFAd6bSLVTzUS02oLmUC.png",
  },
  {
    name: "Thiago Nunes",
    role: "Proprietario, Gourmet Delivery",
    text: "Os banners e materiais graficos que a Arfen cria para nossas campanhas sao sempre de altissima qualidade. O design e atrativo e as conversoes sao excelentes.",
    rating: 5,
    date: "Nov 2025",
    project: "Material Grafico",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-CQ0dQaVpvEQqQfDweFu0s9pKcvgU9n.jpeg",
  },
  {
    name: "Beatriz Cardoso",
    role: "Autora, BC Books",
    text: "A capa do meu livro ficou incrivel! A Arfen entendeu exatamente o que eu queria e entregou muito alem das expectativas. O livro se destaca nas prateleiras e online.",
    rating: 5,
    date: "Out 2025",
    project: "Capa de Livro",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capa%20do%20livro%2019-P4HcCXZyFb80qhOJ5N59HwEvZhBYpK.png",
  },
  {
    name: "Ricardo Gomes",
    role: "Diretor, RG Consultoria",
    text: "O video institucional produzido pela Arfen e de cinema. A qualidade da producao, roteiro e edicao superaram todas as nossas expectativas. Ja estamos planejando o proximo projeto.",
    rating: 5,
    date: "Set 2025",
    project: "Video Institucional",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1770747240192-bRUCofWuDH1t8Srw8DqEHHAj1JoUOU.png",
  },
  {
    name: "Isabela Martins",
    role: "Socia, IM Advocacia",
    text: "A Arfen desenvolveu nosso e-commerce do zero e o resultado foi fantastico. Interface intuitiva, design elegante e totalmente funcional. Nossas vendas online decolaram desde o lancamento.",
    rating: 5,
    date: "Ago 2025",
    project: "E-commerce",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-01-29%20151106-cIMHjMIb1DPkUi3PJAqYqGAHpTHuXJ.png",
  },
  {
    name: "Gabriel Ribeiro",
    role: "Fundador, GR Fitness",
    text: "A landing page que a Arfen criou para nosso programa de treinamento online teve uma taxa de conversao absurda. Design limpo, copy persuasiva e performance excelente.",
    rating: 5,
    date: "Jul 2025",
    project: "Landing Page",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-01-29%20150959-KMrZyJiZr90jPFjpLIiHrEuQkOMzDM.png",
  },
  {
    name: "Fernanda Almeida",
    role: "Diretora, FA Eventos",
    text: "Todos os materiais para nosso evento foram desenvolvidos pela Arfen - convites, banners, backdrop, social media. Tudo ficou impecavel e nosso evento foi um sucesso visual.",
    rating: 5,
    date: "Jun 2025",
    project: "Material para Evento",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-NJ5IaZLipiaIkqBL4r7xjaV9GPlgrp.png",
  },
  {
    name: "Hugo Dias",
    role: "CEO, HD Tecnologia",
    text: "A apresentacao corporativa que a Arfen criou nos ajudou a fechar um contrato de milhoes. O design profissional e a narrativa visual fizeram toda a diferenca na reuniao.",
    rating: 5,
    date: "Mai 2025",
    project: "Apresentacao Corporativa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tecnologia%20%2850%29-86Nf8hEg9igd3KgKnvL5iwOWfnl50F.png",
  },
]

function TestimonialCard({
  testimonial,
  showProject = false,
}: {
  testimonial: (typeof digitalTestimonials)[0] & { project?: string; image?: string }
  showProject?: boolean
}) {
  return (
    <div className="gradient-border group relative overflow-hidden rounded-2xl bg-card/50 p-7 backdrop-blur-sm transition-all duration-500 hover:bg-card/80">
      <Quote className="absolute right-5 top-5 h-6 w-6 text-primary/8 transition-colors duration-300 group-hover:text-primary/15" />

      {showProject && testimonial.image && (
        <div className="mb-5 overflow-hidden rounded-xl">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.project || "Projeto"}
            className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      {showProject && testimonial.project && (
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
          <Briefcase className="h-3 w-3" />
          {testimonial.project}
        </div>
      )}
      <div className="relative flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 font-display text-xs font-bold text-primary">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
        <span className="text-xs font-medium text-muted-foreground/60">{testimonial.date}</span>
      </div>
    </div>
  )
}

export default function DepoimentosContent() {
  const [activeTab, setActiveTab] = useState("todos")

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      {/* Page header */}
      <div className="text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          O que dizem sobre nos
        </span>
        <h1 className="mt-4 font-display text-5xl font-bold text-foreground md:text-6xl">
          Depoimentos
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Veja o que nossos clientes dizem sobre nosso trabalho, resultados e experiencia
          de parceria com a Arfen.
        </p>
        <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-primary/40" />
      </div>

      {/* Tabs */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-7 py-2.5 text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "border border-border/50 bg-card/30 text-muted-foreground hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Digital testimonials */}
      {(activeTab === "todos" || activeTab === "digitais") && (
        <div className="mt-20">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Depoimentos Digitais</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {digitalTestimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      )}

      {/* Project testimonials */}
      {(activeTab === "todos" || activeTab === "projetos") && (
        <div className="mt-20">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
              <Briefcase className="h-5 w-5" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Depoimentos de Projetos</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectTestimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} showProject />
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="gradient-border mt-28 overflow-hidden rounded-3xl bg-card/60 p-10 text-center backdrop-blur-sm md:p-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent" />
        <div className="relative">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl">
            Pronto para <span className="gradient-text">Transformar</span> sua Empresa?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Junte-se a dezenas de empresas que ja transformaram sua presenca digital com a Arfen.
          </p>
          <div className="mt-10">
            <Link
              href="https://api.whatsapp.com/send/?phone=5511992580843&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-primary px-12 py-4 text-sm font-bold text-primary-foreground shadow-2xl shadow-primary/25 transition-all duration-300 hover:shadow-primary/40"
            >
              <span className="relative z-10">Fale Conosco Agora</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 -translate-x-full bg-[hsl(185,72%,38%)] transition-transform duration-500 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
