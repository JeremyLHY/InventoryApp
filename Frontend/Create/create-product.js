document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const productCodeInput = document.getElementById("productCode");
    
    // RESET: Clear previous error styles every time they click submit
    productCodeInput.style.borderColor = ""; 

    const product = {
        productName: document.getElementById("productName").value,
        productCode: productCodeInput.value.trim().toUpperCase(),        category: document.getElementById("category").value,
        price: parseFloat(parseFloat(document.getElementById("price").value).toFixed(2)),
        quantity: parseInt(document.getElementById("quantity").value),
        status: document.getElementById("status").value
    };

    fetch("http://localhost:8080/api/products/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
    })
    .then(async response => {
        if (response.status === 409) {
            const msg = await response.text();
            
            // Highlight the field
            productCodeInput.style.borderColor = "red";
            productCodeInput.focus();

            // Use Swal for the error too!
            Swal.fire({
                title: 'Duplicate Code!',
                text: msg,
                icon: 'error',
                confirmButtonColor: '#d33'
            });

            throw new Error("Duplicate code");
        }
        
        if (!response.ok) {
            throw new Error("Failed to save product");
        }
        return response.json();
    })
    .then(data => {
        // Success Popup
        Swal.fire({
            title: 'Success!',
            text: 'Product "' + data.productName + '" added successfully',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Great!'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "../Inventory/inventory.html";
            }
        });
    })
    .catch(error => {
        if (error.message !== "Duplicate code") {
            console.error(error);
            Swal.fire('Error', 'Something went wrong while saving.', 'error');
        }
    });
});