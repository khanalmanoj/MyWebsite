// Email validation for the contact form
function validateEmail(email) {
    // Simplified email validation regex for better compatibility
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Validate form before submission
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let isValid = true;
    
    // Reset previous error messages
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => element.remove());
    
    // Validate name
    if (nameInput.value.trim() === '') {
        displayError(nameInput, 'Name is required');
        isValid = false;
    }
    
    // Validate email
    if (emailInput.value.trim() === '') {
        displayError(emailInput, 'Email is required');
        isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        displayError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate message
    if (messageInput.value.trim() === '') {
        displayError(messageInput, 'Message is required');
        isValid = false;
    }
    
    return isValid;
}

// Display error message below the input field
function displayError(inputElement, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e53e3e';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    inputElement.parentNode.appendChild(errorDiv);
    inputElement.style.borderColor = '#e53e3e';
    
    // Remove error when input changes
    inputElement.addEventListener('input', () => {
        const errorMsg = inputElement.parentNode.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
            inputElement.style.borderColor = '';
        }
    });
}
