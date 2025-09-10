document.addEventListener("DOMContentLoaded", () => {
    let contador = parseInt(localStorage.getItem("carritoCount")) || 0;
    const carritoCount = document.getElementById("carrito-count");

    carritoCount.textContent = contador;

    document.querySelectorAll(".caja").forEach(caja => {
        const nombre = caja.querySelector("p").textContent;
        const imagen = caja.querySelector("img").getAttribute("src");

        const botonAgregar = caja.querySelector("button:nth-of-type(1)");
        botonAgregar.addEventListener("click", () => {
            contador++;
            carritoCount.textContent = contador;
            localStorage.setItem("carritoCount", contador);

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push({ nombre, imagen });
            localStorage.setItem("carrito", JSON.stringify(carrito));
        });

        const botonDetalles = caja.querySelector("button:nth-of-type(2)");
        botonDetalles.addEventListener("click", () => {
            window.location.href = `./ProdDetalles.html?nombre=${encodeURIComponent(nombre)}&img=${encodeURIComponent(imagen)}`;
        });
    });
});
