# ***Amigo Secreto**
Una aplicación web interactiva que te permite organizar un sorteo divertido y aleatorio de **Amigo Secreto** con tus amigos.

## **Características**
- Permite agregar nombres de amigos a una lista.
- Muestra la lista de amigos en una interfaz limpia.
- Realiza un sorteo aleatorio de los amigos almacenados.
- Interfaz simple y fácil de usar.

## **Tecnologías utilizadas**
- **HTML**: Para la estructura de la página.
- **CSS**: Para el diseño y los estilos visuales.
- **JavaScript**: Para la funcionalidad, incluyendo el manejo de eventos y la lógica de sorteo.

## Instalación
Para ejecutar este proyecto localmente en tu máquina, sigue estos pasos:

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/amigo-secreto.git
    ```

2. Abrir el proyecto en tu navegador:

    Navega hasta la carpeta del proyecto y abre el archivo `index.html` en tu navegador.

    ```bash
    cd amigo-secreto
    open index.html
    ```

## Uso
1. Ingresa el nombre de un amigo en el campo de texto y haz clic en "Añadir" para agregarlo a la lista.
2. Una vez que hayas añadido varios amigos, podrás ver la lista actualizada.
3. Haz clic en "Sortear amigo" para seleccionar aleatoriamente uno de los amigos de la lista.
4. El nombre sorteado se mostrará en la parte inferior de la pantalla.

### Ejemplo de uso
- **Agregar nombres**:
    - Juan
    - Ana
    - Carlos
- **Realizar sorteo**: El sistema selecciona aleatoriamente uno de los amigos de la lista.

## Dependencias
Este proyecto no requiere dependencias externas, ya que todo está construido usando tecnologías básicas de la web (HTML, CSS y JavaScript).

## Contribuciones
Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios.
4. Haz commit de tus cambios (git commit -m 'Agregada nueva funcionalidad').
5. Haz push de tus cambios (git push origin feature/nueva-funcionalidad).
6. Abre un Pull Request.

## Posibles problemas y soluciones
- **El navegador no carga la página correctamente**: Asegúrate de estar abriendo el archivo `index.html` desde un servidor local o directamente desde tu sistema de archivos. En algunos navegadores, ciertos elementos de JavaScript pueden no funcionar si se accede a ellos desde una ruta de archivo local (file://).
- **La lista no se actualiza**: Si experimentas problemas con la actualización de la lista, asegúrate de que JavaScript esté habilitado en tu navegador.
