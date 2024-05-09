document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("loginEmail").value;
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
    
    if (!email.includes("@") ){
      alert("Email inválido");
    }
    if (username === storedUsername && password === storedPassword) {
      alert("Login successful!");
      console.log("Login successful");
      window.location.href = "../dashboard/dashboard.html";
    } else {
      alert("Login failed");
      console.log("Login failed");
    }
  });
