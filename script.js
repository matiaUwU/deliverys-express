let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Eliminar</button>`;
        cartItems.appendChild(li);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1); // Elimina el producto en la posición "index"
    displayCart(); // Vuelve a mostrar el carrito actualizado
}

function sendOrder() {
    const direccion = document.getElementById("direccion").value;
    if (!direccion) {
        alert("Por favor, ingresa tu dirección.");
        return;
    }
    let message = "Pedido de Delivery Express:%0A";
    cart.forEach((item) => {
        message += `- ${item.name}: $${item.price.toFixed(2)}%0A`;
    });
    message += `%0ADirección de entrega: ${direccion}`;
    const phoneNumber = "59163699754";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
}


