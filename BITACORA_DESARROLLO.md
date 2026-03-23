# Bitácora de desarrollo

## 2026-03-22

### Pantalla completa y menú de usuario
- El juego pasó a ocupar toda la ventana.
- La configuración ahora vive en un panel lateral tipo menú de usuario.
- Ese panel aparece abierto al iniciar y luego puede ocultarse desde el botón `Menú`.

### Ambientes dinámicos
- Se añadieron escenarios progresivos que cambian con el avance:
  jardín, noche, invierno, lava, cañón rocoso y cristales mágicos.
- Cada ambiente tiene color, animación y peligro propio.

### Ventajas y peligros
- Se incorporaron objetos recogibles como escudo, tiempo lento, estrella y alas suaves.
- También hay peligros especiales por ambiente como abejas, murciélagos, hielo, fuego, rocas y cristales.

### Dificultades nuevas
- Los niveles ahora son:
  Muy Fácil, Fácil, Intermedio y Avanzado.
- Cada dificultad ajusta hueco entre obstáculos, velocidad y frecuencia de peligros.

### Audio y aprendizaje configurable
- Se añadió música procedural más agradable junto con efectos y botón de encendido/apagado.
- El jugador puede elegir edad y tema de aprendizaje:
  mixto, colores, matemáticas, letras o inglés básico.

### Cambio de mecánica para retos
- Los retos dejaron de aparecer de forma aleatoria en medio del vuelo.
- Ahora el jugador puede entrar a un árbol o túnel especial para decidir si acepta o no el reto.
- Al volver del reto o al rechazarlo, el juego crea una salida segura para evitar daños inmediatos.

### Puntos premio acumulables
- Las respuestas correctas en los retos opcionales entregan puntos de juego y puntos premio.
- Esos puntos premio quedan guardados para usar en sprints futuros como moneda de canje.

### Ajuste de HUD y modo instalable
- El panel rápido de puntos y ventajas se movió para no tapar la línea de vuelo del pajarito.
- Se añadió `manifest.webmanifest`, `service worker` e íconos para instalar el juego y usarlo offline.

### Sprints de progreso y profundidad
- Se agregó tienda local para canjear puntos premio por mejoras permanentes.
- Ahora existen misiones con recompensas y progreso educativo por tema.
- Los ambientes activan eventos especiales temporales que alteran el ritmo del vuelo y los premios.

### Recomendaciones siguientes
- Añadir ilustraciones o sprites dedicados por ambiente.
- Conectar ranking con PHP y MySQL para guardar récords en servidor.
- Crear bancos de preguntas más amplios por rango de edad.
