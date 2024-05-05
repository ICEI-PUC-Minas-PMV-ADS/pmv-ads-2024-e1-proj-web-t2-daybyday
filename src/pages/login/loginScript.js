document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
        console.log('Login successful');
        window.location.href = '../dashboard/dashboard.html'
        // Redirect to the next page here
    } else {
        console.log('Login failed');
    }
});