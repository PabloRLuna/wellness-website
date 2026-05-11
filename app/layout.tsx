import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oxymoron - Neurocriminología y Empatía',
  description: 'Plataforma contemporánea de investigación y divulgación sobre neurocriminología, compasión aplicada y reinserción humana a través de la escucha profunda',
  openGraph: {
    title: 'Oxymoron - Neurocriminología y Empatía',
    description: 'Investigación humana y transformación social a través de la empatía, compasión y mindfulness aplicado',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oxymoron - Neurocriminología y Empatía',
    description: 'La empatía y la compasión como herramientas reales de transformación humana',
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
