function validateForm() {
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");
  
    if (!email.includes("@")) {
      error.textContent = "Email must contain '@'";
      return false;
    }
  
    if (pass.length < 6) {
      error.textContent = "Password must be at least 6 characters";
      return false;
    }
  
    error.textContent = "";
    alert("Login successful!");
    return true;
  }
  