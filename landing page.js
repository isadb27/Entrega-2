
const products = ["Air Jordan 4 Retro Military Blue G/S", "Adidas Sweatpants", "Parra Tremor Pattern Swim Shorts", "Green True Hoodie", "Women's New Balance 550","Nike Boys Fleece Hoodie with Kangaroo Pocket and Swoosh Logo"];



function searchProduct() {
    const input = document.getElementById("searchBar").value.trim().toLowerCase();
    const resultElement = document.getElementById("result");

    
    if (input === "") {
        resultElement.textContent = "Por favor, ingresa un término de búsqueda.";
        return;
    }

    
    const foundProduct = products.find(product => product === input);

    if (foundProduct) {
        resultElement.textContent = `Producto encontrado: ${foundProduct}`;
    } else {
        resultElement.textContent = "No se encuentra el producto.";
    }
}


function handleKeyPress(event) {
    if (event.key === "Enter") {
        searchProduct();
    }
}