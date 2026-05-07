// Simple navigation for the portfolio site
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Show home section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

// Function to show a specific post (simplified for demo)
function showPost(postId) {
    alert(`Showing post: ${postId}\n\nIn a real implementation, this would load the full post content.`);
    showSection('blog');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});