// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaración de la variable para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo(event) {

    if (event.type === 'click' || (event.type === 'keypress' && event.key === 'Enter')) {
        const input = document.getElementById('amigo');
        const nombre = input.value.trim();

        if (nombre === '') {
            alert('Por favor, ingrese un nombre válido.');
            return;
        }

        amigos.push(nombre);

        actualizarListaAmigos();

        input.value = '';
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es : "${amigoSorteado}"</li>`;
}

// Agregar evento de escucha para el botón "Añadir"
document.querySelector('.button-add').addEventListener('click', agregarAmigo);

// Agregar evento de escucha para la tecla "Enter" en el campo de entrada
document.getElementById('amigo').addEventListener('keypress', agregarAmigo);

