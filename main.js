document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show")
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay:100, reset:true});
ScrollReveal().reveal('.cards-banner-one',{delay:200,reset:true});
ScrollReveal().reveal('.cards-banner-two',{delay:400,reset:true});
ScrollReveal().reveal('.social',{delay:400,reset:true});
ScrollReveal().reveal('.footer-links',{delay:400,reset:true});
ScrollReveal().reveal('.footer',{delay:400,reset:true});