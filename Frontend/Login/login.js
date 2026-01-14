document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const loginData = {
        email: document.getElementById("email").value, 
        password: document.getElementById("password").value
    };

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
        alert("Login successful!");
        window.location.href = "../Inventory/inventory.html";
    })
    .catch(err => {
        alert(err.message);
        console.error(err);
    });
});
