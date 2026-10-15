# Hotelier Tools Web

<br>

## 💖 Apoya este proyecto
Si este proyecto te ha sido útil, ¡considera apoyarlo!

[![GitHub Sponsor](https://img.shields.io/badge/Sponsor-JuanmanDev-ea4aaa?style=for-the-badge&logo=github)](https://github.com/sponsors/JuanmanDev) [![Ko-fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/juanmandev) [![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/juanmandev)

<br>


Página web oficial de Hotelier Tools - Herramientas especializadas para hoteles que utilizan Little Hotelier de Siteminder.

## 🚀 Características

- **Extensiones Chrome**: Mejora la interfaz de Little Hotelier
- **Automatizaciones**: Procesos automáticos para optimizar la gestión hotelera
- **Interfaz moderna**: Diseño responsivo y fácil de usar

## 🛠️ Tecnologías

- **Framework**: Nuxt 3
- **UI Components**: Nuxt UI
- **Styling**: Tailwind CSS
- **TypeScript**: Soporte completo
- **Deploy**: Vercel

## 🔍 SEO

El SEO del sitio se audita con **[Claude SEO](https://github.com/AgriciDaniel/claude-seo)** ([claude-seo.md](https://claude-seo.md)), un plugin de [Claude Code](https://claude.com/claude-code) de AgriciDaniel que analiza el sitio con subagentes especializados (técnico, contenido, schema, sitemap, rendimiento, visual, GEO/IA, agentes, SXO, clusters y backlinks) y devuelve un informe con puntuación y un plan de acción priorizado.

```bash
# Dentro de Claude Code, con el plugin instalado
/claude-seo:seo setup                            # crea su entorno Python aislado y Chromium (una vez)
/claude-seo:seo audit https://hotelier.tools/    # auditoría completa
/claude-seo:seo page https://hotelier.tools/blog/little-hotelier-api   # una sola página
/claude-seo:seo drift baseline https://hotelier.tools/                 # foto para comparar tras cada despliegue
```

La última auditoría (15 de octubre de 2026, puntuación 70/100) y su seguimiento están en [`hotelier.tools-audit/`](hotelier.tools-audit/):

- [Informe completo](hotelier.tools-audit/FULL-AUDIT-REPORT.md)
- [Plan de acción y estado de cada punto](hotelier.tools-audit/ACTION-PLAN.md)
- [Hallazgos por área](hotelier.tools-audit/findings/) y [capturas](hotelier.tools-audit/screenshots/)
- [Datos estructurados del informe](hotelier.tools-audit/audit-data.json)

Tras cada despliegue a `main`, la acción [IndexNow](.github/workflows/indexnow.yml) avisa a Bing y otros buscadores de las URLs del sitemap (`scripts/indexnow.mjs`).

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🏗️ Estructura del proyecto

```
├── assets/           # Archivos estáticos (CSS, imágenes)
├── components/       # Componentes Vue reutilizables
├── composables/      # Composables de Vue
├── layouts/          # Layouts de página
├── pages/            # Páginas de la aplicación
├── public/           # Archivos públicos
├── server/           # API server-side
├── types/            # Definiciones TypeScript
└── nuxt.config.ts    # Configuración de Nuxt
```

## 🎯 Páginas principales

- **Inicio**: Presentación y animación explicativa
- **Herramientas**: Catálogo completo de herramientas
- **Documentación**: Guías y referencias técnicas
- **Contacto**: Formulario de contacto y soporte

## 🔧 Configuración

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# API Configuration
NUXT_API_SECRET=your-api-secret
NUXT_PUBLIC_API_BASE=/api

# Email Configuration (para el formulario de contacto)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Configuración de Vercel

El proyecto está configurado para desplegarse automáticamente en Vercel. La configuración se encuentra en `nuxt.config.ts`:

```typescript
nitro: {
  preset: 'vercel'
}
```

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎨 Temas

Soporte para modo claro y oscuro con cambio automático basado en las preferencias del sistema.

## 🔒 Seguridad

- Validación de formularios con Zod
- Sanitización de datos de entrada
- Headers de seguridad configurados
- HTTPS forzado en producción

## 📊 SEO

- Meta tags optimizados
- Open Graph tags
- Sitemap automático
- Structured data
- Performance optimizado
- `/llms.txt` con el índice de guías para asistentes de IA

## 📝 Guías (blog)

Las guías viven en `content/blog/<idioma>/<slug>.md` y se publican en `/blog/<slug>` (inglés) o `/<idioma>/blog/<slug>`. El slug es el mismo en todos los idiomas: así se enlazan las traducciones (hreflang) y el selector de idioma.

- **Frontmatter**: `title`, `description` (≤ 155 caracteres), `date`, `category` (`ai`, `api`, `invoicing`, `operations`, `pricing`, `guests`, `compliance`, `tips`), `tags`, `keywords`, `feature` (slug de `data/platform.ts`), `demoPath`, `cover`, `coverAlt`, `featured` y `faq` (lista de `q`/`a`, se publica como FAQPage). Tipos en `data/blog.ts`.
- **Componentes** (`components/content/`): `::screenshot{src alt caption path mobile}`, `::callout{type title}`, `::prompt{label}`, `::demo-cta{path}`. Los bloques de código llevan botón de copiar.
- **Capturas**: `public/images/blog/demo/en|es/`, sacadas de la demo pública (datos inventados). Los artículos en español usan `/demo/es/`.
- **Guías que no existen en un idioma** (temas solo de España): se listan en `BLOG_MISSING_LOCALES` (`data/blog.ts`) y sus enlaces abren la versión inglesa.
- **Comprobar antes de publicar**: `npm run validate:blog` (YAML, componentes, enlaces internos, imágenes y longitud de la descripción).

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecta tu repositorio en Vercel
2. Configura las variables de entorno
3. El deploy es automático en cada push

### Otros proveedores

```bash
# Generar sitio estático
npm run generate

# Los archivos se generan en .output/public/
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Website**: [hoteliertools.com](https://hoteliertools.com)
- **GitHub**: [JuanmanDev/hotelier-tools-web](https://github.com/JuanmanDev/hotelier-tools-web)



<br>

## 💖 Apoya este proyecto
Si este proyecto te ha sido útil, ¡considera apoyarlo!

[![GitHub Sponsor](https://img.shields.io/badge/Sponsor-JuanmanDev-ea4aaa?style=for-the-badge&logo=github)](https://github.com/sponsors/JuanmanDev) [![Ko-fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/juanmandev) [![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/juanmandev)

<br>
