# TripVolanza

Sitio web para búsqueda y comparación de pasajes aéreos, integrado con [Travelpayouts](https://app.travelpayouts.com/) mediante White Label.

## Estado del proyecto

🚧 En construcción — MVP en desarrollo por etapas.

- [x] Estructura base del proyecto
- [x] Header
- [x] Hero + espacio del buscador (placeholder visual, falta conectar el widget real)
- [ ] Sección "Por qué TripVolanza"
- [ ] Sección de destinos populares
- [ ] Footer
- [ ] Páginas legales (Términos, Privacidad)
- [ ] Página de Contacto
- [ ] Página 404
- [ ] SEO básico (sitemap, robots.txt, metadatos)
- [ ] Publicación

## Cómo probarlo en tu computadora

No hace falta instalar nada especial. Dos formas de verlo:

1. **Más simple**: hacé doble clic en `index.html` y se abre en tu navegador.
2. **Recomendada**: si usás Visual Studio Code, instalá la extensión "Live Server", hacé clic derecho sobre `index.html` → "Open with Live Server". Esto te permite ver los cambios en vivo cada vez que guardás un archivo, sin tener que refrescar manualmente.

## Estructura de carpetas

\```
tripvolanza/
├── index.html       → Página principal
├── css/
│   └── style.css    → Todos los estilos del sitio
├── js/
│   └── main.js       → Lógica del sitio (menú mobile, widget, etc.)
├── img/              → Imágenes del sitio
└── README.md
\```

## Tecnologías

HTML, CSS y JavaScript puro (sin frameworks), integrado con el widget White Label de Travelpayouts para la búsqueda de vuelos.