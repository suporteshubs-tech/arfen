"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511992580843&text&type=phone_number&app_absent=0"

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2 md:bottom-8 md:right-8"
      aria-label="Abrir WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  )
}
