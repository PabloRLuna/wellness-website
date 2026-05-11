'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Calendar, Clock } from 'lucide-react'

export function Blog() {
  const posts = [
    {
      title: 'El Poder de la Escucha Activa',
      excerpt: 'Descubre cómo la escucha profunda puede transformar tus relaciones y tu vida interior.',
      date: '15 de noviembre, 2024',
      readTime: '5 min',
      category: 'Bienestar Emocional'
    },
    {
      title: 'Creando Espacios Seguros',
      excerpt: 'La importancia de construir confianza y vulnerabilidad en el proceso de acompañamiento.',
      date: '8 de noviembre, 2024',
      readTime: '7 min',
      category: 'Relaciones'
    },
    {
      title: 'Diálogo Consciente',
      excerpt: 'Herramientas prácticas para comunicarte de manera más auténtica y presente.',
      date: '1 de noviembre, 2024',
      readTime: '6 min',
      category: 'Comunicación'
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
    <section id="blog" className="section-padding bg-white">
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
              Reflexiones y <span className="text-warm-brown">Artículos</span>
            </h2>
            <p className="body-text max-w-3xl mx-auto">
              Compartiendo ideas, herramientas y reflexiones sobre el arte de escuchar, el crecimiento personal y el bienestar emocional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                variants={itemVariants}
                className="h-full"
              >
                <Card hover className="h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-4">
                      <span className="text-sm text-sage-green font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <CardTitle className="mb-4 flex-grow">
                      {post.title}
                    </CardTitle>
                    
                    <CardDescription className="mb-6 flex-grow">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Button variant="secondary" size="sm" className="w-full">
                      Leer más
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
            <Button variant="primary" size="lg">
              Ver todos los artículos
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
