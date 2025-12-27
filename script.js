let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    // Adds the 'naWinScroll' class if page is scrolled more than 0px
    nav.classList.toggle('naWinScroll', window.scrollY > 0);
});