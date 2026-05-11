'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <footer className="bg-charcoal text-off-white section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <motion.div variants={itemVariants}>
              <h3 className="heading-serif-small text-warm-brown mb-4">
                El Arte de Escuchar
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Acompañamiento humano para el crecimiento personal y el bienestar emocional a través de la escucha profunda.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-medium mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sesiones Individuales</li>
                <li>Talleres Grupales</li>
                <li>Mentoría Personal</li>
                <li>Escucha Activa</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-medium mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  hola@elartedeescuchar.es
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +34 600 000 000
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  Madrid, España
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-medium mb-4">Sígueme</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-warm-brown transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-warm-brown transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-gray-700 text-center text-sm text-gray-400"
          >
            <p>&copy; 2024 El Arte de Escuchar. Todos los derechos reservados.</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
