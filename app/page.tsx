import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/sections/hero"
import Founders from "@/components/sections/founders"
import Services from "@/components/sections/services"
import Portfolio from "@/components/sections/portfolio"
import Offices from "@/components/sections/offices"
import Testimonials from "@/components/sections/testimonials"
import CTA from "@/components/sections/cta"

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
