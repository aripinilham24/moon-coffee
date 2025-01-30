const swiper = new Swiper('.swiper', {
    speed: 700,
    spaceBetween: 60,
    loop: true,
    slidesPerView: 3,
    direction: "horizontal",
    mousewheel: true,
    keyboard: {
        enabled: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true,
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        }
    }
});