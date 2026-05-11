import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic background with atmospheric gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2A2522] to-[#3A3532]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26, 26, 26, 0.3)] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(42, 37, 34, 0.5)]" />
        
        {/* Subtle atmospheric lighting */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4A5D43]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6B7D6F]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B7966]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Main headline - cinematic and emotional */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#FAFAF9] mb-8 leading-tight tracking-tight">
              <span className="block">Oxymoron</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-[#A8B5AD] mt-4 font-light">
                La empatía como herramienta de transformación humana
              </span>
            </h1>

            {/* Subtitle with intellectual depth */}
            <p className="text-lg md:text-xl lg:text-2xl text-[#9B9590] max-w-3xl mx-auto leading-relaxed font-light">
              Una plataforma contemporánea de investigación y divulgación sobre neurocriminología, 
              compasión aplicada y reinserción humana a través de la escucha profunda y el mindfulness.
            </p>
          </div>

          {/* Emotional tagline */}
          <div className="space-y-2">
            <p className="text-sm text-[#A8B5AD]/80 italic font-light tracking-wide">
              "Comprender también es transformar.
              <br />
              La empatía como herramienta de reinserción."
            </p>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <button className="bg-[#4A5D43] text-[#FAFAF9] px-10 py-4 rounded-none font-medium transition-all duration-700 hover:bg-[#1A1A1A] hover:shadow-lg hover:-translate-y-px border-0">
              Explora la investigación
            </button>
            <button className="border border-[#D4D0CC] text-[#FAFAF9] px-10 py-4 rounded-none font-medium transition-all duration-700 hover:border-[#FAFAF9] hover:bg-[#FAFAF9] hover:text-[#1A1A1A]">
              Conoce los proyectos
            </button>
          </div>
        </div>

        {/* Cinematic scroll indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
          <p className="text-sm text-[#A8B5AD]/60 font-light tracking-widest uppercase">
            Descubrir
          </p>
          <div className="text-[#A8B5AD]/40 animate-bounce">
            <ArrowDown size={20} strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* Atmospheric edge lighting */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A8B5AD]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#A8B5AD]/30 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#A8B5AD]/30 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#A8B5AD]/30 to-transparent" />
    </section>
  )
}
