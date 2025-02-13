function changeImage(element) {
    document.getElementById('mainImage').src = element.src;
}

function selectSize(element) {
    document.querySelectorAll('.size').forEach(size => size.classList.remove('selected'));
    element.classList.add('selected');
}
function increaseQuantity() {
    let quantity = document.getElementById('quantity');
    quantity.textContent = parseInt(quantity.textContent) + 1;
}
function decreaseQuantity() {
    let quantity = document.getElementById('quantity');
    if (parseInt(quantity.textContent) > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
    }
}

function selectColor(element) {
    document.querySelectorAll('.color input').forEach(input => input.checked = false);
    element.checked = true;
}


addToCartBtn.addEventListener("click", function () {
    const product = {
        name: "Embrace Sideboard", 
        price: 12999.00, 
        quantity: quantity
    };

    
    localStorage.setItem("cartItem", JSON.stringify(product));

    
    alert(`Added ${quantity} item(s) to cart!`);
});