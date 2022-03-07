var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let burger = $ ('.burger');
let nav = $('.header__nav');

burger.on('click', function () {
nav.toggleClass('active');
burger.toggleClass('active');
});
