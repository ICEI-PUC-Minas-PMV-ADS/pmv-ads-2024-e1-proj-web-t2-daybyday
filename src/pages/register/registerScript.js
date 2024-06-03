document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    if (/^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/.test(password)) {
        console.log("Senha válida!");
    } else {
        alert("A senha não atende aos requisitos. Ela deve conter no mínimo 8 caractéres, Uma letra maiúscula e um caractér especial");
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert("Sign up successful! Redirecting to login page...");
    console.log('Login:', username, password);

    window.location.href = '../login/login.html';
});

document.getElementById("mostrarSenha").addEventListener("click", function() {
    var senhaInput = document.getElementById("registerPassword");
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
    } else {
        senhaInput.type = "password";
    }
});

document.getElementById("mostrarConfirmSenha").addEventListener("click", function() {
    var confirmSenhaInput = document.getElementById("confirm_password");
    if (confirmSenhaInput.type === "password") {
        confirmSenhaInput.type = "text";
    } else {
        confirmSenhaInput.type = "password";
    }
});
