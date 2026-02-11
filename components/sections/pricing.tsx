import { Check, Zap } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Essencial",
    description: "Ideal para quem esta comecando no digital",
    price: "Sob Consulta",
    features: [
      "Gestao de 1 rede social",
      "8 posts por mes",
      "Design basico",
      "Relatorio mensal",
      "Suporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    description: "Para empresas que querem crescer",
    price: "Sob Consulta",
    features: [
      "Gestao de 3 redes sociais",
      "20 posts por mes",
      "Design profissional",
      "Gestao de trafego pago",
      "Relatorio semanal",
      "Suporte prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    description: "Solucao completa para dominar o mercado",
    price: "Sob Consulta",
    features: [
      "Gestao de todas as redes",
      "Posts ilimitados",
      "Design premium",
      "Gestao de trafego avancada",
      "Producao de video",
      "Desenvolvimento web",
      "Consultoria estrategica",
      "Suporte 24/7",
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section className="relative py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-glow-pulse absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/50" />
            Planos e Precos
            <span className="h-px w-6 bg-primary/50" />
          </span>
          <h2 className="mt-5 font-display text-balance text-4xl font-bold text-foreground md:text-5xl">
            Tudo o Que Voce Precisa para{" "}
            <span className="gradient-text">Dominar o Mercado</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Escolha o plano ideal para sua empresa e comece a transformar sua presenca digital hoje mesmo.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`gradient-border glow-card group relative overflow-hidden rounded-3xl transition-all duration-500 ${
                plan.highlighted ? "scale-[1.02] lg:scale-105" : ""
              }`}
            >
              <div
                className={`relative h-full rounded-3xl p-8 ${
                  plan.highlighted
                    ? "bg-card/90 shadow-2xl shadow-primary/10"
                    : "bg-card/50 backdrop-blur-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-px left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-b-xl bg-primary px-5 py-1.5 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30">
                    <Zap className="h-3 w-3" />
                    Mais Popular
                  </div>
                )}

                <div className={plan.highlighted ? "pt-4" : ""}>
                  <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>

                  <div className="mt-8 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-bold text-primary">{plan.price}</span>
                  </div>

                  <div className="my-8 h-px bg-border/50" />

                  <ul className="flex flex-col gap-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/#contato"
                    className={`mt-10 block rounded-full py-3.5 text-center text-sm font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
                        : "border border-border/50 text-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    Falar com Consultor
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
