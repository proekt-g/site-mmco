window.addEventListener('load', function() {

    let mySwiper;
    let swiperRegions;

    if (document.querySelector('.region .swiper-container') !== null) swiperRegions = createSlider('.regions .swiper-container', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.regions .slider-button-next', prevEl: '.regions .slider-button-prev' }, { 1400: { slidesPerView: 12 } });

    function checkWindowWidth() {
        if (window.innerWidth <= 500) {
            if (document.querySelector('.landing .regions-inner') !== null) swiperRegions = createSlider('.regions-inner', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.regions-slider-button-next', prevEl: '.regions-slider-button-prev' }, {}, 'regions-block', 'regions-block__box', 15);
        }
        if (window.innerWidth > 500) {
            if (document.querySelector('.landing .swiper-container') !== null) mySwiper = createSlider('.swiper-container', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.slider-button-next', prevEl: '.slider-button-prev' }, { 500: { spaceBetween: 50 } });

            if (document.querySelector('.region .swiper-container') !== null) mySwiper = createSlider('.partners .swiper-container', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.partners .slider-button-next', prevEl: '.partners .slider-button-prev' }, { 500: { spaceBetween: 50 } });
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

    function clickFilterItem() {
        $('.activity-filter__item').not($($(this).parent())).removeClass('open');
        $('.activity-filter__main').not($(this)).removeClass('active');
        $('.activity-filter__submain').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
        this.closest('.activity-filter__item').classList.toggle('open');
    }

    function clickFilterSubitem() {
        let buffText;
        buffText = this.closest('.activity-filter__item').querySelector('.activity-filter__main').textContent;
        this.closest('.activity-filter__item').querySelector('input').value = this.id;
        this.closest('.activity-filter__item').querySelector('.activity-filter__main').textContent = this.textContent;
        this.textContent = buffText;
        clickFilterItem();
    }

    function clickAvatar() {
        let hiddenElement = this.closest('.content-block__box').querySelector('.content-block-hidden');
        if (this.querySelector('img.hidden') === null) {
            // console.log();
            // console.log(hiddenElement.style.height = '1px');
            hiddenElement.style.height = (this.closest('.content-block__box').querySelector('.content-block-inner').offsetHeight + 40).toString() + 'px';
            $('.content-block-hidden').hide(200);
            $('.content-block-avatar__img img').not($(this).children('img')).removeClass('hidden');
            $(hiddenElement).toggle(200);
            this.querySelector('img').classList.toggle('hidden');
        } else {
            $(hiddenElement).toggle(200);
            this.querySelector('img').classList.toggle('hidden');
        }
    }

    checkWindowWidth();
    document.querySelectorAll('.content-block-avatar__img').forEach(function(item) {
        item.addEventListener('click', clickAvatar);
    });
    document.querySelectorAll('.activity-filter__submain li').forEach(function(item) {
        item.addEventListener('click', clickFilterSubitem);
    });
    document.querySelectorAll('.activity-filter__main').forEach(function(item) {
        item.addEventListener('click', clickFilterItem);
    });
    window.addEventListener('resize', checkWindowWidth);
});