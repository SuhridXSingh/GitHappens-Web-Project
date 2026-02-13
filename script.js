// Portfolio Website: script.js
// Add smooth scroll and interactive effects

// Smooth scroll for anchor links
// This code enables smooth scrolling when clicking navigation or scroll buttons

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// You can add more JS for interactive effects if needed
// For now, this script handles smooth scrolling for a modern feel
