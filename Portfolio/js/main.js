// Typing animation using Typed.js
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize Typed.js if the element exists
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const typed = new Typed('.typing', {
            strings: ['Java Developer', 'Full Stack Developer', 'Web Designer', 'Programmer'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Check for typing element on about page
    const typingElement2 = document.querySelector('.typing-2');
    if (typingElement2) {
        const typed2 = new Typed('.typing-2', {
            strings: ['Java Developer', 'Full Stack Developer', 'Web Designer', 'Programmer'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.innerHTML = menu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking a link (mobile)
    const navLinks = document.querySelectorAll('.menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('show');
            }
        });
    };

    // Initial check for animations
    animateOnScroll();
    
    // Check for animations on scroll
    window.addEventListener('scroll', animateOnScroll);
}); 