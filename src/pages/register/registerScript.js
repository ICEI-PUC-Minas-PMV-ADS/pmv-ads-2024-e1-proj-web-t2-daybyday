document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;
    var confirm_password = document.getElementById("confirm_password").value;
    var errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = '';

    if (password !== confirm_password) {
        errorMessage.textContent = "As senhas não coincidem! Por favor, digite a mesma senha nos dois campos.";
        return;
    }

    function validPassword(password) {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*/])(?=.{8,})/;
        return regex.test(password);
    }

    if (!validPassword(password)) {
        errorMessage.textContent = "Senha inválida! A senha deve conter pelo menos 8 caracteres, uma letra maiúscula e um caractere especial.";
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert("Cadastro realizado com sucesso! Faça login para acessar a plataforma.");
    window.location.href = '../login/login.html';
});
