let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];


document.addEventListener('DOMContentLoaded', function() {
    let productList = document.getElementById('products');
    productList.innerHTML = "";
    products.forEach(function(product) {
        let listItem = document.createElement('li');
        listItem.textContent = `Name: ${product.name},  Price: ${product.price},  Description: ${product.description}`;
        productList.appendChild(listItem);

    })
});
