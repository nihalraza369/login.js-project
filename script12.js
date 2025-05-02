const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  if (!email.value.includes("@") || !email.value.endsWith("@gmail.com")) {
    emailError.textContent = "Please enter a valid Gmail address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (password.value.length < 6) {
    passError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passError.textContent = "";
  }

  if (valid) {
    alert("Login successful!");
    // Redirect or backend logic here
  }
});
