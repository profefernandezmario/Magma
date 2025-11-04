// Array de productos - Puedes personalizar imagen, nombre y precio
const productosData = [
  {
    nombre: "Camiseta Deportiva",
    precio: 7500,
    imagen: "https://images.unsplash.com/photo-1517649763962-f3c5b16613c7?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Short de Running",
    precio: 5800,
    imagen: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Pack 2 Medias",
    precio: 1900,
    imagen: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Buzo con Capucha",
    precio: 11200,
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  }
];

let carrito = [];

// Insertar productos en la grilla
function renderProductos() {
  const contenedor = document.getElementById('productos');
  contenedor.innerHTML = '';
  productosData.forEach((prod, idx) => {
    contenedor.innerHTML += `
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">Precio: $${prod.precio}</p>
            <button class="btn btn-success" onclick="agregarAlCarrito('${prod.nombre}', ${prod.precio})">
              <i class="bi bi-cart-plus"></i> Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  mostrarCarrito();
      actualizarContadorCarrito(); // agregado con ia
}

function mostrarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  carrito.forEach((item, i) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = `${item.nombre} - $${item.precio}`;
    // Botón quitar
    const botonQuitar = document.createElement('button');
    botonQuitar.className = 'btn btn-danger btn-sm ms-3';
    botonQuitar.innerHTML = '<i class="bi bi-trash"></i> Quitar';
    botonQuitar.onclick = () => quitarDelCarrito(i);
    li.appendChild(botonQuitar);
    lista.appendChild(li);
  });
}

// agregado con ia para ver en el carrito 
function actualizarContadorCarrito() {
  document.getElementById('carrito-contador').textContent = carrito.length;
}

function quitarDelCarrito(indice) {
  carrito.splice(indice, 1);
  mostrarCarrito();
      actualizarContadorCarrito(); // agregado con ia
}

function enviarPorWhatsApp() {
  if (carrito.length === 0) {
    alert('¡El carrito está vacío!');
    return;
  }
  let mensaje = '¡Hola! Quiero pedir:\n';
  carrito.forEach(item => {
    mensaje += `- ${item.nombre} ($${item.precio})\n`;
  });
  // Modifica con tu número (código país+área, ej: 5491122334455 para Argentina)
  const telefono = '+5493624003295';
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

// Al cargar la página
window.onload = () => {
  renderProductos();
  mostrarCarrito();
      actualizarContadorCarrito(); // agregado con ia
};
