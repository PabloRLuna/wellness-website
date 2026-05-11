import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'El Arte de Escuchar - Bienestar Emocional',
  description: 'Acompañamiento humano para el crecimiento personal y el bienestar emocional a través de la escucha activa',
  openGraph: {
    title: 'El Arte de Escuchar - Bienestar Emocional',
    description: 'Acompañamiento humano para el crecimiento personal y el bienestar emocional',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Arte de Escuchar - Bienestar Emocional',
    description: 'Acompañamiento humano para el crecimiento personal y el bienestar emocional',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
