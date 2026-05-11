'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 2.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const arrowVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic background with atmospheric gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-warm-charcoal to-deep-stone" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-overlay via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-warm-overlay" />
        
        {/* Subtle atmospheric lighting */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-deep-olive/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-olive-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="space-y-8">
          {/* Main headline - cinematic and emotional */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <motion.h1
              variants={textVariants}
              className="font-serif heading-serif-xlarge text-off-white mb-8 leading-tight tracking-tight"
            >
              <span className="block">Oxymoron</span>
              <span className="block heading-serif-medium text-sage-mist mt-4 font-light">
                Donde la contradicción se transforma en sabiduría
              </span>
            </motion.h1>

            {/* Subtitle with emotional depth */}
            <motion.p
              variants={textVariants}
              className="body-text-large text-mist-gray max-w-3xl mx-auto leading-relaxed font-light"
            >
              Un espacio contemplativo para explorar la belleza de las contradicciones humanas, 
              encontrar calma en el caos y descubrir la profunda sabiduría que habita en nuestros silencios.
            </motion.p>
          </motion.div>

          {/* Emotional tagline */}
          <motion.div
            variants={itemVariants}
            className="space-y-2"
          >
            <motion.p
              variants={textVariants}
              className="body-text-small text-sage-mist/80 italic font-light tracking-wide"
            >
              "En la tensión entre luz y oscuridad, 
              <br />
              encontramos nuestra verdadera naturaleza"
            </motion.p>
          </motion.div>

          {/* Call-to-action buttons */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-off-white border-0"
            >
              Comienza tu viaje interior
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline text-off-white border-stone-gray/50 hover:border-off-white"
            >
              Explora el espacio
            </motion.button>
          </motion.div>
        </div>

        {/* Cinematic scroll indicator */}
        <motion.div
          variants={arrowVariants}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
        >
          <motion.p
            variants={textVariants}
            className="body-text-small text-sage-mist/60 font-light tracking-widest uppercase"
          >
            Descubrir
          </motion.p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-sage-mist/40"
          >
            <ArrowDown size={20} strokeWidth={1} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Atmospheric edge lighting */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sage-mist/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sage-mist/30 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-sage-mist/30 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-sage-mist/30 to-transparent" />
    </section>
  )
}
