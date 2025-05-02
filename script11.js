document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
    const emailError = document.getElementById("emailError");
    const passError = document.getElementById("passError");
  
    let valid = true;
  
    if (!email || !email.includes("@") || !email.endsWith("@gmail.com")) {
      emailError.textContent = "Enter a valid Gmail address.";
      valid = false;
    } else {
      emailError.textContent = "";
    }
  
    if (pass.length < 6) {
      passError.textContent = "Password must be at least 6 characters.";
      valid = false;
    } else {
      passError.textContent = "";
    }
  
    if (valid) {
      alert("Login successful!");
      // Here you can redirect to dashboard or another page
    }
  });
  