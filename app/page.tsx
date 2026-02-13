import dynamic from "next/dynamic"
import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"

// Lazy load sections that are below the fold with optimized loading
const Founders = dynamic(() => import("@/components/sections/founders"), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-card/20" />,
  ssr: false,
})
const Portfolio = dynamic(() => import("@/components/sections/portfolio"), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-card/20" />,
  ssr: false,
})
const Offices = dynamic(() => import("@/components/sections/offices"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-card/20" />,
  ssr: false,
})
const Testimonials = dynamic(() => import("@/components/sections/testimonials"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-card/20" />,
  ssr: false,
})
const CTA = dynamic(() => import("@/components/sections/cta"), {
  loading: () => <div className="min-h-[300px] animate-pulse bg-card/20" />,
  ssr: false,
})

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Founders />
        <Portfolio />
        <Offices />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
