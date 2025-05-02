function validateEmail() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");
  
    // Check for @ in email
    if (!email.includes("@")) {
      error.textContent = "Email must include '@'";
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
  