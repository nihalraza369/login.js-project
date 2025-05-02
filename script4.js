function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
  
    if (name === "" || email === "" || password === "") {
      error.textContent = "Please fill all fields.";
      return false;
    }
  
    if (!email.endsWith("@gmail.com")) {
      error.textContent = "Only Gmail addresses allowed.";
      return false;
    }
  
    if (password.length < 6) {
      error.textContent = "Password must be at least 6 characters.";
      return false;
    }
  
    error.textContent = "";
    alert(`Welcome, ${name}! Login successful.`);
    return true;
  }
  