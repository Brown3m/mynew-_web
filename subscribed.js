function subscribe() {
    const emailInput = document.getElementById('emailInput').value;
    if (emailInput) {
      // Show pop-up
      const popup = document.getElementById('popup');
      popup.style.display = 'flex';
  
      // Hide pop-up after 3 seconds
      setTimeout(function() {
        popup.style.display = 'none';
      }, 3000);
  
      // Reset email input
      document.getElementById('emailInput').value = '';
    } else {
      alert('Please enter a valid email address!');
    }
  }
