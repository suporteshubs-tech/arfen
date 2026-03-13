"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://api.whatsapp.com/send/?phone=5511992580843&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </Link>
  )
}
