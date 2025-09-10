function agregarAlCarrito(nombre, imagen) {
    let contador = parseInt(localStorage.getItem("carritoCount")) || 0;
    contador++;
    localStorage.setItem("carritoCount", contador);
    document.getElementById("carrito-count").textContent = contador;

    // guardar producto
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push({ nombre, imagen });
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function verDetalles(nombre, imagen) {
    window.location.href = `./ProdDetalles.html?nombre=${encodeURIComponent(nombre)}&img=${encodeURIComponent(imagen)}`;
}
