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
        const minLength = /^(?=.{8,})/;
        const upperCase = /^(?=.*[A-Z])/;
        const specialChar = /^(?=.*[!@#$%^&*/])/;

        if (!minLength.test(password)) {
            return "A senha deve conter pelo menos 8 caracteres.";
        }
        if (!upperCase.test(password)) {
            return "A senha deve conter pelo menos uma letra maiúscula.";
        }
        if (!specialChar.test(password)) {
            return "A senha deve conter pelo menos um caractere especial.";
        }
        return '';
    }

    var passwordError = validPassword(password);
    if (passwordError) {
        errorMessage.textContent = passwordError;
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert("Cadastro realizado com sucesso! Faça login para acessar a plataforma.");
    window.location.href = '../login/login.html';
});
