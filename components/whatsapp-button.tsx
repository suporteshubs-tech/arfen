import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511992580843&text&type=phone_number&app_absent=0"

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 hover:bg-green-600"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
