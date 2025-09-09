let contador = parseInt(localStorage.getItem("carritoCount")) || 0;
const carritoCount = document.getElementById("carrito-count");

function mostrarContador() {
    carritoCount.textContent = contador;
}

function actualizarContador() {
    contador++;
    carritoCount.textContent = contador;
    localStorage.setItem("carritoCount", contador); 
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarContador();

    const botonesAgregar = document.querySelectorAll(".caja button:nth-of-type(1)");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", actualizarContador);
    });
});