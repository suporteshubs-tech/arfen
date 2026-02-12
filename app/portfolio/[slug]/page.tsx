import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getProjectBySlug, projects } from "@/lib/portfolio-data"
import {
  Star,
  MessageCircle,
  Sparkles,
  ArrowLeft,
  Layers,
  Users,
  Award,
  ExternalLink,
} from "lucide-react"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Get related projects from same category
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 4)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* ========== HERO IMMERSIVE ========== */}
        <section className="relative overflow-hidden">
          {/* Multi-layer animated background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-mesh absolute -left-40 -top-40 h-[800px] w-[800px] rounded-full bg-primary/[0.06] blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/[0.04] blur-[140px]" style={{ animationDelay: "5s", animationDuration: "25s" }} />
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[120px]" />
          </div>

          {/* Subtle grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(190 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(190 100% 50%) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8">
            {/* Navigation bar */}
            <div className="flex items-center justify-between">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2.5 rounded-full border border-border/50 bg-card/50 px-5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:text-primary hover:shadow-lg hover:shadow-primary/5"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Portfolio
              </Link>

              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                {project.categoryLabel}
              </span>
            </div>

            {/* Title area */}
            <div className="mt-16 flex flex-col items-center text-center">
              <h1 className="animate-fade-in-up font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                <span className="gradient-text-bright">{project.title}</span>
              </h1>

              {/* Animated decorative line */}
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
                <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
              </div>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-fade-in-up delay-200">
                {project.description}
              </p>

              {/* Visit Site Button for websites */}
              {project.siteUrl && (
                <div className="mt-8 animate-fade-in-up delay-300">
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-display text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    Visitar Site
                  </a>
                </div>
              )}
            </div>

            {/* Main showcase - Image or Video */}
            <div className="mt-16 animate-scale-in delay-300">
              <div className="relative rounded-[2rem] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent p-[1px]">
                <div className="rounded-[2rem] bg-background/80 p-2 backdrop-blur-xl">
                  {project.videoUrl ? (
                    <div className="relative aspect-video overflow-hidden rounded-[1.75rem] bg-[#0a0f1a]">
                      <iframe
                        src={project.videoUrl}
                        title={project.title}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full border-0"
                      />
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0a0f1a]">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-auto w-full"
                      />
                      {/* Image overlay shine effect */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/[0.03] via-transparent to-primary/[0.06]" />
                    </div>
                  )}
                </div>
                {/* Glow beneath the card */}
                <div className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== PROJECT DETAILS GRID ========== */}
        <section className="relative py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Detail card 1 - Category */}
              <div className="group gradient-border glow-card relative overflow-hidden rounded-2xl bg-card/40 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-card/60">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <Layers className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Categoria
                  </p>
                  <p className="mt-2 text-xl font-bold text-foreground">
                    {project.categoryLabel}
                  </p>
                </div>
              </div>

              {/* Detail card 2 - Team */}
              <div className="group gradient-border glow-card relative overflow-hidden rounded-2xl bg-card/40 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-card/60">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <Users className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Equipe
                  </p>
                  <p className="mt-2 text-xl font-bold text-foreground">
                    {project.teamRole}
                  </p>
                </div>
              </div>

              {/* Detail card 3 - Rating */}
              <div className="group gradient-border glow-card relative overflow-hidden rounded-2xl bg-card/40 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-card/60">
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <Award className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Avaliacao
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-xl font-bold text-foreground">
                      {project.rating.toFixed(1)}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIAL ========== */}
        <section className="relative py-12">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[140px]" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-br from-card/90 via-card/60 to-card/30 p-1">
              <div className="rounded-[calc(2rem-4px)] bg-background/40 px-8 py-14 backdrop-blur-xl md:px-16">
                {/* Large decorative quote marks */}
                <div className="pointer-events-none absolute left-8 top-8 select-none text-[10rem] font-serif leading-none text-primary/[0.04] md:left-12">
                  {'"'}
                </div>

                <div className="relative flex flex-col items-center text-center">
                  {/* Stars */}
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.4)]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-10 max-w-3xl font-display text-2xl font-medium italic leading-relaxed text-foreground md:text-3xl lg:text-4xl">
                    {`"${project.testimonial}"`}
                  </blockquote>

                  {/* Divider */}
                  <div className="mt-10 flex items-center gap-3">
                    <div className="h-px w-10 bg-primary/30" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                    <div className="h-px w-10 bg-primary/30" />
                  </div>

                  {/* Attribution */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-2 ring-primary/20">
                      <span className="font-display text-lg font-bold text-primary">
                        A
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-display text-base font-semibold text-foreground">
                        {project.team}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {project.teamRole}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== RELATED PROJECTS ========== */}
        {relatedProjects.length > 0 && (
          <section className="relative py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* Section header */}
              <div className="flex flex-col items-center text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Explore Mais
                </span>
                <h2 className="mt-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                  Projetos Relacionados
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
                </div>
              </div>

              {/* Related grid */}
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProjects.map((related) =>
                  related.videoUrl ? (
                    <div
                      key={related.slug}
                      className="group gradient-border glow-card overflow-hidden rounded-2xl bg-card/40 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <iframe
                          src={related.videoUrl}
                          title={related.title}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          className="h-full w-full border-0"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-sm font-semibold text-foreground">
                          {related.title}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {related.categoryLabel}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={related.slug}
                      href={`/portfolio/${related.slug}`}
                      className="group gradient-border glow-card overflow-hidden rounded-2xl bg-card/40 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={related.image || "/placeholder.svg"}
                          alt={related.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex items-center justify-between p-5">
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">
                            {related.title}
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {related.categoryLabel}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:text-primary group-hover:opacity-100" />
                      </div>
                    </Link>
                  ),
                )}
              </div>
            </div>
          </section>
        )}

        {/* ========== FINAL CTA ========== */}
        <section className="relative py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[160px]" />
          </div>

          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-b from-card/80 to-card/40 p-1">
              <div className="rounded-[calc(2rem-4px)] bg-background/60 px-8 py-16 backdrop-blur-xl md:px-16">
                {/* Decorative dots */}
                <div className="pointer-events-none absolute left-6 top-6 grid grid-cols-3 gap-1.5">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1 w-1 rounded-full bg-primary/20"
                    />
                  ))}
                </div>
                <div className="pointer-events-none absolute bottom-6 right-6 grid grid-cols-3 gap-1.5">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1 w-1 rounded-full bg-primary/20"
                    />
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                  <MessageCircle className="h-3.5 w-3.5" />
                  Vamos Conversar
                </span>
                <h2 className="mt-8 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                  Pronto para elevar{" "}
                  <span className="gradient-text-bright">sua marca</span>?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Criamos solucoes unicas que transformam ideias em resultados
                  reais. Vamos construir algo extraordinario juntos.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="https://api.whatsapp.com/send/?phone=5511992580843&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 font-display text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    Iniciar Conversa
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-transparent px-8 py-4 font-display text-base font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-foreground"
                  >
                    Ver Portfolio
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
