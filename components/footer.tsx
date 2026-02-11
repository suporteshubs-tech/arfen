import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-background">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="group relative inline-block">
              <Image
                src="/logo-arfen.png"
                alt="Arfen Agencia"
                width={200}
                height={65}
                className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Transformamos sua presenca digital e elevamos sua marca a um novo nivel de autoridade no mercado.
            </p>
            <div className="mt-7 flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/30 bg-card/30 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-lg hover:shadow-primary/5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">Links</h3>
            <nav className="mt-5 flex flex-col gap-3.5">
              {[
                { href: "/", label: "Inicio" },
                { href: "/#portfolio", label: "Portfolio" },
                { href: "/depoimentos", label: "Depoimentos" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">Servicos</h3>
            <nav className="mt-5 flex flex-col gap-3.5">
              {["Presenca Digital", "Conteudo Estrategico", "Design Profissional", "Gestao de Trafego"].map(
                (service) => (
                  <span key={service} className="text-sm text-muted-foreground">
                    {service}
                  </span>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">Contato</h3>
            <div className="mt-5 flex flex-col gap-4">
              {[
                { icon: Phone, text: "(11) 99999-9999" },
                { icon: Mail, text: "contato@arfen.ag" },
                { icon: MapPin, text: "Sao Paulo, SP" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-border/30 bg-primary/5 text-primary">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Arfen Agencia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground">Termos de Uso</span>
            <span className="text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground">Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
