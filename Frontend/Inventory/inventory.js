const API_URL = "http://localhost:8080/api/products";

function loadProducts() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("productTable");
            table.innerHTML = "";

            let totalVal = 0;
            let lowStock = 0;

            data.forEach((p, i) => {

                if (p.status && p.status.toUpperCase() === "ACTIVE") {
                    totalVal += (p.price * p.quantity);
                }

                if (p.quantity < 5) lowStock++;

                const statusClass = p.status ? p.status.toLowerCase() : 'inactive';

                // Inside your data.forEach loop:
                table.innerHTML += `
                    <tr>
                        <td>${i + 1}</td> 
                        <td>
                            <div class="product-info">
                                <span class="p-name" style="display: block; font-weight: 600;">${p.productName}</span>
                                <div style="display: flex; gap: 8px; align-items: center; margin-top: 2px;">
                                    <span class="p-code" style="font-size: 0.75rem; font-weight: 500; color: #979797;">${p.productCode}</span>
                                </div>
                            </div>
                        </td>
                        <td>${p.category}</td>
                    <td class="col-qty">${p.quantity}</td> 
                    <td class="col-price">RM ${parseFloat(p.price).toFixed(2)}</td>
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

            document.getElementById("totalCount").innerText = data.length;
            document.getElementById("totalValue").innerText = `RM ${totalVal.toFixed(2)}`;
            document.getElementById("lowStockCount").innerText = lowStock;
        })
        .catch(err => console.error("Failed to load products:", err));
}

function deleteProduct(id) {
    // 1. Show the Warning Confirmation
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',    // Red for delete
        cancelButtonColor: '#3085d6',   // Blue for cancel
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
    }).then((result) => {
        // 2. If the user clicked "Yes, delete it!"
        if (result.isConfirmed) {
            fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            })
                .then(response => {
                    if (!response.ok) throw new Error("Delete failed");

                    // 3. Show Success Message
                    Swal.fire(
                        'Deleted!',
                        'The product has been removed from inventory.',
                        'success'
                    );

                    // 4. Refresh the table
                    loadProducts();
                })
                .catch(err => {
                    console.error(err);
                    Swal.fire('Error', 'Could not delete the product.', 'error');
                });
        }
    });
}

function editProduct(id) {
    window.location.href = `../Edit/edit-product.html?id=${id}`;
}

function goToCreate() {
    window.location.href = "../create/create-product.html";
}

loadProducts();