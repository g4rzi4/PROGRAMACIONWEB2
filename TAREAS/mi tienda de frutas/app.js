const miCarrito = [];
let continuar = true;

while(continuar){
    console.log(miCarrito); 
    if(confirm("deseas agregar una fruta?")){
    miCarrito.push(prompt("Agrega un fruta a tu carrito")); 
    }else{
        console.log("Carrito terminado");
        continuar = false;
    }
}

console.log("Carrito final " + miCarrito);