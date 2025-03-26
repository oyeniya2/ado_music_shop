function validateForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Check if all fields are filled
    if (!email || !password || !confirmPassword) {
        alert('All fields are required!');
        return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    // Redirect to the success page if validation passes
    window.location.href = 'successpage.html';
}

function togglePassword(inputId, toggleIcon) {
    const input = document.getElementById(inputId);
    const isPassword = input.type === 'password';

    // Toggle input type
    input.type = isPassword ? 'text' : 'password';

    // Update the toggle icon
    toggleIcon.textContent = isPassword ? 'Hide Password' : 'Show';
}
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!email || !password || !confirmPassword) {
        alert('All fields are required!');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }

    // If all validations pass, redirect to the success page
    window.location.href = 'successpage.html';
}