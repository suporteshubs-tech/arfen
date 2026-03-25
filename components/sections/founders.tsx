import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

const founders = [
  {
    name: "Rud Junior",
    role: "CEO & Fundador",
    description:
      "Estrategista digital com mais de 5 anos de experiencia em posicionamento de marcas e marketing digital. Apaixonado por transformar negocios atraves da presenca online.",
    image: "/rud-junior.jpg",
  },
  {
    name: "Kaue Lopes",
    role: "CTO & Co-Fundador",
    description:
      "Especialista em desenvolvimento web e tecnologias digitais, com foco em solucoes inovadoras para negocios de todos os portes.",
    image: "/kaue-lopes.jpg",
  },
]

export default function Founders() {
  return (
    <section className="relative py-32">
      {/* Section background image */}
      <div className="absolute inset-0">
        <Image
          src="/founders-bg.png"
          alt="Fundadores Arfen"
          fill
          className="object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#050505]/85" />
        
        {/* Top gradient blend - fades into the section above */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/60 to-transparent" />
        
        {/* Bottom gradient blend - fades into the section below */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="animate-mesh absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/50" />
            Quem somos
            <span className="h-px w-6 bg-primary/50" />
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold text-foreground md:text-5xl">
            Os Fundadores
          </h2>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="gradient-border glow-card group relative min-h-[420px] overflow-hidden rounded-3xl"
            >
              {/* Background photo */}
              <Image
                src={founder.image || "/placeholder.svg"}
                alt={founder.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Dark gradient overlays for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 to-transparent" />

              {/* Cyan glow accent on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content positioned at the bottom */}
              <div className="relative flex h-full min-h-[420px] flex-col justify-end p-10">
                <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {founder.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  {founder.role}
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {founder.description}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  {[
                    { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/arfenbr" },
                    { Icon: Linkedin, label: "LinkedIn", href: "#" },
                  ].map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href !== "#" ? "_blank" : undefined}
                      rel={href !== "#" ? "noopener noreferrer" : undefined}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      aria-label={label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
