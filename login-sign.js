 // Toggle between Sign Up and Log In forms
 function showSignUp() {
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-toggle').classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
  }

  function showLogin() {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('signup-toggle').classList.remove('active');
    document.getElementById('login-toggle').classList.add('active');
  }

  // Function to create account and store credentials
  function createAccount() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
      // Store credentials in localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);

      // Display success popup
      showPopup('Account created successfully!');
      
      // Show login form after 3 seconds
      setTimeout(() => {
        showLogin();
      }, 3000);
    } else {
      showPopup('Please fill all fields.', 'error');
    }
  }

  // Function to log in and validate credentials
  function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      showPopup('Login successful!');
    } else {
      showPopup('Invalid credentials. Please try again.', 'error');
    }
  }

  // Show popup message
  function showPopup(message, type = 'success') {
    const popup = document.getElementById('popup-message');
    popup.textContent = message;
    popup.style.display = 'block';
    popup.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';

    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  }
