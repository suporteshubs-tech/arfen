import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DepoimentosContent from "@/components/depoimentos-content"

export const metadata: Metadata = {
  title: "Depoimentos - Arfen Agencia",
  description: "Veja o que nossos clientes dizem sobre nosso trabalho e resultados.",
}

export default function DepoimentosPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <DepoimentosContent />
      </main>
      <Footer />
    </>
  )
}
