function validateLogin() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
  
    if (!email.includes("@") || !email.endsWith("@gmail.com")) {
      error.textContent = "Email must be a valid Gmail address (e.g. you@gmail.com)";
      return false;
    }
  
    if (password.length < 6) {
      error.textContent = "Password must be at least 6 characters";
      return false;
    }
  
    error.textContent = "";
    alert("Gmail Login successful!");
    return true;
  }
  