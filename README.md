# Flappy Kids Academy

Juego web educativo tipo Flappy Bird, pensado para PC y celular, instalable como app y con funcionamiento offline.

## Lo principal

- Juego responsive para escritorio y móvil.
- Instalación como PWA.
- Modo offline con service worker.
- Retos educativos por edad y tema.
- Monedas premio, bonus y mejoras.
- Consulta de actualizaciones desde GitHub.

## Publicación del proyecto

Este proyecto quedó preparado para publicarse en el repositorio:

`https://github.com/leonard1982/nivel_bird`

## Descargas para Windows y Android

La interfaz del juego busca instaladores desde la sección `Releases` del repositorio.

Sugerencia de nombres para los archivos publicados:

- Windows: `flappy-kids-windows.exe` o `flappy-kids-windows.zip`
- Android: `flappy-kids-android.apk`

Si todavía no hay instaladores publicados, el juego lleva al usuario a la página de lanzamientos del repositorio.

## Actualizaciones

La app consulta:

- el último commit público del repositorio para mostrar novedades
- la última release para detectar una versión nueva disponible

Para que el mensaje al usuario sea claro:

- usa títulos de release sencillos, por ejemplo `v1.1.0`
- escribe commits en español y fáciles de entender
- en la descripción de la release resume los cambios para público general

## Ejecución local

Sirve esta carpeta con Apache o cualquier servidor web y abre `index.html`.

Para que la instalación PWA funcione bien en celular, usa `https` o `localhost`.
