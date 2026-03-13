import dynamic from "next/dynamic"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"

// Lazy load sections that are below the fold
const Founders = dynamic(() => import("@/components/sections/founders"), {
  loading: () => <div className="min-h-[600px]" />,
})
const Portfolio = dynamic(() => import("@/components/sections/portfolio"), {
  loading: () => <div className="min-h-[600px]" />,
})
const Offices = dynamic(() => import("@/components/sections/offices"), {
  loading: () => <div className="min-h-[400px]" />,
})
const Testimonials = dynamic(() => import("@/components/sections/testimonials"), {
  loading: () => <div className="min-h-[400px]" />,
})
const CTA = dynamic(() => import("@/components/sections/cta"), {
  loading: () => <div className="min-h-[300px]" />,
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
