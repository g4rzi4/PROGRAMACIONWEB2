const carrito = []; // carrito de compras

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

// funcion para agregar productos al carrito de compras
function agregarProducto(carrito, producto, cantidad){
//buscar si el producto ya existe en el carrito
    const indice = carrito.findIndex(item => item.producto.nombre === producto.nombre);
    if(indice !== -1){
        // si el producto ya existe, actualizar la cantidad
        carrito[indice].cantidad += cantidad;
    } else {
        // si el producto no existe, agregarlo al carrito
        carrito.push({producto, cantidad});
    }
    mostarCarrito(carrito);
}

// funcion para mostrar el carrito de compras
function mostarCarrito(carrito){
    console.log("Carrito de Compras:");
    const listaProductos = document.getElementById("lista-productos");
    listaProductos.innerHTML = "";
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.producto.nombre} - Cantidad: ${item.cantidad} - Precio: $${item.producto.precio * item.cantidad}`;
        listaProductos.appendChild(li);
    });
}    

//evento oara manejar la accion de agregar productos al formulario

document.getElementById("formulario-producto").addEventListener("submit", 
    function(event){
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);
    //nuevo objeto de tipo producto para agregar al formulario
    const producto = new Producto(nombre, precio);
    //llamar a la funcion para agregar el producto al carrito de compras
    agregarProducto(carrito, producto, cantidad);

    //limpiar el formulario despues de agregar el producto
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = 1;
});