particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json');

VanillaTilt.init(document.querySelector("#tiltBox"), {
  max: 30,
  speed: 400,
  glare: true,
  "max-glare": 0.5
});

function handleLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");
  const clickSound = document.getElementById("clickSound");

  clickSound.play();

  if (!email.endsWith("@gmail.com")) {
    error.textContent = "Only Gmail addresses allowed.";
    return false;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return false;
  }

  error.textContent = "";
  alert("Welcome to the Galaxy!");

  // You could integrate a redirect after successful login.
  window.location.href = "dashboard.html"; // Example redirect
}

function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}
