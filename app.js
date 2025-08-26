// Function to handle the contact form submission
function handleContactFormSubmission(event) {
    event.preventDefault();
    
    // First validate the form
    if (!validateForm()) {
        return false;
    }
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject')?.value || '';
    const message = document.getElementById('message').value;
    
    // Show loading state
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // For demonstration, directly send an email using mailto
    const mailtoLink = `mailto:khanalmanoj26@gmail.com?subject=${encodeURIComponent(subject || 'Website Contact Form')}&body=${encodeURIComponent('Name: ' + name + '\n\nEmail: ' + email + '\n\nMessage: ' + message)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message after a brief delay
    setTimeout(() => {
        // Log the form data
        console.log({
            name,
            email,
            subject,
            message
        });
        
        // Show success message
        const formContainer = document.querySelector('.contact-form');
        formContainer.innerHTML = `
            <div class="success-message" style="text-align: center;">
                <i class="fas fa-check-circle" style="color: #10B981; font-size: 3rem; margin-bottom: 1rem;"></i>
                <h3>Thank you, ${name}!</h3>
                <p>Your email client should have opened with your message. If not, please email me directly at: <a href="mailto:khanalmanoj26@gmail.com">khanalmanoj26@gmail.com</a></p>
                <button class="submit-btn" style="margin-top: 1.5rem;" onclick="resetContactForm()">
                    <i class="fas fa-paper-plane"></i> Send Another Message
                </button>
            </div>
        `;
        
        // Reset the button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }, 1000);
    
    return false;
}

// Function to reset the contact form after submission
function resetContactForm() {
    const formContainer = document.querySelector('.contact-form');
    formContainer.innerHTML = `
        <form id="contact-form" onsubmit="return validateForm()">
            <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" name="name" class="form-control" placeholder="Your name">
            </div>
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" name="email" class="form-control" placeholder="your.email@example.com">
            </div>
            <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" id="subject" name="subject" class="form-control" placeholder="What is this regarding?">
            </div>
            <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" name="message" class="form-control" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" class="submit-btn">
                <i class="fas fa-paper-plane"></i> Send Message
            </button>
        </form>
    `;
    
    // Reattach event listener
    document.getElementById('contact-form').addEventListener('submit', handleContactFormSubmission);
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // Hide preloader after the page loads
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('fade-out');
            }, 500);
        });
        // Fallback in case load event already fired
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 1000);
    }
    // Initialize contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmission);
    }
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
    }
});
