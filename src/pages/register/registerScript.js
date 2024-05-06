document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert("Sign up successful! Redirecting to login page...");
    console.log('Login:', username, password);

    window.location.href = '../login/login.html';
});