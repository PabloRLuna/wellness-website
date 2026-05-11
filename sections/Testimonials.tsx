'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'

export function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      text: 'Encontrar un espacio donde poder ser yo misma sin juicios ha sido transformador. La escucha profunda me ayudó a reconectar con mi voz interior.',
      role: 'Profesional'
    },
    {
      name: 'Carlos Ruiz',
      text: 'Cada sesión es un viaje hacia mí mismo. Aprendí a escuchar mis emociones y a confiar en mi sabiduría interna.',
      role: 'Emprendedor'
    },
    {
      name: 'Ana Martínez',
      text: 'El acompañamiento ha sido una guía invaluable en mi proceso de crecimiento. Siento más paz y claridad en mi vida.',
      role: 'Artista'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2,
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
    <section id="testimonials" className="section-padding bg-off-white">
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
              Experiencias <span className="text-warm-brown">Compartidas</span>
            </h2>
            <p className="body-text max-w-3xl mx-auto">
              Las voces de quienes han confiado en este proceso de acompañamiento y han encontrado en la escucha profunda un camino hacia el bienestar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="h-full"
              >
                <Card hover className="h-full">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-warm-brown text-lg">★</span>
                          ))}
                        </div>
                        <p className="body-text italic leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-soft-gray">
                      <p className="font-medium text-charcoal">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
