'use client'

import { motion } from 'framer-motion'

export function Philosophy() {
  const values = [
    {
      title: 'Investigación Humana',
      description: 'Estudio profundo del comportamiento humano y la transformación conductual a través de métodos científicos y empáticos.',
      color: 'bg-[#4A5D43]/20'
    },
    {
      title: 'Empatía Aplicada',
      description: 'Desarrollo de la capacidad empática como herramienta real de intervención social y reinserción humana.',
      color: 'bg-[#5A6B5F]/20'
    },
    {
      title: 'Compasión Activa',
      description: 'La compasión como metodología transformadora en contextos de vulnerabilidad y exclusión social.',
      color: 'bg-[#7A8B82]/20'
    },
    {
      title: 'Conciencia Social',
      description: 'Integración del mindfulness y la meditación como herramientas de cambio conductual y reintegración.',
      color: 'bg-[#8B7966]/20'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.15,
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
    <section id="philosophy" className="section-padding section-warm">
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
              Nuestra <span className="text-[#4A5D43]">Metodología</span>
            </h2>
            <p className="body-text max-w-3xl mx-auto">
              Estos son los pilares que fundamentan mi práctica de acompañamiento, los valores que guían cada encuentro y cada conversación.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center"
              >
                <div className={`${value.color} p-8 h-full transition-all duration-500 hover:shadow-lg`}>
                  <h3 className="heading-serif-small text-[#4A5D43] mb-4">
                    {value.title}
                  </h3>
                  <p className="body-text text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-[#F5F3F0]/30 p-12 text-center"
          >
            <h3 className="heading-serif-small text-[#1A1A1A] mb-6">
              El Proceso de Transformación
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-warm-brown/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-warm-brown font-serif text-lg">1</span>
                </div>
                <h4 className="font-medium text-charcoal">Encuentro Inicial</h4>
                <p className="text-sm text-gray-600">
                  Conocemos tus necesidades y establecemos los objetivos del proceso.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-warm-brown/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-warm-brown font-serif text-lg">2</span>
                </div>
                <h4 className="font-medium text-charcoal">Exploración Profunda</h4>
                <p className="text-sm text-gray-600">
                  Espacio seguro para explorar emociones y descubrir insights.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-warm-brown/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-warm-brown font-serif text-lg">3</span>
                </div>
                <h4 className="font-medium text-charcoal">Integración</h4>
                <p className="text-sm text-gray-600">
                  Integras los aprendizajes y herramientas en tu vida cotidiana.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
