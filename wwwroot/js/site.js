// SmallFootprint - Minimal JavaScript

// Smooth scroll to element (for navigation)
window.scrollToElement = function (id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Scroll to top
window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Parallax effect (optional - can be CSS-only with background-attachment: fixed)
window.initParallax = function () {
    const header = document.querySelector('.parallax-content');
    if (header) {
        window.addEventListener('scroll', function () {
            const st = window.pageYOffset;
            header.style.backgroundPosition = `center calc(50% + ${st * 0.5}px)`;
        });
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    if (typeof window.initParallax === 'function') {
        window.initParallax();
    }
});