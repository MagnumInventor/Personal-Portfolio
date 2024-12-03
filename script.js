

    // MENU SCROLL
const toggleButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggleButton.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
