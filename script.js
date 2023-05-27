// Agregar un evento de escucha al formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    // Obtener los valores ingresados por el usuario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Verificar las credenciales de inicio de sesión
    if (username === "admin" && password === "admin") {
      alert("Inicio de sesión exitoso");
      window.location.href = "home.html"; // Redirigir al usuario a home.html
    } else {
      alert("Credenciales inválidas. Inténtalo de nuevo.");
    }
  });
  