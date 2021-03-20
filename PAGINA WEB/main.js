document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 50});
ScrollReveal().reveal('.cards-baner-two', { delay: 50});
ScrollReveal().reveal('.cards-baner-one', { delay: 50});
ScrollReveal().reveal('.social', { delay: 50});

let tl = gsap.timeline({ repeat: 1, yoyo: true});
tl.from('#hell', {
    duration: 2,
    rotate 360
});