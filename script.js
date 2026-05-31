document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Animation Logic
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Element becomes visible when 15% is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that triggers the CSS transition
                entry.target.classList.add('visible');
                // Stop observing once it's visible so it doesn't fade out and in again
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Grab all elements with the fade-in class and observe them
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // 2. Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload
            
            // For the internship submission, a simple alert is sufficient 
            // to show you know how to handle form events.
            alert('Thank you for reaching out! This form is successfully linked to JavaScript.');
            
            // Clear the form fields
            this.reset();
        });
    }
});