window.addEventListener('load', function() {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 7,
        spaceBetween: 50,
        // slidesPerGroup: 1,
        slidesOffsetBefore: 50,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: '.swiper-button-next img',
            prevEl: '.swiper-button-prev img',
        },
    });

});