function validateForm() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
  
    if (user === '' || pass === '') {
      alert('Please fill all fields.');
      return false;
    }
  
    alert('Login Successful!');
    return true;
  }
  