document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const loginData = {
        email: document.getElementById("email").value, 
        password: document.getElementById("password").value
    };

    // 1. Show Loading State immediately
    Swal.fire({
        title: 'Authenticating...',
        text: 'Please wait while we verify your credentials',
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading(); // Starts the spinner
        }
    });

    fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Invalid email or password");
        }
        return res.json();
    })
    .then(data => {
        // 2. Success State: Change loader to a checkmark
        Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Redirecting to dashboard...',
            timer: 1500, // Show for 1.5 seconds
            showConfirmButton: false
        }).then(() => {
            // 3. Navigate after the success message finishes
            window.location.href = "../Inventory/inventory.html";
        });
    })
    .catch(err => {
        // 4. Error State: Show what went wrong
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: err.message,
            confirmButtonColor: '#4f46e5'
        });
        console.error(err);
    });
});