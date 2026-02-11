import { Star, Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechStart",
    text: "A Arfen transformou completamente nossa presenca digital. Os resultados superaram todas as expectativas.",
    rating: 5,
  },
  {
    name: "Ana Silva",
    role: "Diretora, Moda Express",
    text: "Profissionalismo e criatividade em cada projeto. Nossa marca nunca esteve tao forte no mercado.",
    rating: 5,
  },
  {
    name: "Roberto Alves",
    role: "Fundador, FitLife",
    text: "Excelente equipe! O retorno sobre o investimento foi incrivel. Recomendo para todos.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/50" />
            Depoimentos
            <span className="h-px w-6 bg-primary/50" />
          </span>
          <h2 className="mt-5 font-display text-balance text-4xl font-bold text-foreground md:text-5xl">
            O Que Nossos Clientes <span className="gradient-text">Dizem</span>
          </h2>
          <div className="animate-line-expand mx-auto mt-5 h-0.5 w-12 rounded-full bg-gradient-to-r from-primary/60 to-primary/20" />
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="gradient-border glow-card group relative overflow-hidden rounded-3xl bg-card/50 p-8 backdrop-blur-sm"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10 transition-colors duration-500 group-hover:text-primary/20" />

              <div className="relative">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 font-display text-sm font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/depoimentos"
            className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/30 px-10 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
          >
            Ver Todos os Depoimentos
          </Link>
        </div>
      </div>
    </section>
  )
}
