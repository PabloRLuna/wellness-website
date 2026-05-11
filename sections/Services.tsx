'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Heart, Users, BookOpen, MessageCircle } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Sesiones Individuales',
      description: 'Acompañamiento personalizado en un espacio seguro para explorar tus emociones y encontrar claridad en tu camino.',
      features: ['Escucha profunda', 'Diálogo consciente', 'Espacio seguro', 'Confidencialidad absoluta']
    },
    {
      icon: Users,
      title: 'Talleres Grupales',
      description: 'Experiencias compartidas donde aprenderemos juntos el arte de escuchar y comunicarnos de manera más auténtica.',
      features: ['Pequeños grupos', 'Experiencia práctica', 'Ambiente seguro', 'Conexión comunitaria']
    },
    {
      icon: BookOpen,
      title: 'Mentoría Personal',
      description: 'Un proceso continuo de crecimiento y desarrollo personal con acompañamiento constante y herramientas prácticas.',
      features: ['Proceso continuo', 'Herramientas prácticas', 'Seguimiento personal', 'Objetivos claros']
    },
    {
      icon: MessageCircle,
      title: 'Escucha Activa',
      description: 'Aprende a escuchar profundamente a los demás y a ti mismo, transformando tus relaciones y tu vida.',
      features: ['Técnicas avanzadas', 'Práctica guiada', 'Aplicación real', 'Feedback personalizado']
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
    <section id="services" className="section-padding bg-off-white">
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
              Mis <span className="text-warm-brown">Servicios</span>
            </h2>
            <p className="body-text max-w-3xl mx-auto">
              Ofrezco diferentes espacios de acompañamiento adaptados a tus necesidades, siempre con el mismo compromiso: escucha profunda, presencia auténtica y respeto absoluto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="h-full"
              >
                <Card hover className="h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <service.icon 
                        size={32} 
                        className="text-warm-brown mb-4"
                      />
                      <CardTitle>
                        {service.title}
                      </CardTitle>
                      <CardDescription>
                        {service.description}
                      </CardDescription>
                    </div>
                    
                    <div className="mb-6 flex-grow">
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <span className="text-sage-green mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="secondary" size="sm" className="w-full">
                      Más información
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="inline-block p-8 bg-white rounded-none shadow-sm">
              <h3 className="heading-serif-small text-charcoal mb-4">
                ¿No estás seguro por dónde empezar?
              </h3>
              <p className="body-text mb-6">
                Podemos tener una primera conversación sin compromiso para encontrar el espacio que mejor se adapte a ti.
              </p>
              <Button variant="primary" size="lg">
                Agenda una consulta gratuita
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
