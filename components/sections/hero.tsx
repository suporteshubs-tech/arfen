import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Rud Junior background photo */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Graficos financeiros e tecnologia digital"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,25%,3%)] via-[hsl(220,25%,3%,0.85)] to-[hsl(220,25%,3%,0.4)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,3%)] via-transparent to-[hsl(220,25%,3%,0.6)]" />
        {/* Cyan ambient glow */}
        <div className="animate-glow-pulse absolute bottom-0 left-1/4 h-[400px] w-[600px] rounded-full bg-[hsl(190,100%,50%,0.06)] blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(190,100%,50%) 1px, transparent 1px), linear-gradient(90deg, hsl(190,100%,50%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-2xl py-32">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Agencia de Elite
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Eleve Sua Empresa a Um{" "}
            <span className="gradient-text-bright">Novo Nivel</span>{" "}
            de Autoridade
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up delay-200 mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Transformamos sua presenca digital e posicionamos sua empresa como a principal
            referencia do mercado. Resultados reais para negocios ambiciosos.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 mt-12 flex flex-wrap items-center gap-5">
            <Link
              href="/#contato"
              className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-10 py-4 text-sm font-bold text-primary-foreground shadow-2xl shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:brightness-110"
            >
              Comece Agora
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#portfolio"
              className="group rounded-full border border-foreground/10 bg-foreground/5 px-10 py-4 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
            >
              Ver Portfolio
            </Link>
          </div>

          {/* Stats row */}
          <div className="animate-fade-in-up delay-500 mt-20 flex gap-8 md:gap-12">
            {[
              { value: "3+", label: "Anos de Experiencia" },
              { value: "80+", label: "Projetos Entregues" },
              { value: "100+", label: "Clientes Satisfeitos" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
