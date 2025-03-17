// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres
let amigos = [];

//Función para agregar un amigo a la lista
function agregarAmigo(){
    const inputField =document.getElementById ("amigo")
    const nameList = document.getElementById("listaAmigos")
    const inputValue = inputField.value.trim();

    if(inputValue === ""){
        alert("Inserta un nombre válido por favor");
        return;
    }

    amigos.push(inputValue); //Agregar nombre al array
    actualizarLista(); // Actualizar la lista visible
    inputField.value = ""; // Limpiar el campo de entrada
    console.log("Lista de amigos actual:", amigos);
}

// Función para actualizar la lista de amigos en la pantalla
function actualizarLista() {
    const nameList = document.getElementById("listaAmigos");
    nameList.innerHTML = ""; // Limpiar lista antes de actualizar
    
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        nameList.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * amigos.length);
    const selectedName = amigos[randomIndex];
    const resultDisplay = document.getElementById("resultado");
    
    resultDisplay.innerHTML = `<li>El amigo sorteado es: <strong>${selectedName}</strong></li>`;
}


