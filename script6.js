function toggleTheme() {
    document.body.classList.toggle('dark');
  }
  
  function handleLogin() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
    const coursesBox = document.getElementById("coursesBox");
  
    if (!name || !email || !password) {
      error.textContent = "Please fill in all fields.";
      return false;
    }
  
    if (!email.endsWith("@gmail.com")) {
      error.textContent = "Gmail only is allowed.";
      return false;
    }
  
    if (password.length < 6) {
      error.textContent = "Password must be 6+ characters.";
      return false;
    }
  
    error.textContent = "";
  
    // Simulate course suggestion
    let firstName = name.split(" ")[0].toLowerCase();
    let courses = suggestCourses(firstName);
  
    coursesBox.style.display = "block";
    coursesBox.innerHTML = `
      <strong>Hi ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}, we suggest you explore:</strong><br>
      <ul>
        ${courses.map(c => `<li>${c}</li>`).join("")}
      </ul>
    `;
  
    return false;
  }
  
  function suggestCourses(name) {
    const aiCourses = ["AI for Beginners", "ChatGPT + Python Projects", "FastAPI Crash Course"];
    const webCourses = ["Full Stack Web Dev", "Next.js Masterclass", "Frontend Projects"];
    const freelancing = ["Fiverr Gig Secrets", "How to get clients?", "Portfolio Building"];
  
    if (name.includes("nihal")) return [...aiCourses, ...webCourses];
    if (name.includes("ali")) return [...webCourses, ...freelancing];
    return [...aiCourses.slice(0, 2), ...freelancing.slice(0, 1)];
  }
  