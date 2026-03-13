import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section id="contato" className="relative py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-glow-pulse absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="gradient-border overflow-hidden rounded-[2rem] bg-card/60 px-8 py-16 backdrop-blur-sm md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent" />

          <div className="relative">
            <h2 className="font-display text-balance text-3xl font-bold text-foreground md:text-5xl">
              Pronto para <span className="gradient-text">Transformar</span> sua Presenca Digital?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcancar
              novos patamares no mercado digital.
            </p>
            <div className="mt-12">
              <Link
                href="https://api.whatsapp.com/send/?phone=5511992580843&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-12 py-4 text-sm font-bold text-primary-foreground shadow-2xl shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:brightness-110"
              >
                Fale Conosco Agora
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
