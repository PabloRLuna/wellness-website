'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Heart, Users, BookOpen, MessageCircle } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Investigación Neurocriminológica',
      description: 'Estudios académicos y aplicados sobre el comportamiento humano, la empatía y la transformación conductual en contextos complejos.',
      features: ['Análisis profundo', 'Metodología científica', 'Aplicación práctica', 'Resultados medibles']
    },
    {
      icon: Users,
      title: 'Programas de Reinserción',
      description: 'Desarrollo de proyectos de empatía y compasión aplicados en centros penitenciarios para facilitar la transformación humana.',
      features: ['Diseño personalizado', 'Acompañamiento continuo', 'Evaluación de impacto', 'Seguimiento longitudinal']
    },
    {
      icon: BookOpen,
      title: 'Mindfulness Aplicado',
      description: 'Técnicas de meditación y conciencia plena adaptadas a contextos de vulnerabilidad y transformación social.',
      features: ['Protocolos validados', 'Adaptación contextual', 'Práctica guiada', 'Integración institucional']
    },
    {
      icon: MessageCircle,
      title: 'Formación en Empatía',
      description: 'Programas educativos para desarrollar la capacidad empática como herramienta profesional de intervención humana.',
      features: ['Métodos probados', 'Evaluación competencial', 'Certificación profesional', 'Aplicación real']
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
    <section id="services" className="section-padding section-sage">
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
                <Card hover className="h-full" variant="sage">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <service.icon 
                        size={32} 
                        className="text-deep-olive mb-4"
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
            <div className="inline-block p-8 card-atmospheric">
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
