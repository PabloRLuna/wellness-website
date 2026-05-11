/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Atmospheric neutrals
        'off-white': '#FAFAF9',
        'warm-sand': '#F5F3F0',
        'smoke-beige': '#E8E6E3',
        'stone-gray': '#D4D0CC',
        
        // Sophisticated greens
        'deep-olive': '#4A5D43',
        'dark-sage': '#5A6B5F',
        'muted-sage': '#7A8B82',
        'sage-mist': '#A8B5AD',
        'olive-dust': '#C5D0C8',
        
        // Charcoal and warm darks
        'charcoal': '#1A1A1A',
        'warm-charcoal': '#2A2522',
        'deep-stone': '#3A3532',
        'smoke-gray': '#6B645F',
        'mist-gray': '#9B9590',
        
        // Accent colors
        'warm-accent': '#8B7966',
        'olive-accent': '#6B7D6F',
        
        // Atmospheric overlays
        'dark-overlay': 'rgba(26, 26, 26, 0.7)',
        'warm-overlay': 'rgba(42, 37, 34, 0.6)',
        'sage-overlay': 'rgba(90, 107, 95, 0.5)',
        'mist-overlay': 'rgba(244, 242, 239, 0.8)',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-serif-small': ['1.75rem', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        'heading-serif-medium': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
        'heading-serif-large': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.045em' }],
        'heading-serif-xlarge': ['5rem', { lineHeight: '1.0', letterSpacing: '-0.05em' }],
        'body-text': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0.005em' }],
        'body-text-small': ['0.9375rem', { lineHeight: '1.6', letterSpacing: '0.005em' }],
        'body-text-large': ['1.25rem', { lineHeight: '1.7', letterSpacing: '0.005em' }],
      },
      spacing: {
        'section-padding': '8rem',
        'section-padding-sm': '6rem',
        'container-padding': '2rem',
        'container-padding-lg': '4rem',
      },
      maxWidth: {
        'container-custom': '1400px',
        'text-content': '680px',
        'text-content-lg': '800px',
      },
      animation: {
        'fade-in-slow': 'fadeInSlow 2s ease-out',
        'fade-in-cinematic': 'fadeInCinematic 3s ease-out',
        'slide-up-slow': 'slideUpSlow 1.5s ease-out',
        'slide-up-cinematic': 'slideUpCinematic 2s ease-out',
        'scale-in-subtle': 'scaleInSubtle 1.2s ease-out',
        'reveal-slow': 'revealSlow 2.5s ease-out',
      },
      keyframes: {
        fadeInSlow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInCinematic: {
          '0%': { opacity: '0', transform: 'scale(1.02)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUpSlow: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpCinematic: {
          '0%': { opacity: '0', transform: 'translateY(60px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        scaleInSubtle: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        revealSlow: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '50%': { opacity: '0.7' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        'custom': '12px',
        'strong': '16px',
      },
      boxShadow: {
        'atmospheric': '0 4px 24px rgba(26, 26, 26, 0.08)',
        'atmospheric-lg': '0 8px 32px rgba(26, 26, 26, 0.12)',
        'soft-glow': '0 2px 16px rgba(139, 121, 102, 0.15)',
        'sage-glow': '0 2px 16px rgba(107, 125, 111, 0.12)',
        'cinematic': '0 20px 60px rgba(26, 26, 26, 0.15)',
      },
      backgroundImage: {
        'atmospheric-gradient': 'linear-gradient(180deg, rgba(26, 26, 26, 0.4) 0%, rgba(42, 37, 34, 0.6) 100%)',
        'warm-gradient': 'linear-gradient(135deg, rgba(245, 243, 240, 0.9) 0%, rgba(232, 230, 227, 0.8) 100%)',
        'sage-gradient': 'linear-gradient(135deg, rgba(90, 107, 95, 0.1) 0%, rgba(122, 139, 130, 0.05) 100%)',
        'charcoal-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #2A2522 100%)',
        'subtle-grain': 'radial-gradient(circle at 1px 1px, rgba(26, 26, 26, 0.15) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
