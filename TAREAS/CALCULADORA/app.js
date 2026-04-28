const express = require('express');

const app = express();
const PORT = 3000;

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

function agregarPantalla(value) {
    document.getElementById("display").value += value;
}


limpiarPantalla = () => {
    document.getElementById("display").value = "";
}

calcularResultado = () => {
    let resultado = eval(document.getElementById("display").value);
    document.getElementById("display").value = resultado;
}

