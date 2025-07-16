// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const messageStatus = document.querySelector('.message-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form inputs
            const name = contactForm.querySelector('.field.name input').value;
            const email = contactForm.querySelector('.field.email input').value;
            const subject = contactForm.querySelector('.field input[placeholder="Subject"]').value;
            const message = contactForm.querySelector('.textarea textarea').value;
            
            // Simulate form submission (in a real app, you would send this to a server)
            messageStatus.textContent = "Sending...";
            
            // Simulate server delay
            setTimeout(() => {
                // Validate form inputs (basic validation)
                if (name && email && subject && message) {
                    // Success message
                    messageStatus.textContent = "Message sent successfully!";
                    messageStatus.style.color = "green";
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Clear success message after 5 seconds
                    setTimeout(() => {
                        messageStatus.textContent = "";
                    }, 5000);
                } else {
                    // Error message
                    messageStatus.textContent = "Please fill all fields!";
                    messageStatus.style.color = "red";
                }
            }, 1500);
        });
    }

    // Animation on scroll for contact section
    const animateContact = () => {
        const elements = document.querySelectorAll('.contact .animate-on-scroll');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('show');
            }
        });
    };

    // Initial check for animations
    animateContact();
    
    // Check for animations on scroll
    window.addEventListener('scroll', animateContact);
}); 