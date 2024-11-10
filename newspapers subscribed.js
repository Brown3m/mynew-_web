document.getElementById('subscribeBtn').addEventListener('click', function() {
    var email = document.getElementById('emailInput').value;
  
    // Validate email input (basic check)
    if (email) {
      // Display the popup message
      document.getElementById('popupMessage').style.display = 'flex';
      
      // Hide the popup after 3 seconds
      setTimeout(function() {
        document.getElementById('popupMessage').style.display = 'none';
      }, 3000);
    } else {
      alert('Please enter a valid email address.');
    }
  });
  
  // Close the popup if the user clicks the close button
  document.getElementById('popupCloseBtn').addEventListener('click', function() {
    document.getElementById('popupMessage').style.display = 'none';
  });
  