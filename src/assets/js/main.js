document.onreadystatechange = function() {
    if (document.readyState === "interactive") {

        if (window.innerWidth <= 1080 && document.querySelector('.master .container-menu') !== null) {
            document.querySelector('.master .container-menu').insertAdjacentElement('beforeend', document.querySelector('.top-contact'));
            document.querySelector('.information-material').insertAdjacentElement('beforebegin', document.querySelector('.information-company-info-information__btn'));
        }
        if (window.innerWidth <= 1800 && document.querySelector('.information-inner') !== null) {
            document.querySelector('.information-inner').insertAdjacentElement('afterend', document.querySelector('.information-company__video'));
            document.querySelector('.information-material').insertAdjacentElement('afterend', document.querySelector('.information-material-gallery'));
            document.querySelector('.information-material').insertAdjacentElement('afterend', document.querySelector('.information-inner-gallery'));
        }

    }
}
window.addEventListener('load', function() {

    let mySwiper;
    let swiperRegions;
    let bufferUrlVideo;
    let simpleBar;

    if (document.querySelector('.region .swiper-container') !== null) {
        let buffWidth = 0;
        document.querySelectorAll('.regions-slider .swiper-slide').forEach(function(item) {
            buffWidth += item.offsetWidth;
            buffWidth += 20;
        });
        if (buffWidth > document.querySelector('.container').offsetWidth) {
            swiperRegions = createSlider('.regions .swiper-container', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.regions .slider-button-next', prevEl: '.regions .slider-button-prev' }, { 1400: { slidesPerView: 12 } });

        } else {
            document.querySelectorAll('.regions-slider .swiper-slide').forEach(function(item) {
                item.classList.toggle('hidden');
            });
            document.querySelector('.regions-slider').classList.toggle('hidden');
            document.querySelector('.regions .slider-button-prev').classList.toggle('hidden');
            document.querySelector('.regions .slider-button-next').classList.toggle('hidden');
        }

    }

    function checkWindowWidth() {
        if (window.innerWidth <= 500) {
            if (document.querySelector('.landing .regions-inner') !== null) {
                let buffWidth = 0;
                document.querySelectorAll('.regions-slider .swiper-slide').forEach(function(item) {
                    buffWidth += item.offsetWidth;
                    buffWidth += 20;
                });
                if (buffWidth > document.querySelector('.container').offsetWidth) {
                    swiperRegions = createSlider('.regions-inner', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.regions-slider-button-next', prevEl: '.regions-slider-button-prev' }, {}, 'regions-block', 'regions-block__box', 15);

                } else {
                    document.querySelectorAll('.regions-slider .swiper-slide').forEach(function(item) {
                        item.classList.toggle('hidden');
                    });
                    document.querySelector('.regions-slider').classList.toggle('hidden');
                    document.querySelector('.regions .slider-button-prev').classList.toggle('hidden');
                    document.querySelector('.regions .slider-button-next').classList.toggle('hidden');
                }

            }
            if (document.querySelector('.activity .top-content-btn') !== null) document.querySelector('.activity .info .container-menu').insertAdjacentElement('beforeend', document.querySelector('.activity .top-content-btn'));
            if (document.querySelector('.information-inner-gallery-block__close') !== null) {
                document.querySelector('.information-inner-gallery-block__close').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><defs><clipPath id="g9zra"><path fill="#fff" d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14z"/></clipPath></defs><g><g><g><path fill="none" stroke="#fff" stroke-miterlimit="20" stroke-width="2" d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14z" clip-path="url(&quot;#g9zra&quot;)"/></g><g><g><path fill="#fff" d="M18.616 19.418L9 9.8l.8-.8 9.617 9.616z"/></g><g><path fill="#fff" d="M9 18.617L18.617 9l.802.802-9.617 9.617z"/></g></g></g></g></svg>';
                document.querySelector('.information-material-gallery-block__close').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><defs><clipPath id="g9zra"><path fill="#fff" d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14z"/></clipPath></defs><g><g><g><path fill="none" stroke="#fff" stroke-miterlimit="20" stroke-width="2" d="M0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14z" clip-path="url(&quot;#g9zra&quot;)"/></g><g><g><path fill="#fff" d="M18.616 19.418L9 9.8l.8-.8 9.617 9.616z"/></g><g><path fill="#fff" d="M9 18.617L18.617 9l.802.802-9.617 9.617z"/></g></g></g></g></svg>';
            }
        }
        if (window.innerWidth > 500) {
            if (document.querySelector('.landing .swiper-container') !== null) mySwiper = createSlider('.swiper-container', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.slider-button-next', prevEl: '.slider-button-prev' }, { 500: { spaceBetween: 50 } });
            if (document.querySelector('.region .swiper-container') !== null) {
                let buffWidth = 0;
                document.querySelectorAll('.partners .swiper-slide').forEach(function(item) {
                    buffWidth += item.offsetWidth;
                    buffWidth += 20;
                });
                if (buffWidth > document.querySelector('.container').offsetWidth) {
                    mySwiper = createSlider('.partners .swiper-container', 400, 'auto', 25, true, { delay: 2000 }, { nextEl: '.partners .slider-button-next', prevEl: '.partners .slider-button-prev' }, { 500: { spaceBetween: 50 } });

                } else {
                    document.querySelectorAll('.partners .swiper-slide').forEach(function(item) {
                        item.classList.toggle('hidden');
                    });
                    document.querySelector('.partners .swiper-slide').classList.toggle('hidden');
                    document.querySelector('.partners .slider-button-prev').classList.toggle('hidden');
                    document.querySelector('.partners .slider-button-next').classList.toggle('hidden');
                }

            }
        }
    }

    function clickMaterial() {
        this.classList.toggle('open');
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
        let buffText,
            bufferId;
        buffText = this.closest('.activity-filter__item').querySelector('.activity-filter__main').textContent;
        this.closest('.activity-filter__item').querySelector('input').value = this.id;
        bufferId = this.closest('.activity-filter__item').querySelector('.activity-filter__main').id;
        this.closest('.activity-filter__item').querySelector('.activity-filter__main').id = this.id;
        if (bufferId === '') this.id = 'def';
        else this.id = bufferId;
        this.closest('.activity-filter__item').querySelector('.activity-filter__main').textContent = this.textContent;
        this.textContent = buffText;
        this.closest('.activity-filter__item').classList.add('purpure');

        clickFilterItem();
        ajaxRequest('activity-filter', 'test.php');
    }

    function clickAvatar() {
        let hiddenElement = this.closest('.content-block__box').querySelector(`#${this.id}`);
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
                if (document.querySelector('.header') !== null) document.querySelector('.header').classList.add('fix');
            } else {
                if (document.querySelector('.header') !== null) document.querySelector('.header').classList.remove('fix');
            }
        }
    }

    function clickListExhiition() {
        $('.top-navigation-list__main').not($(this)).removeClass('active');
        $('.top-navigation-list__submain').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
    }

    function clickVideoMain() {
        if (document.querySelector('.information-material-gallery-block__box.choise') !== null) clickBackVideoGallery();
        if (document.querySelector('.information-material-gallery.open')) clickCloseVideoGallery.call(document.querySelector('.information-material-gallery-block__close'));
        $('.information-inner-gallery').fadeToggle();
        document.querySelector('.information-inner-help').classList.toggle('short');
        $(this).fadeToggle();
        setTimeout(function() {
            $('.information-company__iframe').fadeToggle();
            bufferUrlVideo = document.querySelector('.information-company__video iframe').src;
            document.querySelector('.information-company__video iframe').src += '?autoplay=1';
        }, 650);

    }

    function clickCloseVideo() {
        $('.information-company__iframe').fadeToggle();
        document.querySelector('.information-company__video iframe').src = bufferUrlVideo;
        setTimeout(function() {
            $('.information-inner-gallery').fadeToggle();
            document.querySelector('.information-inner-help').classList.toggle('short');
            $('.information-company__video img').fadeToggle();
        }, 650);
    }

    function clickVideoGallery() {
        if (document.querySelector('.information-inner-help.short') !== null) clickCloseVideo();
        if (window.innerWidth > 1800) {
            document.querySelector('.information-material-download').classList.toggle('hidden');
            document.querySelector('.information-inner').classList.toggle('hidden');
        }

        this.classList.toggle('open');

        this.querySelector('.information-material-gallery-block__close').classList.toggle('hidden');
        this.removeEventListener('click', clickVideoGallery);
        $('.information-material-gallery-block__text').toggle();
        document.querySelectorAll('.information-material-gallery-block__box').forEach(function(item) {
            item.addEventListener('click', clickVideoGalleryBox);
        });
    }


    function clickGallery() {
        // document.querySelector('.information-inner-gallery-block').setAttribute('data-simplebar', '');
        // simpleBar = new SimpleBar(document.querySelector('.information-inner-gallery-block'));
        if (window.innerWidth > 1800) {
            document.querySelector('.information-inner-help').classList.toggle('hidden');
            document.querySelector('.information-material').classList.toggle('hidden');
        }
        this.classList.toggle('open');
        this.querySelector('.information-inner-gallery-block__close').classList.toggle('hidden');
        this.removeEventListener('click', clickGallery);
        // setTimeout(function() {
        //     $('.information-inner-gallery-block__text').toggle(400);
        // }, 500);
        $('.information-inner-gallery-block__text').toggle();
        document.querySelectorAll('.information-inner-gallery-block__box').forEach(function(item) {
            item.addEventListener('click', clickGalleryBox);
        });
    }

    function clickCloseVideoGallery() {

        if (window.innerWidth > 1800) {
            document.querySelector('.information-inner').classList.toggle('hidden');
        }
        $('.information-material-gallery-block__text').toggle(400);
        this.closest('.information-material-gallery').classList.toggle('open');
        this.classList.toggle('hidden');

        setTimeout(function() {
            if (window.innerWidth > 1800) {
                document.querySelector('.information-material-download').classList.toggle('hidden');
            }

            setTimeout(function() {
                document.querySelector('.information-material-gallery-block__close').closest('.information-material-gallery').addEventListener('click', clickVideoGallery);
            }, 200);
            document.querySelectorAll('.information-material-gallery-block').forEach(function(item) {
                item.classList.toggle('hidden');
            });
        }, 200);
        document.querySelectorAll('.information-material-gallery-block__box').forEach(function(item) {
            item.removeEventListener('click', clickVideoGalleryBox);
        });
    }

    function clickCloseGallery() {
        $('.information-inner-gallery-block__text').toggle(400);
        this.closest('.information-inner-gallery').classList.toggle('open');
        this.classList.toggle('hidden');
        // this.closest('.information-inner-gallery').addEventListener('click', clickGallery);
        setTimeout(function() {
            if (window.innerWidth > 1800) {
                document.querySelector('.information-inner-help').classList.toggle('hidden');
            }

            setTimeout(function() {
                if (window.innerWidth > 1800) {
                    document.querySelector('.information-material').classList.toggle('hidden');
                }

                document.querySelector('.information-inner-gallery-block__close').closest('.information-inner-gallery').addEventListener('click', clickGallery);
            }, 200);
            document.querySelectorAll('.information-inner-gallery-block').forEach(function(item) {
                item.classList.toggle('hidden');
            });
        }, 200);
        document.querySelectorAll('.information-inner-gallery-block__box').forEach(function(item) {
            item.removeEventListener('click', clickGalleryBox);
        });
    }

    function clickVideoGalleryBox() {
        this.classList.toggle('choise');
        $('.information-material-gallery-block__box').not(this).toggle();
        $('.information-material-gallery-block__text').toggle();
        this.removeEventListener('click', clickVideoGalleryBox);
        setTimeout(function() {
            $('.information-material-gallery-block-info').fadeToggle(600);
        }, 200);
        document.querySelector('.information-material-gallery-block__close').removeEventListener('click', clickCloseVideoGallery);
        document.querySelector('.information-material-gallery-block__close').addEventListener('click', clickBackVideoGallery);
    }

    function clickGalleryBox() {
        this.classList.toggle('choise');
        $('.information-inner-gallery-block__box').not(this).toggle();
        $('.information-inner-gallery-block__text').toggle();
        this.removeEventListener('click', clickGalleryBox);
        setTimeout(function() {
            $('.information-inner-gallery-block-info').fadeToggle(600);
        }, 200);
        document.querySelector('.information-inner-gallery-block__close').removeEventListener('click', clickCloseGallery);
        document.querySelector('.information-inner-gallery-block__close').addEventListener('click', clickBackGallery);
    }

    function clickAnchor() {
        if (String(this).slice(-1) !== '#') {
            event.preventDefault();
            let sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            $('html, body').animate({ scrollTop: dn - 50 }, 1000);
        }
    }

    function clickBackVideoGallery() {
        document.querySelector('.information-material-gallery-block__box.choise').classList.toggle('choise');
        $('.information-material-gallery-block-info').fadeToggle(0);
        $('.information-material-gallery-block__box').fadeIn(400);
        setTimeout(function() {
            $('.information-material-gallery-block__text').toggle();
        }, 200);
        document.querySelector('.information-material-gallery-block__close').removeEventListener('click', clickBackVideoGallery);
        document.querySelector('.information-material-gallery-block__close').addEventListener('click', clickCloseVideoGallery);
        document.querySelectorAll('.information-material-gallery-block__box').forEach(function(item) {
            item.addEventListener('click', clickVideoGalleryBox);
        });
        document.querySelectorAll('.information-material-gallery-block__box').forEach(function(item) {
            item.querySelector('iframe').src = item.querySelector('iframe').src;
        });
    }

    function clickBackGallery() {
        document.querySelector('.information-inner-gallery-block__box.choise').classList.toggle('choise');
        $('.information-inner-gallery-block-info').fadeToggle(0);
        setTimeout(function() {
            $('.information-inner-gallery-block__box').fadeIn(400);
            $('.information-inner-gallery-block__text').toggle();
        }, 300);
        document.querySelector('.information-inner-gallery-block__close').removeEventListener('click', clickBackGallery);
        document.querySelector('.information-inner-gallery-block__close').addEventListener('click', clickCloseGallery);
        document.querySelectorAll('.information-inner-gallery-block__box').forEach(function(item) {
            item.addEventListener('click', clickGalleryBox);
        })
    }

    function clickBody() {
        if (document.querySelector('.information-company__iframe') !== null)
            if (event.target.closest('.information-company__video') === null && document.querySelector('.information-company__iframe').style.display === 'block') {
                clickCloseVideo();
            }
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

    if (document.querySelector('.information-inner-gallery-block__close') !== null) document.querySelector('.information-material-gallery-block__close').addEventListener('click', clickCloseVideoGallery);
    if (document.querySelector('.information-material-gallery') !== null) document.querySelector('.information-material-gallery').addEventListener('click', clickVideoGallery)

    if (document.querySelector('.information-inner-gallery-block__close') !== null) document.querySelector('.information-inner-gallery-block__close').addEventListener('click', clickCloseGallery);
    if (document.querySelector('.information-inner-gallery') !== null) document.querySelector('.information-inner-gallery').addEventListener('click', clickGallery);
    if (document.querySelector('.information-company__close') !== null) document.querySelector('.information-company__close').addEventListener('click', clickCloseVideo);

    document.querySelector('body').addEventListener('click', clickBody);
    if (document.querySelector('.information-material-download') !== null) document.querySelector('.information-material-download').addEventListener('click', clickMaterial);
    if (document.querySelector('.information-company-info-information__btn') !== null) document.querySelector('.information-company-info-information__btn').addEventListener('click', clickAnchor);
    if (document.querySelector('.information-company__video') !== null) document.querySelector('.information-company__video img').addEventListener('click', clickVideoMain);
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

    // new.js **********************


    let $menuBurger = document.querySelector('.menu__burger'), 
        $buisnessFormDayLabel = document.querySelectorAll('.buisness__form-day-label'),
        $buisnessFormSearchIcon = document.querySelector('.buisness__form-search-icon'), 
        $buisnessForm = document.querySelector('.buisness__form'), 
        $buisnessFormSwitchText = document.querySelectorAll('.buisness__form-switch-text'), 
        $buisnessFormSwitchListLabel = document.querySelectorAll('.buisness__form-switch-list-label'), 
        $buisnessMore = document.querySelector('.buisness__more'), 
        $buisnessFormDayMobailDef = document.querySelector('.buisness__form-day-mobail-def'),
        $buisnessFormDayMobailLabel = document.querySelectorAll('.buisness__form-day-mobail-label'), 
        $buisnessFormCardModerAvatar = document.querySelectorAll('.buisness__form-card-moder-avatar'),
        $buisnessFormCardSpeakerAvatar = document.querySelectorAll('.buisness__form-card-speaker-avatar');

    let swiperNewPage,
        swiperNewPageParty;

    let textMore;

    if(screen.width < 501 && document.querySelector('.party') !== null){
        document.querySelector('.party__block').classList.add('swiper-container');
        document.querySelector('.party__inner').classList.add('swiper-wrapper');
        document.querySelectorAll('.party__box').forEach(function(item, index){
            if(index === 0 || index % 6 === 0) {
                document.querySelector('.party__inner').insertAdjacentHTML('beforeend', `
                    <div class="party__slide"></div>
                `);
            }
            document.querySelectorAll('.party__slide')[document.querySelectorAll('.party__slide').length - 1].insertAdjacentElement('beforeend', item);
            document.querySelectorAll('.party__slide')[document.querySelectorAll('.party__slide').length - 1].classList.add('swiper-slide');
        });
        swiperNewPageParty = new Swiper('.party .swiper-container', {
            spaceBetween: 16,
            // slidesPerColumn: 3,
            slidesPerView: 1,
            autoHeight: true,
            navigation: {
                nextEl: '.party__button-next',
                prevEl: '.party__button-prev',
            }
        });

    }
    if(document.querySelector('.new-partners') !== null) {
        swiperNewPage = new Swiper('.new-partners .swiper-container', {
            spaceBetween: 20,
            slidesPerColumn: 5,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                501: {
                    slidesPerColumn: 1,
                    slidesPerView: 'auto',
                    spaceBetween: 45,
                }
            }
        })
    } 

    function ajaxRequestNew(ajaxForm, url) {
        event.preventDefault();
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
    function clickBurgerMenu(){
        this.closest('.menu').classList.toggle(`${this.closest('.menu').classList[0]}--open`);
    }
    function clickFilterSwitchTag(modifier){
        if(this.parentNode.querySelector(`.${modifier}`) !== null ) this.parentNode.querySelector(`.${modifier}`).classList.remove(modifier);
        this.classList.add(modifier);
    }
    function clickFilterSwitchElement(){
        this.closest('.buisness__form-switch').classList.toggle('buisness__form-switch--active');
        console.log($(this).parent('.buisness__form-switch').children('.buisness__form-switch-list'));
        $(this).parent('.buisness__form-switch').children('.buisness__form-switch-list').slideToggle(400);
    }
    function clickFilterTag(){
        this.closest('.buisness__form-switch').querySelector('.buisness__form-switch-text').innerHTML = this.textContent;
        clickFilterSwitchElement.bind(this.closest('.buisness__form-switch').querySelector('.buisness__form-switch-text'))();       
    }
    function clickFilterMore(){
        $('.buisness__form-cards-hidden').slideToggle(400);
        if(this.innerHTML !== 'Скрыть'){
            textMore = this.innerHTML;
            this.innerHTML = 'Скрыть';
        }
        else this.innerHTML = textMore;
    }
    function clickFilterDay(){
        this.classList.toggle('buisness__form-day-mobail-def--open');
        $('.buisness__form-day-mobail-list').slideToggle(400);
    }
    function clickBuisnessFormDayMobail(){
        $buisnessFormDayMobailDef.innerHTML = this.textContent;
        clickFilterDay.bind($buisnessFormDayMobailDef)();
    }
    function focusModalAvatar(){
        let _this = this;
        // if(this.closest('.buisness__form-card').querySelector('.buisness__form-card-modal--active') === null){
        _this.closest('.buisness__form-card').querySelector('.buisness__form-card-modal-avatar-img').setAttribute('src', _this.querySelector('.buisness__form-card-img').src);
        _this.closest('.buisness__form-card').querySelector('.buisness__form-card-modal-name').innerHTML = _this.dataset.avatarName;
        _this.closest('.buisness__form-card').querySelector('.buisness__form-card-modal-text').innerHTML = _this.dataset.avatarInfo;
        _this.closest('.buisness__form-card').querySelector('.buisness__form-card-modal').classList.toggle('buisness__form-card-modal--active');
        _this.querySelector('.buisness__form-card-img').classList.toggle('buisness__form-card-img--hidden');
        // }else{
        //     setTimeout(function(){
        //         _this.closest('.buisness__form-card').querySelector('.buisness__form-card-modal-avatar-img').setAttribute('src', _this.querySelector('.buisness__form-card-img').src);
        //         _this.closest('.buisness__form-card').querySelector('.buisness__form-card-modal-name').innerHTML = _this.dataset.avatarName;
        //         _this.closest('.buisness__form-card').querySelector('.buisness__form-card-modal-text').innerHTML = _this.dataset.avatarInfo;
        //         _this.closest('.buisness__form-card').querySelector('.buisness__form-card-modal').classList.toggle('buisness__form-card-modal--active');
        //     }, 300);
        // }
    }
    function blurModalAvatar(){
        this.closest('.buisness__form-card').querySelector('.buisness__form-card-modal--active').classList.remove('buisness__form-card-modal--active');
        this.querySelector('.buisness__form-card-img').classList.toggle('buisness__form-card-img--hidden');
    }

    if($menuBurger !== null) $menuBurger.addEventListener('click', clickBurgerMenu, false);
    if($buisnessFormDayLabel.length !== 0) $buisnessFormDayLabel.forEach(function(item){
        item.addEventListener('click', clickFilterSwitchTag.bind(item, 'buisness__form-day-label--active'), false);
    });
    if($buisnessFormSearchIcon !== null ) $buisnessFormSearchIcon.addEventListener('click',ajaxRequestNew.bind(null, 'business-filter', 'test.php'), false); // При нажатии на лупу
    if($buisnessForm !== null) $buisnessForm.addEventListener('change',ajaxRequestNew.bind(null, 'business-filter', 'test.php'), false); // Любые изменения form
    if($buisnessFormSwitchText.length !== 0) $buisnessFormSwitchText.forEach(function(item){
        item.addEventListener('click', clickFilterSwitchElement, false);
    });
    if($buisnessFormSwitchListLabel.length !== 0) $buisnessFormSwitchListLabel.forEach(function(item){
        item.addEventListener('click', clickFilterSwitchTag.bind(item, 'buisness__form-switch-list-label--active'), false);
        item.addEventListener('click', clickFilterTag, false);
    });
    if($buisnessMore !== null) $buisnessMore.addEventListener('click', clickFilterMore, false);
    if($buisnessFormDayMobailDef !== null) $buisnessFormDayMobailDef.addEventListener('click', clickFilterDay, false);
    if($buisnessFormDayMobailLabel.length !== 0) $buisnessFormDayMobailLabel.forEach(function(item){
        item.addEventListener('click', clickBuisnessFormDayMobail, false);
    });
    if($buisnessFormCardModerAvatar.length !== 0) $buisnessFormCardModerAvatar.forEach(function(item){
        item.addEventListener('focus', focusModalAvatar, false);
        item.addEventListener('blur', blurModalAvatar, false);
    });
    if($buisnessFormCardSpeakerAvatar.length !== 0) $buisnessFormCardSpeakerAvatar.forEach(function(item){
        item.addEventListener('focus', focusModalAvatar, false);
        item.addEventListener('blur', blurModalAvatar, false);
    });
    $('a[href^="#"]').on('click', function(event) {
        if (String(this).slice(-1) !== '#') {
            event.preventDefault();
            document.querySelector('.menu').classList.toggle('menu--open');
            let sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            $('html, body').animate({ scrollTop: dn - 155}, 1000);
        }
    });
    // /new.js **************************
});