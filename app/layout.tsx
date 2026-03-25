import React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import WhatsAppButton from "@/components/whatsapp-button"
import WhatsAppFloat from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "Arfen Agencia - Eleve Sua Empresa a Um Novo Nivel de Autoridade",
  description:
    "Transformamos sua presenca digital e elevamos sua marca a um novo nivel de autoridade no mercado.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
