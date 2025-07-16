// Project filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and project cards
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Add click event to each filter button
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get filter value
            const filterValue = btn.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                // Show all projects if filter is 'all'
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('show');
                    }, 100);
                } else {
                    // Check if card has the filter category
                    const categories = card.getAttribute('data-category').split(' ');
                    
                    if (categories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.classList.add('show');
                        }, 100);
                    } else {
                        card.classList.remove('show');
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // Show all projects initially with animation
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, 100 * index);
    });

    // Animation on scroll for projects
    const animateProjects = () => {
        const projects = document.querySelectorAll('.project-card:not(.show)');
        const windowHeight = window.innerHeight;
        
        projects.forEach(project => {
            const projectTop = project.getBoundingClientRect().top;
            
            if (projectTop < windowHeight - 100) {
                project.classList.add('show');
            }
        });
    };

    // Check for animations on scroll
    window.addEventListener('scroll', animateProjects);
}); 