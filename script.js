function increaseQuantity() {
    let quantityElem = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityElem.textContent);
    quantityElem.textContent = currentQuantity + 1;
}

function decreaseQuantity() {
    let quantityElem = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityElem.textContent);
    if (currentQuantity > 1) {
        quantityElem.textContent = currentQuantity - 1;
    }
}


function selectColor(element) {
    document.querySelectorAll('.color-box').forEach(color => {
        color.classList.remove("selected");
    });
    element.classList.add("selected");
}


document.querySelector(".add-to-cart").addEventListener("click", function () {
    let quantity = parseInt(document.getElementById('quantity').textContent);
    
    const selectedColor = document.querySelector(".color-box.selected");
    const colorValue = selectedColor ? selectedColor.style.backgroundColor : "Default Color";

    const product = {
        name: "Embrace Sideboard",
        price: 12999.00,
        quantity: quantity,
        color: colorValue
    };

    localStorage.setItem("cartItem", JSON.stringify(product));

    alert(`Added ${quantity} item(s) of color ${colorValue} to cart!`);
});
