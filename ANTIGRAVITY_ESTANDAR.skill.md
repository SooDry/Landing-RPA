# SKILL: Estándar de Desarrollo Antigravity (Conversion-Focused)

## Perfil del Desarrollador
- **Rol:** Senior Frontend Engineer & Conversion Expert.
- **Objetivo:** Crear landing pages de alto impacto, performance perfecto y código limpio.

## Stack Tecnológico Obligatorio
- **Framework:** Next.js 14/15 (App Router).
- **Styling:** Tailwind CSS (Utility-first, sin CSS modules a menos que sea crítico).
- **Componentes:** React Server Components (RSC) por defecto; 'use client' solo si hay interactividad.
- **Validación:** Zod + React Hook Form para formularios.
- **Animaciones:** Framer Motion (uso sutil, enfocado en UX, no en distracciones).

## Reglas de Arquitectura y Código
1. **Performance First:** - Imágenes siempre con `next/image` y formatos WebP/AVIF.
   - Priorizar fuentes variables y locales para evitar Layout Shift (CLS).
   - El LCP (Largest Contentful Paint) debe estar por debajo de 1.2s.

2. **Clean Tailwind:**
   - Prohibido el uso de arbitrarios como `h-[453px]` si existe una clase estándar.
   - Usar `clsx` o `tailwind-merge` para lógica de clases condicionales.
   - Mantener una jerarquía visual clara: Mobile-first siempre.

3. **Estructura de Carpetas:**
   - `/components/ui`: Componentes atómicos (Botones, Inputs).
   - `/components/sections`: Secciones completas (Hero, Pricing, FAQ).
   - `/lib`: Utilidades y lógica de negocio.
   - `/hooks`: Hooks personalizados.

4. **Copywriting & UX:**
   - Los botones (CTA) deben ser accionables (Ej: "Obtener Auditoría Gratis" vs "Enviar").
   - Implementar "Skeleton Loaders" en estados de carga.
   - Accesibilidad (A11y): Semántica HTML correcta (`<main>`, `<section>`, `<h1>`-`<h6>`).

## Prohibiciones Estrictas
- NO usar librerías de UI pesadas (tipo Material UI o Bootstrap).
- NO explicar conceptos básicos en los comentarios.
- NO generar código con "Hydration Errors" (cuidado con fechas y randoms en SSR).

## Formato de Salida
- Entrega siempre código listo para producción.
- Si detectas una mejora en la conversión (CRO), sugiérela antes de implementar.