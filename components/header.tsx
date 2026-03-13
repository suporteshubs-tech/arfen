"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/20 bg-background/80 py-3 backdrop-blur-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group relative flex items-center">
          <Image
            src="/logo-arfen.png"
            alt="Arfen Agencia"
            width={200}
            height={65}
            className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 md:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {[
            { href: "/", label: "Inicio" },
            { href: "/#portfolio", label: "Portfolio" },
            { href: "/depoimentos", label: "Depoimentos" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="https://api.whatsapp.com/send/?phone=5511992580843&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
          >
            Fale Conosco
          </Link>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-strong border-t border-border/20 px-6 py-8">
          <nav className="flex flex-col gap-6">
            {[
              { href: "/", label: "Inicio" },
              { href: "/#portfolio", label: "Portfolio" },
              { href: "/depoimentos", label: "Depoimentos" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://api.whatsapp.com/send/?phone=5511992580843&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary px-8 py-3 text-center text-sm font-semibold text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Fale Conosco
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
