"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Palette, BookOpen, PenTool, Video, Globe, ImagePlay, Sparkles } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import type { ProjectCategory } from "@/lib/portfolio-data"

const allCategories = [
  { id: "artes" as ProjectCategory, label: "Artes", icon: Palette },
  { id: "capas" as ProjectCategory, label: "Capas", icon: BookOpen },
  { id: "logos" as ProjectCategory, label: "Logos", icon: PenTool },
  { id: "videos" as ProjectCategory, label: "Videos", icon: Video },
  { id: "sites" as ProjectCategory, label: "Sites", icon: Globe },
  { id: "thumbnail" as ProjectCategory, label: "Thumbnail", icon: ImagePlay },
  { id: "ia" as ProjectCategory, label: "IA", icon: Sparkles },
]

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<ProjectCategory | "todos">("todos")

  const filteredProjects = activeTab === "todos" ? projects : projects.filter((p) => p.category === activeTab)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <section className="relative py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="animate-mesh absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-6 bg-primary/50" />
                Portfolio Completo
                <span className="h-px w-6 bg-primary/50" />
              </span>
              <h1 className="mt-5 font-display text-5xl font-bold text-foreground md:text-6xl">
                Nossos Projetos
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Explore todos os projetos realizados pela Arfen Agencia
              </p>
            </div>

            {/* Tabs */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setActiveTab("todos")}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeTab === "todos"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "border border-border/50 bg-card/30 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                Todos
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                    activeTab === cat.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "border border-border/50 bg-card/30 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <cat.icon className="h-4 w-4" />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Portfolio grid */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProjects.map((project) =>
                project.videoUrl ? (
                  <div
                    key={project.slug}
                    className="gradient-border glow-card group overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <iframe
                        src={project.videoUrl}
                        title={project.title}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full border-0"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold text-foreground">{project.title}</h3>
                      <div className="mt-3 h-px w-8 rounded-full bg-primary/30" />
                    </div>
                  </div>
                ) : (
                  <Link
                    key={project.slug}
                    href={`/portfolio/${project.slug}`}
                    className="gradient-border glow-card group overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold text-foreground">{project.title}</h3>
                      <div className="mt-3 h-px w-8 rounded-full bg-primary/30 transition-all duration-500 group-hover:w-full group-hover:bg-primary/50" />
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
