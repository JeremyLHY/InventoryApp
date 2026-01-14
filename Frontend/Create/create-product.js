document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const product = {
        productName: document.getElementById("productName").value,
        productCode: document.getElementById("productCode").value,
        category: document.getElementById("category").value,
        price: parseFloat(parseFloat(document.getElementById("price").value).toFixed(2)),
        quantity: parseInt(document.getElementById("quantity").value),
        status: document.getElementById("status").value
    };

    fetch("http://localhost:8080/api/products/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to save product");
        }
        return response.json();
    })
    .then(() => {
        window.location.href = "../Inventory/inventory.html";
    })
    .catch(error => {
        console.error(error);
        alert("Error saving product");
    });
});

function goBack() {
    window.location.href = "http://127.0.0.1:5500/inventory.html";
}
