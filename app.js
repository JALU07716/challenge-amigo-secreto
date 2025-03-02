const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
  const nombre = inputAmigo.value.trim();
  if (nombre !== "" && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(nombre)) {
    listaAmigos.push(nombre);
    ulListaAmigos.innerHTML += `<li>${nombre}</li>`;
    inputAmigo.value = "";
  } else {
    alert("Por favor, ingrese un nombre válido.");
  }
}

function sortearAmigo() {
  if (listaAmigos.length > 0) {
    ulResultado.innerHTML = ""; // Limpiar el resultado antes de sortear
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
  } else {
    ulResultado.innerHTML = "<li>No hay amigos para sortear</li>";
  }
}
