# 🎁 Sariti Gift - Sitio Web de Video con Sorpresa

Un sitio web sencillo y elegante que reproduce un video y contiene un icono flotante de regalo que revela una imagen sorpresa.

## ✨ Características

- 🎬 **Video en pantalla completa** que ocupa prácticamente toda la pantalla
- 🎁 **Icono flotante animado** con forma de regalo
- 🖼️ **Modal emergente** con icono de regalo animado
- 🖤 **Diseño minimalista** con fondo negro para destacar el video
- 📱 **Totalmente responsivo** para móviles y tablets
- 🎉 **Efectos especiales** como confetti al abrir el regalo
- ⚡ **Optimizado** para GitHub Pages

## 🚀 Despliegue Rápido en GitHub Pages

### Paso 1: Preparar el Repositorio
1. Haz commit y push de todos los archivos a tu repositorio de GitHub
2. Asegúrate de que `index.html` esté en la raíz del repositorio

### Paso 2: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. Scroll hacia abajo hasta la sección **Pages**
4. En **Source**, selecciona **Deploy from a branch**
5. Selecciona la rama **main** (o **master**)
6. Selecciona la carpeta **/ (root)**
7. Haz clic en **Save**

### Paso 3: ¡Listo!
- Tu sitio estará disponible en: `https://tu-usuario.github.io/sariti-gift`
- GitHub Pages puede tardar unos minutos en procesar los cambios

## 📁 Estructura del Proyecto

```
sariti-gift/
├── index.html          # Página principal
├── style.css           # Estilos y animaciones
├── script.js           # Funcionalidad JavaScript
├── assets/
│   ├── README.md       # Instrucciones para archivos multimedia
│   ├── video.mp4       # Tu video (agregar)
│   └── gift-image.jpg  # Tu imagen sorpresa (agregar)
└── README.md           # Este archivo
```

## 🎬 Agregar tu Contenido

### 1. Video Principal
- Coloca tu video en la carpeta `assets/` con el nombre `video.mp4`
- Formatos soportados: MP4, WebM
- Recomendaciones:
  - Resolución: 1920x1080 o menor
  - Tamaño: Máximo 50MB para mejor rendimiento
  - Duración: Entre 30 segundos y 5 minutos

### 2. Imagen del Regalo
- Coloca tu imagen en la carpeta `assets/` con el nombre `gift-image.jpg`
- Formatos soportados: JPG, PNG, WebP
- Recomendaciones:
  - Resolución: 800x600 píxeles o similar
  - Tamaño: Máximo 2MB
  - Debe ser la sorpresa que quieres revelar

## 🛠️ Personalización

### Cambiar Textos
Edita el archivo `index.html` para personalizar:
- Título de la página
- Texto del modal de regalo

### Modificar Colores
Edita el archivo `style.css` para cambiar:
- Gradientes de fondo
- Colores del icono de regalo
- Colores del modal

### Ajustar Animaciones
En `script.js` puedes modificar:
- Tiempo de aparición del icono
- Efectos de confetti
- Animaciones del modal

## 💻 Desarrollo Local

Para probar el sitio en tu computadora:

1. Clona o descarga el repositorio
2. Agrega tus archivos multimedia en la carpeta `assets/`
3. Abre `index.html` en tu navegador web

**Nota:** Algunos navegadores pueden bloquear el autoplay del video cuando abres el archivo localmente. En GitHub Pages funcionará correctamente.

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con animaciones
- **JavaScript ES6** - Interactividad y efectos
- **SVG** - Icono de regalo vectorial
- **Google Fonts** - Tipografía Poppins

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Móviles iOS/Android

## 🎨 Características del Diseño

- **Responsive Design** - Se adapta a cualquier tamaño de pantalla
- **Diseño Minimalista** - Fondo negro que destaca el contenido del video
- **Video Fullscreen** - Ocupa el 95% de la pantalla para máxima inmersión
- **Animaciones CSS** - Transiciones suaves y naturales
- **Tipografía moderna** - Fuente Poppins optimizada

## 🆘 Solución de Problemas

### El video no se reproduce
- Verifica que el archivo se llame exactamente `video.mp4`
- Asegúrate de que esté en la carpeta `assets/`
- Algunos navegadores requieren interacción del usuario para autoplay

### La imagen no aparece en el modal
- Verifica que el archivo se llame `gift-image.jpg` (o `.png`, `.webp`)
- Confirma que esté en la carpeta `assets/`
- Revisa la consola del navegador para errores

### GitHub Pages no muestra cambios
- Espera unos minutos después de hacer push
- Verifica que GitHub Pages esté activado en Settings
- Asegúrate de que los archivos estén en la rama correcta

## 🎁 ¡Disfruta tu sitio web!

Una vez configurado, tendrás un sitio web hermoso y funcional perfecto para sorprender a alguien especial. El icono de regalo flotante añade un elemento de diversión e interactividad que hará que la experiencia sea memorable.

---

**¿Necesitas ayuda?** Abre un issue en el repositorio o consulta la documentación de GitHub Pages. 