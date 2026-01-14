document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    clearEmailError();

    const user = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(err => { throw err; });
        }
        return res.json();
    })
    .then(() => {
        alert("Registration successful!");
        window.location.href = "../Login/login.html";
    })
    .catch(err => {
        console.error(err);

        // Backend sends { error: "Email already exists" }
        if (err.error) {
            showEmailError(err.error);
        } else {
            alert("Registration failed");
        }
    });
});

function showEmailError(msg) {
    const emailInput = document.getElementById("email");
    let errorSpan = document.getElementById("emailError");

    if (!errorSpan) {
        errorSpan = document.createElement("span");
        errorSpan.id = "emailError";
        errorSpan.style.color = "red";
        errorSpan.style.fontSize = "0.9em";
        emailInput.parentNode.appendChild(errorSpan);
    }

    errorSpan.innerText = msg;
    emailInput.style.border = "2px solid red";
}

function clearEmailError() {
    const emailInput = document.getElementById("email");
    const errorSpan = document.getElementById("emailError");

    if (errorSpan) errorSpan.remove();
    emailInput.style.border = "";
}
