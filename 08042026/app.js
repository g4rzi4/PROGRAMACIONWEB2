document.getElementById("CalculadoraForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacion = document.getElementById("operacion").value;
    const resultado = document.getElementById("resultado");

    let res;
    switch(operacion) {
        case "sumar":
            res = num1 + num2;
            break;
        case "restar":
            res = num1 - num2;
            break;
        case "multiplicar":
            res = num1 * num2;
            break;
        case "dividir":
            res = num1 / num2;
            break;
    }

    resultado.innerHTML = `El resultado de la operación es: ${res}`;
});