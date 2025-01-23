let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    const item = { name: productName, price: productPrice };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    let total = 0;
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} - ${item.price} грн</p>
        `;
        cartContainer.appendChild(itemElement);
        total += item.price;
    });

    document.getElementById('total-price').innerText = `Всього: ${total} грн`;
}
