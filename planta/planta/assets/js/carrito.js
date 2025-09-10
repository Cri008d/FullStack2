let contador = parseInt(localStorage.getItem("carritoCount")) || 0;
const carritoCount = document.getElementById("carrito-count");

function mostrarContador() {
    if (carritoCount) {
    carritoCount.textContent = contador;
    }
}

function actualizarContador(productoNombre) {
    contador++;
    if (carritoCount) {
        carritoCount.textContent = contador;
    }    
    localStorage.setItem("carritoCount", contador); 

    //Obtener lista de productos o crear una nueva
    const productos = JSON.parse(localStorage.getItem("productosCarrito")) || [];

    //Agregar nuevo producto
    productos.push(productoNombre);

    //Guardar nuevamente en localStorage
    localStorage.setItem("productosCarrito", JSON.stringify(productos));

    alert("Producto agregado al carro ✅");
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarContador();

    const botonesAgregar = document.querySelectorAll(".agregar-carrito");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", () => {
            const productoNombre = boton.closest(".caja").querySelector("p").textContent;
            actualizarContador(productoNombre);
        });
    });
});
