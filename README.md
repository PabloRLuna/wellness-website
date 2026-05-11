# El Arte de Escuchar - Sitio Web de Bienestar Emocional

Una página web moderna, elegante y minimalista para acompañamiento humano y bienestar emocional, inspirada en la experiencia visual de "El Arte de Escuchar".

## 🌐 Vista Previa

El sitio web está configurado para desarrollo local y despliegue automático en GitHub Pages.

### 🚀 Ejecutar Localmente

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## 📦 Despliegue en GitHub Pages

### Opción 1: Despliegue Automático (Recomendado)

1. **Crear Repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USERNAME/wellness-website.git
   git push -u origin main
   ```

2. **Configurar GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Ve a `Settings` → `Pages`
   - En `Source`, selecciona `GitHub Actions`

3. **Activar Actions**
   - Ve a `Actions` → `General`
   - Habilita `Allow GitHub Actions` y `Allow write permissions`

4. **¡Listo!** Cada vez que hagas push a la rama `main`, el sitio se desplegará automáticamente.

### Opción 2: Despliegue Manual

1. **Construir el sitio**
   ```bash
   npm run build
   ```

2. **Subir a GitHub Pages**
   - Copia la carpeta `out/` a la rama `gh-pages`
   - Configura GitHub Pages para servir desde la rama `gh-pages`

## 🎨 Características

- **Diseño Minimalista**: Inspirado en wellness premium y marcas de lujo
- **Paleta de Colores**: Beige cálido, blanco roto, gris suave, terracota clara, verde salvia
- **Tipografía**: Playfair Display (títulos) + Inter (cuerpo)
- **Animaciones Suaves**: Framer Motion para microinteracciones
- **Totalmente Responsive**: Mobile-first design
- **SEO Optimizado**: Metadata y Open Graph configurados

## 📁 Estructura del Proyecto

```
wellness-website/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Homepage
├── components/             # Componentes reutilizables
│   ├── ui/               # Componentes base (Button, Card)
│   ├── Navigation.tsx    # Navegación principal
│   └── Footer.tsx        # Footer
├── sections/              # Secciones de la página
│   ├── Hero.tsx          # Hero principal
│   ├── About.tsx         # Sobre mí
│   ├── Services.tsx      # Servicios
│   ├── Philosophy.tsx    # Filosofía
│   ├── Testimonials.tsx  # Testimonios
│   ├── Blog.tsx          # Blog preview
│   └── CTA.tsx           # Llamada a la acción
├── lib/                   # Utilidades
│   └── utils.ts          # Funciones helper
├── public/               # Assets estáticos
└── styles/               # Estilos adicionales
```

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Despliegue**: GitHub Pages

## 🎯 Sections Incluidas

1. **Hero**: Landing emocional con animaciones
2. **About**: Layout editorial con filosofía personal
3. **Services**: Cards elegantes para servicios
4. **Philosophy**: Bloques visuales de valores
5. **Testimonials**: Experiencias de clientes
6. **Blog**: Preview de artículos
7. **CTA**: Llamada a la acción final
8. **Footer**: Información de contacto y redes

## 📝 Personalización

### Cambiar Contenido
- Editar archivos en `/sections/` para modificar textos
- Reemplazar imágenes en `/public/images/`
- Ajustar colores en `tailwind.config.js`

### Agregar Funcionalidades
- Formularios de contacto
- Sistema de reservas
- Blog con CMS
- Integración con calendarios

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Servidor de producción
npm run lint         # Linting del código
npm run deploy       # Script de despliegue
```

## 📄 Licencia

Este proyecto es para fines demostrativos. Siéntete libre de usarlo como base para tu propio proyecto de bienestar emocional.

---

**URL del Sitio**: `https://TU_USERNAME.github.io/wellness-website/`
