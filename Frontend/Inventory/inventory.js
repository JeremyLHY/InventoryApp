const API_URL = "http://localhost:8080/api/products";

function loadProducts() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("productTable");
            table.innerHTML = ""; 

            let totalVal = 0;
            let lowStock = 0;

            data.forEach(p => {
                // --- NEW CONDITION START ---
                // Only add to total value if status is ACTIVE
                // We use .toUpperCase() to ensure it matches even if the DB has lowercase
                if (p.status && p.status.toUpperCase() === "ACTIVE") {
                    totalVal += (p.price * p.quantity);
                }
                // --- NEW CONDITION END ---

                if (p.quantity < 5) lowStock++;

                const statusClass = p.status ? p.status.toLowerCase() : 'inactive';

                table.innerHTML += `
                    <tr>
                        <td>#${p.id}</td>
                        <td>
                            <div class="product-info">
                                <span class="p-name">${p.productName}</span>
                                <span class="p-code">${p.productCode}</span>
                            </div>
                        </td>
                        <td>${p.category}</td>
                        <td>RM ${parseFloat(p.price).toFixed(2)}</td>
                        <td>${p.quantity}</td>
                        <td>
                            <span class="badge ${statusClass}">${p.status}</span>
                        </td>
                        <td class="text-right">
                            <div class="action-buttons">
                                <button class="btn-edit" onclick="editProduct(${p.id})">Edit</button>
                                <button class="btn-delete" onclick="deleteProduct(${p.id})">Delete</button>
                            </div>
                        </td>
                    </tr>
                `;
            });

            // Update the UI
            document.getElementById("totalCount").innerText = data.length;
            document.getElementById("totalValue").innerText = `RM ${totalVal.toFixed(2)}`;
            document.getElementById("lowStockCount").innerText = lowStock;
        })
        .catch(err => console.error("Failed to load products:", err));
}

function deleteProduct(id) {
    if (!confirm("Delete this product?")) return;
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(() => loadProducts());
}

function editProduct(id) {
    window.location.href = `../Edit/edit-product.html?id=${id}`;
}

function goToCreate() {
    window.location.href = "../create/create-product.html";
}

loadProducts();