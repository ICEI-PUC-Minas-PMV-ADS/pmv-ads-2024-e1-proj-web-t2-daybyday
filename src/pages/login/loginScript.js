document
.getElementById("loginForm")
.addEventListener("submit", function (event) {
  event.preventDefault();
  var emailOrUsername = document.getElementById("loginInput").value;
  var password = document.getElementById("loginPassword").value;
  var storedUsername = localStorage.getItem("username");
  var storedEmail = localStorage.getItem("email");
  var storedPassword = localStorage.getItem("password");
  
  if (emailOrUsername.includes("@")) {
    var email = emailOrUsername.toLowerCase();
      if (!validateEmail(email)) {
          alert("Email inválido");
          return;
      }
  } else {
      var username = emailOrUsername;
  }
  
  if ((username && username === storedUsername) || (email && email === storedEmail)) {
      if (password === storedPassword) {
          alert("Login successful!");
          console.log("Login successful");
          window.location.href = "../dashboard/dashboard.html";
      } else {
          alert("Senha incorreta");
          console.log("Senha incorreta");
      }
  } else {
      alert("Usuário ou email não encontrado");
      console.log("Usuário ou email não encontrado");
  }
});

function validateEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
