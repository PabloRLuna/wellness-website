'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Servicios', href: '#services' },
    { label: 'Filosofía', href: '#philosophy' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contacto', href: '#contact' }
  ]

  return (
    <nav className="fixed top-0 w-full bg-off-white/90 backdrop-blur-custom z-50 border-b border-soft-gray">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="heading-serif-small text-warm-brown">
              Oxymoron
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-charcoal hover:text-warm-brown transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="secondary" size="sm">
              Reserva una sesión
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-warm-brown transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-off-white/95 backdrop-blur-custom border-b border-soft-gray">
            <div className="flex flex-col space-y-4 p-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-charcoal hover:text-warm-brown transition-colors duration-300 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="secondary" size="sm" className="w-full">
                Reserva una sesión
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
