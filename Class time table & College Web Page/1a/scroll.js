document.addEventListener('DOMContentLoaded', function() {
    const scrollText = document.querySelector('.scroll-text');
    const scrollWidth = scrollText.offsetWidth;
    const containerWidth = scrollText.parentElement.offsetWidth;
    
    function adjustAnimation() {
        const duration = (scrollWidth + containerWidth) / 100; // Adjust speed here
        scrollText.style.animation = `scroll ${duration}s linear infinite`;
    }

    adjustAnimation();
    window.addEventListener('resize', adjustAnimation);
});