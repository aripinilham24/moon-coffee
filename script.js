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

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});