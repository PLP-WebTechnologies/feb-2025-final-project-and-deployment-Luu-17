// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Interactive Hover Effects (Future Enhancement)
const imageLinks = document.querySelectorAll('.image-gallery a');
imageLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.filter = 'brightness(1.2)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.filter = 'brightness(1)';
    });
});
