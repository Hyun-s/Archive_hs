// Basic JavaScript for the CV website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (if needed)
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');

    // Add active class to current page
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-item a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animation to elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.post-preview, .content-item').forEach(el => {
        observer.observe(el);
    });
});

// Function to update calendar dynamically (placeholder)
function updateCalendar() {
    // This would be implemented with actual calendar functionality
    console.log('Calendar update function called');
}