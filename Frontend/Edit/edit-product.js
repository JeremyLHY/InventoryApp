const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const API_URL = "http://localhost:8080/api/products";

// Get input elements
const productCodeDisplay = document.getElementById("productCode");
const productName = document.getElementById("productName");
const category = document.getElementById("category");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const status = document.getElementById("status");

// Load product data
fetch(`${API_URL}/${id}`)
    .then(res => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
    })
    .then(p => {
        // Fill the fields with existing data
        productCodeDisplay.value = p.productCode; // Now correctly displays from DB
        productName.value = p.productName;
        category.value = p.category;
        price.value = parseFloat(p.price).toFixed(2);
        quantity.value = p.quantity;
        status.value = p.status;
    })
    .catch(err => {
        console.error(err);
        Swal.fire('Error', 'Could not load product details', 'error');
    });

// Handle form submit
// Handle form submit
document.getElementById("editForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // 1. Prepare the updated object
    const updated = {
        productName: productName.value,
        category: category.value,
        price: parseFloat(price.value),
        quantity: parseInt(quantity.value),
        status: status.value
    };

    // 2. Show Confirmation Dialog first
    Swal.fire({
        title: 'Save changes?',
        text: "Are you sure you want to update this product's information?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#aaa',
        confirmButtonText: 'Yes, update it!',
        cancelButtonText: 'Review again'
    }).then((result) => {
        // 3. Only if user clicks 'Yes, update it!'
        if (result.isConfirmed) {
            
            // Show a tiny loading state (optional but nice)
            Swal.showLoading();

            fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updated)
            })
            .then(res => {
                if (!res.ok) throw new Error("Update failed");
                return res.json();
            })
            .then(data => {
                // SUCCESS POPUP
                Swal.fire({
                    title: 'Updated!',
                    text: `Product "${data.productName}" has been updated successfully.`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Back to Inventory'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "../Inventory/inventory.html";
                    }
                });
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update product. Please try again.',
                    icon: 'error',
                    confirmButtonColor: '#d33'
                });
            });
        }
    });
});