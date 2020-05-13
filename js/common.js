$(document).ready(function () {    let resizeId; // for resize timer    let wWidth = $(window).width(); // for resize    let controller = new ScrollMagic.Controller();    /*SVG Fallback*/    if (!Modernizr.svg) {        $("img[src*='svg']").attr("src", function () {            return $(this).attr("src").replace(".svg", ".png");        });    }    /* hide/show scrollbar when disabling page scroll*/    function disableScrolling() {        if ($(document).height() > $(window).height()) {            var scrollTop = $('html').scrollTop() ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...            $('html')                .addClass('disable-scrolling')                .css('top', -scrollTop);        }    }    function enableScrolling() {        var scrollTop = parseInt($('html').css('top'));        $('html').removeClass('disable-scrolling');        $('html,body').scrollTop(-scrollTop);    }    function isMobile() {        if ($('.is-mobile').css('display') === 'block') {            return true;        } else {            return false;        }    }    /* Init object fit polyfill */    /* To make it work, add 'font-family: 'object-fit: cover;';' to image */    if (window.objectFitImages) {        window.objectFitImages();    }    // Animating elements on entering the viewport    if (window.ScrollReveal) {        let sr = window.ScrollReveal();        let slideUp = {            distance: '30px',            origin: 'bottom',            opacity: 0,            duration: 1500,        };        let slideUpInterval = {            distance: '40px',            origin: 'bottom',            opacity: 0,            duration: 1500,            interval: 300,        };        let fadeIn = {            opacity: 0,            duration: 1500,            debug: true,        };        let fadeInInterval = {            opacity: 0,            duration: 1500,            interval: 300,        };        let fadeInIntervalDelay = {            opacity: 0,            duration: 1500,            interval: 300,            delay: 200        };        let fadeInIntervalDelayLong = {            opacity: 0,            duration: 1500,            interval: 300,            delay: 600        };        sr.reveal('.slideUp', slideUp);        sr.reveal('.slideUpInterval', slideUpInterval);        sr.reveal('.fadeIn', fadeIn);        sr.reveal('.fadeInInterval', fadeInInterval);        sr.reveal('.fadeInIntervalDelay', fadeInIntervalDelay);        sr.reveal('.fadeInIntervalDelayLong', fadeInIntervalDelayLong);        sr.reveal('.about-animated', slideUpInterval);        sr.reveal('.fairs__row', fadeInInterval);        sr.reveal('.exhibitions-list__item', slideUpInterval);        sr.reveal('.artists-list__item', fadeIn);        sr.reveal('.biography-item-animated', slideUpInterval);        sr.reveal('.contact-details__item', fadeInInterval);        sr.reveal('.news-list__item', fadeInInterval);        sr.reveal('.search__results', fadeInInterval);        sr.reveal('.search-results__item', fadeInInterval);    }    //End Animating elements on entering the viewport    $('.main-carousel-home').on('init', function (event, slick) {        $(".main-carousel-home").find('.item').addClass("transition-slide");    });    $('.main-carousel-home').slick({        infinite: true,        slidesToShow: 1,        fade: true,        cssEase: 'ease-in-out',        useTransform: true,        autoplay: true,        autoplaySpeed: 3500,        speed: 700,        prevArrow: '<div class="nav-button prev-button"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>arrow left</title><path d="M177.1,260.9A7.07,7.07,0,0,1,175,256a6.51,6.51,0,0,1,2.1-4.9l146-146a7.24,7.24,0,0,0,0-10.2,7.24,7.24,0,0,0-10.2,0l-156,156a7.24,7.24,0,0,0,0,10.2l156,156a7.21,7.21,0,0,0,10.2-10.2Z"/><path d="M256,5C117.6,5,5,117.6,5,256S117.6,507,256,507,507,394.4,507,256,394.4,5,256,5Zm0,490.7C123.8,495.7,16.3,388.2,16.3,256S123.8,16.3,256,16.3,495.7,123.8,495.7,256,388.2,495.7,256,495.7Z"/></svg></div>',        nextArrow: '<div class="nav-button next-button"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>arrow-right</title><path d="M334.9,251.1A7.07,7.07,0,0,1,337,256a6.51,6.51,0,0,1-2.1,4.9l-146,146a7.24,7.24,0,0,0,0,10.2,7.24,7.24,0,0,0,10.2,0l156-156a7.24,7.24,0,0,0,0-10.2l-156-156a7.21,7.21,0,0,0-10.2,10.2Z"/><path d="M256,507c138.4,0,251-112.6,251-251S394.4,5,256,5,5,117.6,5,256,117.6,507,256,507Zm0-490.7c132.2,0,239.7,107.5,239.7,239.7S388.2,495.7,256,495.7,16.3,388.2,16.3,256,123.8,16.3,256,16.3Z"/></svg></div>',        arrows: true,        responsive: [            {                breakpoint: 480,                settings: {                    arrows: false,                }            }        ]    });    $('.main-carousel-home').on('beforeChange', function (event, slick, currentSlide, nextSlide) {        $(".main-carousel-home").find('.item').removeClass("transition-slide");        $(".main-carousel-home").find('.item').eq(nextSlide).addClass("transition-slide");    });    $('.what-is-on-gallery').slick({        infinite: true,        speed: 700,        prevArrow: '<div class="nav-button prev-button"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>arrow left</title><path d="M177.1,260.9A7.07,7.07,0,0,1,175,256a6.51,6.51,0,0,1,2.1-4.9l146-146a7.24,7.24,0,0,0,0-10.2,7.24,7.24,0,0,0-10.2,0l-156,156a7.24,7.24,0,0,0,0,10.2l156,156a7.21,7.21,0,0,0,10.2-10.2Z"/><path d="M256,5C117.6,5,5,117.6,5,256S117.6,507,256,507,507,394.4,507,256,394.4,5,256,5Zm0,490.7C123.8,495.7,16.3,388.2,16.3,256S123.8,16.3,256,16.3,495.7,123.8,495.7,256,388.2,495.7,256,495.7Z"/></svg></div>',        nextArrow: '<div class="nav-button next-button"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>arrow-right</title><path d="M334.9,251.1A7.07,7.07,0,0,1,337,256a6.51,6.51,0,0,1-2.1,4.9l-146,146a7.24,7.24,0,0,0,0,10.2,7.24,7.24,0,0,0,10.2,0l156-156a7.24,7.24,0,0,0,0-10.2l-156-156a7.21,7.21,0,0,0-10.2,10.2Z"/><path d="M256,507c138.4,0,251-112.6,251-251S394.4,5,256,5,5,117.6,5,256,117.6,507,256,507Zm0-490.7c132.2,0,239.7,107.5,239.7,239.7S388.2,495.7,256,495.7,16.3,388.2,16.3,256,123.8,16.3,256,16.3Z"/></svg></div>',        arrows: true,        mobileFirst: true,        responsive: [            {                breakpoint: 992,                settings: {                    centerMode: true,                    slidesToShow: 1,                    slidesToScroll: 1,                    centerPadding: '23%',                    cssEase: 'ease-in',                }            }        ]    });    $('.selected-works__carousel').slick({        speed: 700,        dots: false,        arrows: true,        prevArrow: $('.selected-works__carousel').next().find('.slick__slider-btn--prev'),        nextArrow: $('.selected-works__carousel').next().find('.slick__slider-btn--next'),        mobileFirst: true,        slidesToShow: 1,        slidesToScroll: 1,        adaptiveHeight: false,        responsive: [            {                breakpoint: 767,                settings: {                    slidesToShow: 2,                    slidesToScroll: 1,                }            },            {                breakpoint: 1200,                settings: {                    slidesToShow: 3,                    slidesToScroll: 1,                }            },        ]    })        .on('setPosition', function (event, slick) {            slick.$slides.css('height', slick.$slideTrack.height() + 'px');        });    let fairsYearsArgs = {        dots: false,        infinite: false,        arrows: true,        mobileFirst: true,        fade: true,        prevArrow: $('.fairs-years__list').next().find('.slick__slider-btn--prev'),        nextArrow: $('.fairs-years__list').next().find('.slick__slider-btn--next'),        responsive: [            {                breakpoint: 1200,                settings: {                    unslick: true                }            }        ]    };    const fairsYearsCarousel = $('.fairs-years__list--mobile');    fairsYearsCarousel.slick(fairsYearsArgs);    $('.ed-hero__carousel').slick({        speed: 700,        dots: false,        arrows: true,        prevArrow: $('.ed-hero__carousel').next().find('.slick__slider-btn--prev'),        nextArrow: $('.ed-hero__carousel').next().find('.slick__slider-btn--next'),        mobileFirst: true,        slidesToShow: 1,        slidesToScroll: 1,    });    //testimonials carousel slider count    function sliderCount() {        let slider = $('.ed-hero__carousel');        let count = parseInt($('.ed-hero__carousel-item.slick-current.slick-active').attr('data-slick-index')) + 1;        let total = slider.slick("getSlick").slideCount;        $('.ed-hero__item-count .current').html('0' + count);        $('.ed-hero__item-count .total').html('0' + total);    }    sliderCount();    $('.ed-hero__carousel').on('afterChange', sliderCount);    $('.installation__carousel').slick({        speed: 700,        dots: false,        arrows: true,        prevArrow: $('.installation__carousel').next().find('.slick__slider-btn--prev'),        nextArrow: $('.installation__carousel').next().find('.slick__slider-btn--next'),        mobileFirst: true,        slidesToShow: 1,        slidesToScroll: 1,        adaptiveHeight: false,        responsive: [            {                breakpoint: 992,                settings: {                    slidesToShow: 2,                    slidesToScroll: 1,                }            },        ]    });    $('.ad-hero__carousel').slick({        speed: 700,        dots: true,        arrows: true,        prevArrow: $('.artist-detail__hero').find('.slick__slider-btn--prev'),        nextArrow: $('.artist-detail__hero').find('.slick__slider-btn--next'),        mobileFirst: true,        slidesToShow: 1,        slidesToScroll: 1,        dotsClass: 'ad-hero__slick-paging',        customPaging: function (slider, i) {            return '<span class="page-count__current">0' + (i + 1) + '</span>' + '<span class="page-count__separator">/</span>' + '<span class="page-count__total">0' + slider.slideCount + '</span>';        },    });    $('.exhibitions-section__carousel').slick({        speed: 700,        dots: false,        arrows: true,        prevArrow: $('.exhibitions-section__carousel').next().find('.slick__slider-btn--prev'),        nextArrow: $('.exhibitions-section__carousel').next().find('.slick__slider-btn--next'),        mobileFirst: true,        slidesToShow: 1,        slidesToScroll: 1,        adaptiveHeight: false,        centerPadding: 0,        responsive: [            {                breakpoint: 992,                settings: {                    slidesToShow: 2,                    slidesToScroll: 1,                }            },        ]    });    let searchArgs ={        dots: false,        infinite: false,        arrows: true,        mobileFirst: true,        fade: true,        prevArrow: $('.search-nav__list').next().find('.slick__slider-btn--prev'),        nextArrow: $('.search-nav__list').next().find('.slick__slider-btn--next'),        responsive: [            {                breakpoint: 1200,                settings: {                    unslick: true                }            }        ]    };    $('.search-nav__list--mob').slick(searchArgs);    // for lang-select in main menu    $(".lang-select").click(function () {        $('.lang-list').toggle();        $('.caret').toggleClass('rotate');        $(this).toggleClass('changes');        return false;    });    $(document).click(function (e) {        var element = $('.lang-list');        var father = $('.lang-select');        if (e.target != element[0] && !element.has(e.target).length) {            element.hide();            $('.caret').removeClass('rotate');            father.removeClass('changes');        }    });    // End for lang-select in main menu    // for scrollTo    $('.scroll-down').on('click', function (e) {        e.preventDefault();        $(document).scrollTo(($('.what-is-on').offset().top - 78), 1500, {            easing: 'linear',            margin: true        });    });    $('.search-nav__list a').on('click', function (e) {        e.preventDefault();        let target = $(this).attr('href');        let targetPos = $(target).offset().top;        let targetOffset = targetPos - $('.wrapper-top-header').height();        $(document).scrollTo(targetOffset, 1500, {            easing: 'linear',            margin: true        });    });    // for mobile menu    $(".top_mnu ul li a").click(function () {        $(".mobile-menu").fadeOut(600);        // $(".sandwich").toggleClass("active");        $(".mobile-menu").css("opacity", "1");    }).append("<span>");    $(".menu-list li a").click(function () {        console.log('hello');        $(".mobile-menu").fadeOut(600);        // $(".toggle_mnu .sandwich").toggleClass("active");        // $(".toggle_mnu.mobile .sandwich").toggleClass("active");        if ($(".toggle_mnu.mobile").hasClass("open")) {            $(".toggle_mnu.mobile").removeClass("open");        }        $(".toggle_mnu.top").toggleClass("open");        $(".mobile-menu").css("opacity", "1");    }).append("<span>");    $(".toggle_mnu").click(function (e) {        e.preventDefault();        $('.toggle_mnu').toggleClass('open');        // $(".sandwich").toggleClass("active");        if ($(".mobile-menu").is(":visible")) {            $(".mobile-menu").fadeOut(600);            $(".top_mnu li a").removeClass("fadeInUp animated");        } else {            $(".mobile-menu").fadeIn(600);            $(".top_mnu li a").addClass("fadeInUp animated");        }    });    // End for mobile menu    $(".toggle_search").click(function (e) {        e.preventDefault();        if ($(".search-menu").is(":visible")) {            $(".search-menu").fadeOut(600);        } else {            $(".search-menu").fadeIn(600);        }    });    $(".close-search-menu").click(function () {        $(".search-menu").fadeOut(600);    });    // Scroll Main menu    $('#header_nav').data('size', 'big');    $(window).scroll(function () {        if ($(document).scrollTop() > 0) {            if ($('#header_nav').data('size') == 'big') {                $('#header_nav').addClass('resize');                $('section.main-carousel-wrapper').css('padding-top', '78px');                $('#header_nav').data('size', 'small');                $('#header_nav').stop().animate({                    minHeight: '78px'                }, 600);                $('.mobile-menu .topper').stop().animate({                    minHeight: '78px'                }, 600);                $('.mobile-menu .topper').removeClass('resize');            }        }        else {            if ($('#header_nav').data('size') == 'small') {                $('#header_nav').removeClass('resize');                $('section.main-carousel-wrapper').css('padding-top', '110px');                $('#header_nav').data('size', 'big');                $('#header_nav').stop().animate({                    minHeight: '110px'                }, 600);                $('.mobile-menu .topper').stop().animate({                    minHeight: '110px'                }, 600);                $('.mobile-menu .topper').addClass('resize');            }        }    });    // End scroll Main menu    //artists page list view toggle    $('.artists-section__controls li a').on('click', function (e) {        e.preventDefault();        $('.artists-section__controls li').toggleClass('is-active');        $('.artists-list').toggleClass('artists-list--list-view');        if (window.ScrollReveal) {            ScrollReveal().sync();        }    });    // /* masonry grid:  https://masonry.desandro.com */    //for news page masonry    // let $grid = $('.masonry-grid');    // $grid.masonry({    //     itemSelector: '.masonry-grid__item',    //     columnWidth: '.masonry-grid__sizer',    //     percentPosition: true,    //     isAnimated: false,    //     transitionDuration: 0,    //     horizontalOrder: true    // });    //    //    // // layout Masonry after each image loads    // $grid.imagesLoaded().progress( function() {    //     $grid.masonry('layout');    //     // ScrollReveal().sync();    // });    //    // $grid.on( 'layoutComplete', function( event, items ) {    //     if(window.ScrollReveal()){    //         ScrollReveal().sync();    //     }    // });    // Animations    //art fairs pin    let fairsScene = new ScrollMagic.Scene({        triggerElement: ".fairs-years",        triggerHook: 0.1,        offset: 0,        // duration: $('.fairs__inner').outerHeight(true) - 130    })        .on('enter', function (e) {            fairsYearsCarousel.slick('refresh');            $('.fairs-years').addClass('is-scrolling');        })        .on('leave', function (e) {            fairsYearsCarousel.slick('refresh');            $('.fairs-years').removeClass('is-scrolling');        })        .setPin(".fairs-years", {pushFollowers: false})        // .addIndicators()        .addTo(controller);    //exhibition pin    let exhibitionScene = new ScrollMagic.Scene({        triggerElement: ".exhibitions-nav",        triggerHook: 0.1,        offset: 0,        // duration: $('.exhibitions__inner').outerHeight(true)    })        .on('enter', function (e) {            $('.exhibitions-nav').addClass('is-scrolling');        })        .on('leave', function (e) {            $('.exhibitions-nav').removeClass('is-scrolling');        })        // .setClassToggle(".exhibitions-nav", 'is-scrolling')        .setPin(".exhibitions-nav", {pushFollowers: false})        // .addIndicators()        .addTo(controller);    //search pin    let searchScene = new ScrollMagic.Scene({        triggerElement: ".search-nav",        triggerHook: 0.1,        offset: 0,        // duration: $('.search__row').outerHeight(true)    })        .on('enter', function (e) {             $('.search-nav__list--mob').slick('refresh');            $('.search-nav').addClass('is-scrolling');        })        .on('leave', function (e) {             $('.search-nav__list--mob').slick('refresh');            $('.search-nav').removeClass('is-scrolling');        })        .setPin(".search-nav", {pushFollowers: false})        // .addIndicators()        .addTo(controller);    //function calls    //E-mail Ajax Send    //Documentation & Example: https://github.com/agragregra/uniMail    //footer submit form    $("form").submit(function () { //Change        var th = $(this);        $.ajax({            type: "POST",            url: "mail.php", //Change            data: th.serialize()        }).done(function () {            alert("Thank you!");            setTimeout(function () {                // Done Functions                th.trigger("reset");            }, 1000);        });        return false;    });    /* Trigger resize once */    $(window).resize(function () {        clearTimeout(resizeId);        resizeId = setTimeout(doneResizing(wWidth), 500);        function doneResizing() {            let width = $(window).width();            if (wWidth !== width) {                wWidth = width;            }        }    });    $(window).on('resize', function () {    });    // setTimeout(function () {    //    //     // preloader    //     $(".loader_inner").fadeOut();    //     $(".loader").delay(300).fadeOut("slow");    //     // end preloader    // }, 500)    // $(window).on('load', function () {    //     // $('.background-video').bgVideo({fadeIn: 2000});    //    //     // preloader    //     $(".loader_inner").fadeOut();    //     $(".loader").delay(300).fadeOut("slow");    //     // end preloader    // });});