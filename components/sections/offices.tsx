import { MapPin, Building2, Clock, Phone } from "lucide-react"

const offices = [
  {
    city: "Sao Paulo",
    neighborhood: "Faria Lima - Sao Paulo, SP",
    description:
      "Nosso escritorio principal, localizado no coracao financeiro da cidade, onde inovacao e negocios se encontram.",
    hours: "Seg - Sex: 8h as 18h",
    phone: "24/6",
  },
  {
    city: "Guarulhos",
    neighborhood: "Salgado Filho - Guarulhos, SP",
    description:
      "Estrategicamente posicionado proximo ao aeroporto, oferecendo agilidade e excelencia no atendimento.",
    hours: "Seg - Sex: 8h as 18h",
    phone: "24/6",
  },
  {
    city: "Guarulhos",
    neighborhood: "Bosque Maia - Guarulhos, SP",
    description:
      "Nosso escritorio moderno na regiao, expandindo nossa presenca para estar sempre perto de voce.",
    hours: "Seg - Sex: 8h as 18h",
    phone: "24/6",
  },
]

export default function Offices() {
  return (
    <section className="relative py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-glow-pulse absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
            <MapPin className="h-4 w-4" />
            Onde Estamos
          </span>
          <h2 className="mt-8 font-display text-balance text-4xl font-bold text-foreground md:text-5xl">
            <span className="gradient-text">3 Escritorios Estrategicos</span>
            <br />
            <span className="italic">Sempre Perto de Voce</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Nossa estrutura estrategica permite que voce seja atendido pessoalmente em Sao Paulo e
            Guarulhos.{" "}
            <span className="font-semibold text-foreground">
              Profissionais qualificados prontos para transformar sua empresa a qualquer momento.
            </span>
          </p>
          <div className="animate-line-expand mx-auto mt-5 h-0.5 w-12 rounded-full bg-gradient-to-r from-primary/60 to-primary/20" />
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {offices.map((office, index) => (
            <div
              key={`${office.city}-${index}`}
              className="gradient-border glow-card group relative flex flex-col overflow-hidden rounded-3xl bg-card/50 p-8 backdrop-blur-sm"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/5 opacity-0 blur-[30px] transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-1 flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                  {office.city}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {office.neighborhood}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {office.description}
                </p>

                {/* Hours and phone */}
                <div className="mt-6 flex flex-col gap-2 border-t border-border/50 pt-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary/60" />
                    {office.hours}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary/60" />
                    {office.phone}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
