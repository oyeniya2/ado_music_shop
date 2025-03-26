// Wait for DOM to load before executing
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const cvvInput = document.querySelector('#cvvInput');
    const expiryMonth = document.querySelector('#expiryMonth');
    const expiryYear = document.querySelector('#expiryYear');
  
    // Flip card when CVV input is focused
    cvvInput.addEventListener('focus', () => {
      container.style.transform = 'rotateY(180deg)';
    });
  
    // Flip card back to the front when CVV input loses focus
    cvvInput.addEventListener('blur', () => {
      container.style.transform = 'rotateY(0deg)';
    });
  
    // Check if expiration date inputs are filled
    function handleExpirationInput() {
      if (expiryMonth.value.length === 2 && expiryYear.value.length === 2) {
        container.style.transform = 'rotateY(180deg)'; // Flip to the back
        cvvInput.focus(); // Automatically focus on CVV input
      }
    }
  
    // Listen for input events on expiry fields
    expiryMonth.addEventListener('input', handleExpirationInput);
    expiryYear.addEventListener('input', handleExpirationInput);
  });
  