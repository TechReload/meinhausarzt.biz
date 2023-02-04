function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

/*
const headerEl = document.querySelector('.navbar');
const mobileHeaderEl = document.querySelector('.navbar-mobile');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        headerEl.classList.add('header-scrolled');
        if (window.innerWidth < 1400) {
            mobileHeaderEl.classList.add('header-scrolled');
        }
    } else {
        headerEl.classList.remove('header-scrolled');
        mobileHeaderEl.classList.remove('header-scrolled');
    }
});

*/