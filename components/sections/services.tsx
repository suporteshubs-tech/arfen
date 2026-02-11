import { Globe, Megaphone, Palette, BarChart3, Video, Code } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Presenca Digital",
    description:
      "Construimos sua presenca online de forma estrategica, garantindo que sua marca seja encontrada e reconhecida.",
  },
  {
    icon: Megaphone,
    title: "Conteudo Estrategico",
    description:
      "Criamos conteudos que engajam, convertem e posicionam sua empresa como autoridade no seu nicho.",
  },
  {
    icon: Palette,
    title: "Design Profissional",
    description:
      "Desenvolvemos identidades visuais unicas que transmitem profissionalismo e confianca.",
  },
  {
    icon: BarChart3,
    title: "Gestao de Trafego",
    description:
      "Gerenciamos suas campanhas de trafego pago para maximizar o retorno sobre o investimento.",
  },
  {
    icon: Video,
    title: "Producao de Video",
    description:
      "Produzimos videos profissionais que contam a historia da sua marca e conectam com seu publico.",
  },
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description:
      "Criamos sites e aplicacoes modernas, responsivas e otimizadas para conversao.",
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-mesh absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/50" />
            O que fazemos
            <span className="h-px w-6 bg-primary/50" />
          </span>
          <h2 className="mt-5 font-display text-balance text-4xl font-bold text-foreground md:text-5xl">
            A Transformacao que Sua Empresa{" "}
            <span className="gradient-text">Merece Esta Aqui</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="gradient-border glow-card group relative overflow-hidden rounded-2xl bg-card/50 p-8 backdrop-blur-sm"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="gradient-border mt-24 overflow-hidden rounded-3xl bg-card/60 p-10 text-center backdrop-blur-sm md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-primary/[0.03]" />
          <h3 className="relative font-display text-2xl font-bold text-foreground md:text-4xl">
            Sua Empresa Merece Ser Vista Como a{" "}
            <span className="gradient-text">Lider</span> do Mercado
          </h3>
          <p className="relative mx-auto mt-5 max-w-2xl text-muted-foreground">
            Nao deixe sua concorrencia sair na frente. Invista em uma presenca digital forte e conquiste seu espaco no mercado.
          </p>
        </div>
      </div>
    </section>
  )
}
