let carrito = [];

// agregado para mostrar ingresos al carrito - inicio
function actualizarContadorCarrito() {
    document.getElementById('carrito-contador').textContent = carrito.length;
} // agregado para mostrar ingresos al carrito - fin

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    mostrarCarrito();
    actualizarContadorCarrito();  // agregado para mostrar ingresos al carrito
}

function quitarDelCarrito(indice) {
    carrito.splice(indice, 1);
    mostrarCarrito();
    actualizarContadorCarrito();
}

function mostrarCarrito() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';
    carrito.forEach((item, i) => {
        // const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = ${ item.nombre } - $${ item.precio };
        // li.textContent = ${ item.nombre } - $${ item.precio };
        lista.appendChild(li);
    });
}

function enviarPorWhatsApp() {
    if (carrito.length === 0) {
        alert('¡El carrito está vacío!');
        return;
    }
    let mensaje = '¡Hola! Quiero pedir:\n';
    carrito.forEach(item => {
        mensaje += - ${ item.nombre } ($${ item.precio }) \n;
    }
};

const telefono = '+5493624096688';
const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
window.open(url, '_blank');

// agregado para mostrar ingresos al carrito - inicio
window.onload = function () {
    renderProductos();
    mostrarCarrito();
    actualizarContadorCarrito();
};