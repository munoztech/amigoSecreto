// Variable para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo'); // Obtiene el campo de entrada por su id
    const nombreAmigo = inputAmigo.value.trim(); // Elimina los espacios en blanco al inicio y final del nombre

    // Validar la entrada
    if (nombreAmigo === "") {
        // Si el campo está vacío, mostrar un mensaje de error
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución de la función
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo); // Añadir el nombre al array

    // Limpiar el campo de entrada
    inputAmigo.value = ""; // Restablece el campo de texto a vacío

    // Mostrar la lista actualizada de amigos
    mostrarLista(); // Llama a la función para mostrar la lista
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtiene el elemento de la lista donde se mostrarán los amigos
    listaAmigos.innerHTML = ""; // Limpia la lista existente para evitar duplicados

    // Iterar sobre el array amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li> para cada amigo
        const li = document.createElement('li');
        li.textContent = amigos[i]; // Asignar el nombre del amigo como texto del <li>

        // Agregar el <li> a la lista
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar si el array amigos no está vacío
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, agregue nombres.");
        return; // Detener la ejecución si no hay amigos en el array
    }

    // Generar un índice aleatorio entre 0 y la longitud del array menos 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento correspondiente
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>!`;
}
