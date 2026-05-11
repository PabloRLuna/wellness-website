import { Navigation } from '@/components/Navigation'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'
import { Philosophy } from '@/sections/Philosophy'
import { Testimonials } from '@/sections/Testimonials'
import { Blog } from '@/sections/Blog'
import { CTA } from '@/sections/CTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </main>
  )
}
