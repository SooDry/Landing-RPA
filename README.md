# Softtek RPA Landing Page

Este proyecto es una aplicación web responsiva construida con **Next.js (App Router)** y **TailwindCSS**, diseñada para servir como la Landing Page principal para las soluciones de Automatización RPA e Inteligencia Artificial de Softtek.

## Última Actualización

### Implementación de Internacionalización (i18n) - Abril 2026
Se ha completado la arquitectura base para dar soporte multi-idioma (Español e Inglés) a toda la aplicación, siguiendo los estándares de Next.js. Las mejoras incluyen:

- **Sistema de Rutas Dinámicas**: Refactorización estructural migrando archivos clave a `src/app/[lang]/` para manejar el contexto regional en la URL (`/es` y `/en`).
- **Middleware de Redirección Automática**: Se ha añadido `src/middleware.ts` para capturar visitantes en la ruta raíz (`/`) y redirigirlos apropiadamente según preferencia.
- **Diccionarios Dinámicos**: Todos los textos front-end de la primera mitad del sitio se han abstraído en un esquema de diccionarios dentro de `src/dictionaries/` (`es.json` y `en.json`). Se inyectan en los componentes utilizando `getDictionary()`.
- **Selector Activo de Idiomas**: Los botones en la cabecera ahora generan migraciones interactivas e incrustadas de URL sin recargas abruptas mediante el uso estratégico de hooks nativos del cliente router.
- **Next.js 15+ Compatibility**: Cumplimiento del envoltorio asíncrono sobre `params` en los Server Components, asegurando compatibilidad total y previniendo errores de hidratación inter-cliente.
- **Correcciones UI/CSS**: Refinamientos de diseño en componentes como `BenefitsSection`, reparando fallas con tipografías rotadas por overflow visual.
- **Sanitización del Repositorio**: Se eliminaron los directorios estáticos heredados que ya no estaban en uso (`_legacy_backup`), y recursos SVG auto-generados por el boilerplate (logo genérico de Vercel/Next) que no pertenecían a la marca Softtek.

*(Actualmente se hallan traducidos los primeros 9 componentes de la plataforma. La lista de diccionarios está lista para la incorporación del resto si fuera necesario).*

## Instrucciones de Desarrollo

Para ejecutar el servidor local y ver estas características en iteración:

```bash
npm install
npm run dev
```

Visita [http://localhost:3000](http://localhost:3000) y verás la landing con todas sus animaciones y selección de idioma.
