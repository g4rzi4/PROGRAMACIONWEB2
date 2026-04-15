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

