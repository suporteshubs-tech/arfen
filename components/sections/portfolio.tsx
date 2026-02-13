import Link from "next/link"
import Image from "next/image"
import { Palette, BookOpen, PenTool, Video, Globe } from "lucide-react"
import { getProjectsByCategory } from "@/lib/portfolio-data"

const categories = [
  { id: "artes" as const, label: "Artes", icon: Palette, direction: "left" as const },
  { id: "capas" as const, label: "Capas", icon: BookOpen, direction: "right" as const },
  { id: "logos" as const, label: "Logos", icon: PenTool, direction: "left" as const },
  { id: "videos" as const, label: "Videos", icon: Video, direction: "right" as const },
  { id: "sites" as const, label: "Sites", icon: Globe, direction: "left" as const },
]

function MarqueeCard({
  project,
}: {
  project: {
    slug: string
    title: string
    image: string
    videoUrl?: string
  }
}) {
  if (project.videoUrl) {
    return (
      <div className="mx-2.5 w-[260px] flex-shrink-0 overflow-hidden rounded-xl border border-border/20 bg-card/30 md:w-[300px]">
        <div className="aspect-[4/3] overflow-hidden">
          <iframe
            src={project.videoUrl}
            title={project.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
        <div className="px-4 py-3">
          <h4 className="text-sm font-semibold text-foreground">{project.title}</h4>
        </div>
      </div>
    )
  }

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group mx-2.5 w-[260px] flex-shrink-0 overflow-hidden rounded-xl border border-border/20 bg-card/30 transition-colors duration-300 hover:border-primary/20 md:w-[300px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          loading="lazy"
          quality={60}
          sizes="(max-width: 768px) 260px, 300px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="px-4 py-3">
        <h4 className="text-sm font-semibold text-foreground">{project.title}</h4>
      </div>
    </Link>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="relative">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary/50" />
            Nossos Trabalhos
            <span className="h-px w-6 bg-primary/50" />
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold text-foreground md:text-5xl">
            Portfolio
          </h2>
        </div>

        {/* Marquee rows per category */}
        <div className="mt-14 space-y-8">
          {categories.map((category) => {
            const allProjects = getProjectsByCategory(category.id)
            if (allProjects.length === 0) return null
            
            // Limit to first 8 projects for performance
            const projects = allProjects.slice(0, 8)

            const animClass =
              category.direction === "left"
                ? "animate-marquee-left"
                : "animate-marquee-right"

            return (
              <div key={category.id}>
                {/* Category label */}
                <div className="mx-auto mb-5 flex max-w-7xl items-center gap-3 px-6 lg:px-8">
                  <category.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {category.label}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
                </div>

                {/* Marquee track */}
                <div className="marquee-row relative overflow-hidden">
                  {/* Fade edges */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

                  <div className={`flex w-max ${animClass}`}>
                    {/* Duplicate items for seamless loop */}
                    {[...projects, ...projects].map((project, i) => (
                      <MarqueeCard
                        key={`${project.slug}-${i}`}
                        project={project}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA button */}
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:bg-[hsl(190,100%,45%)] hover:shadow-lg hover:shadow-primary/30"
          >
            Ver Portfolio Completo
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
