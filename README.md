# Kainos — Helado Artesanal

Landing page para **Kainos | Helado Artesanal**, construida con **Next.js** (App Router).

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel

1. Conectá el repositorio en [vercel.com](https://vercel.com)
2. Vercel detecta **Next.js** automáticamente
3. No hace falta configurar nada extra:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

## Estructura

```
app/
  layout.tsx      # Layout raíz y fuentes
  page.tsx        # Página principal
  globals.css     # Estilos globales
components/       # Secciones de la landing
```

## Secciones

1. **Hero** — Navegación y presentación
2. **Tradición que se disfruta** — Historia de la marca
3. **Pequeños rituales** — Helado, tés, café y pastelería
4. **Encontranos** — Locales
5. **Tu pausa te espera** — CTA final y footer
