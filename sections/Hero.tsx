'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-warm-beige via-off-white to-soft-gray opacity-60"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="heading-serif text-4xl md:text-6xl lg:text-7xl text-charcoal mb-6 text-balance"
        >
          El Arte de
          <br />
          <span className="text-warm-brown">Escuchar</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="body-text text-lg md:text-xl lg:text-2xl mb-8 text-balance max-w-2xl mx-auto"
        >
          Acompañamiento humano para el crecimiento personal y el bienestar emocional a través de la escucha activa y el diálogo profundo.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Reserva una sesión
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            Descubre más
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-charcoal opacity-60"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-off-white to-transparent z-0"></div>
    </section>
  )
}
