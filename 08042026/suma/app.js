document.getElementById("SumForm").addEventListener("submit", 
    function(event){
        event.preventDefault(); // prevent from submission

        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);


        const sum = num1 + num2;
        document.getElementById("result").innerHTML = `La suma de ${num1} y ${num2} es: ${sum}`;
})