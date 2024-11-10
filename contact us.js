// Form validation and popup handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from actually submitting
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      // If all fields are filled, show the popup
      document.getElementById('popupMessage').style.display = 'block';
      this.reset(); // Clear the form
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  // Close popup function
  function closePopup() {
    document.getElementById('popupMessage').style.display = 'none';
  }
  