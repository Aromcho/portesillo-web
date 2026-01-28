# 🚚 Portesillo - Web Corporativa

Sitio web corporativo completo de Portesillo, plataforma de mudanzas y portes en Next.js.

## ✨ Características

- ✅ **Diseño Responsivo**: Totalmente adaptado a móviles, tablets y desktop
- ✅ **Navegación Suave**: Scroll suave entre secciones
- ✅ **Todas las Secciones Completas**:
  - 🏠 **Home/Hero**: Presentación principal con mockup de app
  - 👥 **Sobre Nosotros**: Historia, valores y equipo
  - 🚚 **Servicios**: Características, tipos de vehículos y estadísticas
  - 📧 **Contacto**: Formulario funcional, información de contacto y FAQs
- ✅ **Animaciones Suaves**: Hover effects y transiciones elegantes
- ✅ **Diseño Coherente**: Mismo estilo visual en todas las secciones
- ✅ **SEO Optimizado**: Meta tags y estructura semántica

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 16+ instalado

### Pasos

1. **Navegar a la carpeta del proyecto**
   ```bash
   cd portesillo-web
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Crea build de producción
npm start        # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

## 📂 Estructura del Proyecto

```
portesillo-web/
├── components/          # Componentes reutilizables
│   ├── Header.js       # Navegación principal
│   ├── Hero.js         # Sección hero/home
│   ├── About.js        # Sección sobre nosotros
│   ├── Services.js     # Sección servicios
│   ├── Contact.js      # Sección contacto
│   ├── Footer.js       # Pie de página
│   └── *.module.css    # Estilos de cada componente
├── pages/              # Páginas de Next.js
│   ├── _app.js        # Configuración global
│   ├── _document.js   # Documento HTML personalizado
│   └── index.js       # Página principal
├── styles/            # Estilos globales
│   └── globals.css
├── public/            # Archivos estáticos
├── package.json       # Dependencias del proyecto
└── next.config.js     # Configuración de Next.js
```

## 🎨 Paleta de Colores

- **Naranja Principal**: `#ff6b35`
- **Naranja Secundario**: `#f7931e`
- **Texto Oscuro**: `#1a1a1a`
- **Texto Gris**: `#666`
- **Fondo Claro**: `#fafafa`
- **Blanco**: `#ffffff`

## 📱 Secciones Implementadas

### 1. Header
- Navegación sticky con efecto scroll
- Menú hamburguesa responsive
- Links con animación underline

### 2. Hero (Home)
- Presentación impactante con gradiente
- Mockup de aplicación móvil
- Elementos flotantes animados
- Botones CTA

### 3. Sobre Nosotros
- Historia de la empresa
- 4 valores corporativos con iconos
- Sección de equipo con estadísticas
- Diseño en grid responsivo

### 4. Servicios
- 6 características principales
- 3 tipos de vehículos con precios
- Estadísticas de la empresa
- Cards interactivas con hover

### 5. Contacto
- Formulario funcional con validación
- 4 métodos de contacto
- 4 preguntas frecuentes (FAQ)
- Mensaje de éxito al enviar

### 6. Footer
- Enlaces rápidos
- Información legal
- Datos de contacto
- Redes sociales

## 🎯 Características de Diseño

### Coherencia Visual
- **Bordes redondeados**: 20px - 30px en todas las cards
- **Sombras consistentes**: `0 4px 20px rgba(0, 0, 0, 0.06)`
- **Hover effects**: Transform + box-shadow en todos los elementos interactivos
- **Transiciones**: 0.3s ease en todas las animaciones
- **Espaciado**: 6rem padding vertical en secciones

### Tipografía
- **Font**: Poppins (300, 400, 500, 600, 700, 800)
- **Títulos**: 3rem (48px) - Bold/Extra Bold
- **Subtítulos**: 1.25rem (20px)
- **Texto**: 1rem-1.1rem (16-18px)

### Responsive
- **Desktop**: > 968px (grid completo)
- **Tablet**: 640px - 968px (grid 2 columnas)
- **Mobile**: < 640px (grid 1 columna)

## 🔧 Personalización

### Cambiar Colores
Edita las variables de color en cada archivo `.module.css` o crea variables CSS globales en `globals.css`.

### Añadir Secciones
1. Crea un nuevo componente en `/components`
2. Crea su archivo `.module.css`
3. Importa y añade en `/pages/index.js`

### Conectar Formulario
Edita la función `handleSubmit` en `Contact.js` para conectar con tu backend:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  // Añade tu lógica de envío aquí
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
  });
};
```

## 🌐 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Build Manual
```bash
npm run build
npm start
```

## 📝 Notas

- Todos los estilos son modulares (CSS Modules)
- No hay dependencias de librerías de UI pesadas
- Código JavaScript vanilla (sin TypeScript)
- Totalmente responsive
- Optimizado para SEO
- Accesible (a11y)

---

**Desarrollado con ❤️ para Portesillo**
