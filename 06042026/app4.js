console.log(document.querySelector("#tituloId").textContent);

const h1 = document.querySelector("#tituloId");
h1.textContent = "Nuevo titulo";
console.log(h1.className);
console.log(h1.id);
console.log(h1.textContent);
console.log(h1.innerHTML);
console.log(h1.tagName);

//MODIFICAR PARÁMETROS

h1.textContent = "Nuevo titulo";
h1.style.color = "red";
h1.style.backgroundColor = "black";
h1.style.fontSixe = "50px";
h1.style.textAlign = "center";
h1.style.padding = "20px";
h1.style.borderRadius = "10px";