document.addEventListener('DOMContentLoaded', () => {
    const slideMenu = document.getElementById('slideMenu');
    const burger = document.querySelector('.burger');
    const closeBtn = document.getElementById('closeBtn');

    // Open the slide menu
    burger.addEventListener('click', () => {
        slideMenu.classList.add('open');
    });

    // Close the slide menu
    closeBtn.addEventListener('click', () => {
        slideMenu.classList.remove('open');
    });

    // Close the slide menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!slideMenu.contains(event.target) && !burger.contains(event.target)) {
            slideMenu.classList.remove('open');
        }
    });
});
