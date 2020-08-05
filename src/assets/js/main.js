window.addEventListener('load', function() {

    let mySwiper;
    let swiperRegions;

    if (document.querySelector('.region .swiper-container') !== null) swiperRegions = createSlider('.regions .swiper-container', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.regions .slider-button-next', prevEl: '.regions .slider-button-prev' }, { 1400: { slidesPerView: 12 } });

    function checkWindowWidth() {
        if (window.innerWidth <= 500) {
            if (document.querySelector('.landing .regions-inner') !== null) swiperRegions = createSlider('.regions-inner', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.regions-slider-button-next', prevEl: '.regions-slider-button-prev' }, {}, 'regions-block', 'regions-block__box', 15);
            if (document.querySelector('.activity .top-content-btn') !== null) document.querySelector('.activity .info .container-menu').insertAdjacentElement('beforeend', document.querySelector('.activity .top-content-btn'));

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
        $('.activity-filter__submain').not($(this).siblings('.activity-filter__submain')).slideUp(300);
        $(this).toggleClass('active').siblings('.activity-filter__submain').slideToggle(300);
        if (this !== undefined) this.closest('.activity-filter__item').classList.toggle('open');
    }

    function clickFilterSubitem() {
        let buffText;
        buffText = this.closest('.activity-filter__item').querySelector('.activity-filter__main').textContent;
        this.closest('.activity-filter__item').querySelector('input').value = this.id;
        this.closest('.activity-filter__item').querySelector('.activity-filter__main').textContent = this.textContent;
        this.textContent = buffText;
        this.closest('.activity-filter__item').classList.add('purpure');
        clickFilterItem();
        ajaxRequest('activity-filter', 'test.php');
    }

    function clickAvatar() {
        let hiddenElement = this.closest('.content-block__box').querySelector('.content-block-hidden');
        if (this.querySelector('img.hidden') === null) {
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

    function ajaxRequest(ajaxForm, url) {
        $.ajax({
            url: url,
            type: "POST",
            dataType: "html",
            data: $("#" + ajaxForm).serialize(), // Сеарилизуем объект
            success: function(response) { //Данные отправлены успешно
                let result = $.parseJSON(response);
                console.log(result);
            },
            error: function(response) { // Данные не отправлены
                alert('Ошибка. Данные не отправлены.');
            }
        });
    }

    function pushEnterSearchForm() {
        if (event.keyCode === 13) ajaxRequest('activity-filter', 'test.php');
    }

    function clickBurger() {
        document.querySelector('.header').classList.toggle('open');
        document.querySelector('.burger').classList.toggle('open');
        document.querySelector('body').classList.toggle('block');
    }

    function checkScroll() {
        if (window.innerWidth > 768 && document.querySelector('.exhebition') === null) {
            let target = document.querySelector('.footer');
            let targetPosition = {
                    top: window.pageYOffset + target.getBoundingClientRect().top,
                    left: window.pageXOffset + target.getBoundingClientRect().left,
                    right: window.pageXOffset + target.getBoundingClientRect().right,
                    bottom: window.pageYOffset + target.getBoundingClientRect().bottom
                },
                windowPosition = {
                    top: window.pageYOffset,
                    left: window.pageXOffset,
                    right: window.pageXOffset + document.documentElement.clientWidth,
                    bottom: window.pageYOffset + document.documentElement.clientHeight
                };
            if (targetPosition.bottom > windowPosition.top &&
                targetPosition.top < windowPosition.bottom &&
                targetPosition.right > windowPosition.left &&
                targetPosition.left < windowPosition.right) {
                document.querySelector('.header').classList.add('fix');
            } else {
                document.querySelector('.header').classList.remove('fix');
            }
        }
    }

    function clickListExhiition() {
        $('.top-navigation-list__main').not($(this)).removeClass('active');
        $('.top-navigation-list__submain').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
    }
    // svg hover
    function popUpCompanyLogo() {
        document.querySelector('.company-box').classList.toggle('visibility');
    }
    // /svg hover
    // popup
    function callModalWindow() {
        document.querySelector('.modal-overlay').classList.toggle('active');
        document.querySelector('.modal').classList.toggle('active');
        document.querySelector('body').classList.toggle('block');
    }
    // /popup


    checkWindowWidth();
    // Popup вызов
    if (document.querySelector('.popup') !== null) callModalWindow();
    // /Popup вызов

    if (document.querySelector('.company-box__close') !== null) document.querySelector('.company-box__close').addEventListener('click', popUpCompanyLogo);
    if (document.querySelector('.top-navigation-list__main') !== null) document.querySelector('.top-navigation-list__main').addEventListener('click', clickListExhiition);
    if (document.querySelector('.modal-content-log__btn') !== null) document.querySelector('.modal-content-log__btn').addEventListener('click', ajaxRequest('modal-log', 'test.php'))
    if (document.querySelector('.burger') !== null) document.querySelector('.burger').addEventListener('click', clickBurger);
    if (document.querySelector('.activity-filter__input') !== null) document.querySelector('.activity-filter__input').addEventListener('keydown', pushEnterSearchForm);
    document.querySelectorAll('.content-block-avatar__img').forEach(function(item) {
        item.addEventListener('click', clickAvatar);
    });
    document.querySelectorAll('.activity-filter__submain li').forEach(function(item) {
        item.addEventListener('click', clickFilterSubitem);
    });
    document.querySelectorAll('.activity-filter__element').forEach(function(item) {
        item.addEventListener('click', clickFilterSubitem);
    });
    document.querySelectorAll('.activity-filter__main').forEach(function(item) {
        item.addEventListener('click', clickFilterItem);
    });
    window.addEventListener('resize', checkWindowWidth);
    window.addEventListener('scroll', checkScroll);


});