document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    console.log('Login:', username, password);
});