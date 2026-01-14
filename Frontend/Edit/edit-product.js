const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const API_URL = "http://localhost:8080/api/products";

// Get input elements
const productName = document.getElementById("productName");
const category = document.getElementById("category");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const status = document.getElementById("status");

// Load product data
fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(p => {
        productName.value = p.productName;
        category.value = p.category;
        price.value = parseFloat(p.price).toFixed(2);
        quantity.value = p.quantity;
        status.value = p.status;
    });

// Handle form submit
document.getElementById("editForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const updated = {
        productName: productName.value,
        category: category.value,
        price: parseFloat(price.value).toFixed(2),
        quantity: parseInt(quantity.value),
        status: status.value
    };

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated)
    })
    .then(res => {
        if (!res.ok) throw new Error("Update failed");
        return res.json();
    })
    .then(() => window.location.href = "../Inventory/inventory.html")
    .catch(err => {
        console.error(err);
        alert("Failed to update product");
    });
});
