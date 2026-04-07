/*const listaDinamica = document.querySelector("#lista");

const li = document.createElement("li");
li.textContet = "Elemento 2";
listaDinamica.appendChild(li);*/

const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const numero = parseInt(document.getElementById("cantidad").value);

    //limpiar
    lista.innerHTML = "";

    const elementos = Array.from( {length: numero}, (_, i) => i + 1)

    elementos.forEach(function(elemento){
        const li = document.createElement("li");
        li.textContent = "Elemento " + elemento;
        lista.appendChild(li);
    });
});
