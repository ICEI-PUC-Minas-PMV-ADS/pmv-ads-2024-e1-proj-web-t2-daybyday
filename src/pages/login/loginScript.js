document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username && password) {
      if (password === storedPassword && username === storedUsername) {
        alert("Login successful!");
        console.log("Login successful");
        window.location.href = "../dashboard/dashboard.html";
      } else {
        alert("Senha incorreta");
        console.log("Senha incorreta");
      }
    } else {
      alert("Usuário não encontrado");
      console.log("Usuário não encontrado");
    }
  });
