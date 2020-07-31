window.addEventListener('load', function() {

    let mySwiper;
    let swiperRegions;

    function checkWindowWidth() {
        if (window.innerWidth <= 500) {
            swiperRegions = createSlider('.regions-inner', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.regions-slider-button-next', prevEl: '.regions-slider-button-prev' }, {}, 'regions-block', 'regions-block__box', 15);
            // document.querySelector('.regions-block').style.transform = 'translate3d(0px, 0px, 0px)';
            // if (mySwiper !== undefined) destroySlider(mySwiper);
        }
        if (window.innerWidth > 500) {
            mySwiper = createSlider('.swiper-container', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.slider-button-next', prevEl: '.slider-button-prev' }, { 500: { spaceBetween: 50 } });
            // if (swiperRegions !== undefined) destroySlider(swiperRegions);
        }
    }

    function destroySlider(sliderSwiper) {
        sliderSwiper.destroy(true, true);
    }

    function createSlider(sliderSwiper, _speed, _slidesPerView, _spaceBetween, _loop, _autoplay, _navigation, _breakpoints, _wrapperClass = 'swiper-wrapper', _slideClass = 'swiper-slide', _slidesOffsetBefore = 0) {
        return new Swiper(sliderSwiper, {
            speed: _speed,
            slidesPerView: _slidesPerView,
            spaceBetween: _spaceBetween,
            loop: _loop,
            autoplay: _autoplay,
            navigation: _navigation,
            breakpoints: _breakpoints,
            wrapperClass: _wrapperClass,
            slideClass: _slideClass,
            slidesOffsetBefore: _slidesOffsetBefore
        });
    }

    checkWindowWidth();

    window.addEventListener('resize', checkWindowWidth);
});