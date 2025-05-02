function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");
  
    if (name === "") {
      error.textContent = "Name cannot be empty.";
      return false;
    }
  
    if (!email.endsWith("@gmail.com")) {
      error.textContent = "Email must be a Gmail address.";
      return false;
    }
  
    if (password.length < 6) {
      error.textContent = "Password must be at least 6 characters.";
      return false;
    }
  
    error.textContent = "";
    alert(`Welcome, ${name}!`);
    return true;
  }
  