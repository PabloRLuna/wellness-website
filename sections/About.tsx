'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'

export function About() {
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
    hidden: { opacity: 0, y: 50 },
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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="heading-serif mb-6">
              Sobre <span className="text-warm-brown">Mi Trabajo</span>
            </h2>
            <p className="body-text max-w-3xl mx-auto">
              Más de una década acompañando personas en su camino hacia el bienestar emocional y el crecimiento personal a través de la escucha profunda y el diálogo consciente.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="prose prose-lg">
                <h3 className="heading-serif-small text-charcoal mb-4">
                  Mi Filosofía
                </h3>
                <p className="body-text mb-6">
                  Creo que cada persona tiene dentro de sí la sabiduría necesaria para encontrar su propio camino. Mi rol es crear un espacio seguro donde esa voz interior pueda emerger y expresarse con libertad.
                </p>
                <p className="body-text mb-6">
                  La escucha activa no es solo oír palabras, es comprender el alma detrás de ellas, reconocer las emociones que nos mueven y acompañar con presencia auténtica en el proceso de transformación.
                </p>
                <p className="body-text">
                  Cada sesión es un encuentro único, un diálogo sincero donde la confianza y el respeto mutuo son el fundamento para el crecimiento y la sanación.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <Card className="p-8 bg-warm-beige/30">
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-serif text-xl text-warm-brown font-medium">
                      Mi Enfoque
                    </h4>
                    <ul className="space-y-3 body-text">
                      <li className="flex items-start">
                        <span className="text-sage-green mr-3">•</span>
                        Escucha profunda sin juicio
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-green mr-3">•</span>
                        Diálogo consciente y presente
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-green mr-3">•</span>
                        Acompañamiento respetuoso
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-green mr-3">•</span>
                        Espacio seguro para la vulnerabilidad
                      </li>
                      <li className="flex items-start">
                        <span className="text-sage-green mr-3">•</span>
                        Integración mente-cuerpo-emoción
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-soft-gray">
                    <p className="text-sm text-gray-600 italic">
                      "La calidad de tu atención determina la calidad de tu vida. Cuando aprendes a escuchar profundamente, comienzas a vivir profundamente."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
