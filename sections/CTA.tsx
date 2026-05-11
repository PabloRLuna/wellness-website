'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.3,
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
    <section id="contact" className="section-padding bg-warm-brown">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.h2
            variants={itemVariants}
            className="heading-serif mb-6"
          >
            Comienza tu Camino de <span className="text-off-white">Transformación</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="body-text text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Estoy aquí para acompañarte en este proceso de descubrimiento y crecimiento. Juntos crearemos un espacio seguro donde tu voz interior pueda florecer.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="primary" size="lg" className="bg-white text-warm-brown hover:bg-off-white">
              Reserva tu primera sesión
            </Button>
            <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-warm-brown">
              Agenda una consulta gratuita
            </Button>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-sm text-white/70">
              Sin compromiso. Confidencialidad absoluta. Espacio seguro para tu crecimiento.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
