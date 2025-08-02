# Hotelier Tools Web

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

