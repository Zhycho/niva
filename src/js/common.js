$(document).ready(function() {

    // Поиск в хедере
    $('.js--header-search-button').click( function(event) {
        event.preventDefault();
        $(this).closest('.js--header-search').toggleClass('active');
    });

    // Слайдер кадров недели на главной
    $('.js--main-slider').slick({
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--main-slider__prev'),
        nextArrow: $('.js--main-slider__next'),
    });

    // Слайдер в продукте
    $('.js--article-slider__projector').slick({
        infinite: false,
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        speed: 700,
        fade: true,
        asNavFor: '.js--article-slider__nav',
        responsive: [
            {
                breakpoint: 481,
                settings: "unslick"
            },
        ]
    });
    $('.js--article-slider__nav').slick({
        infinite: false,
        slidesToShow: 4,
        dots: false,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.js--article-slider__prev'),
        nextArrow: $('.js--article-slider__next'),
        focusOnSelect: true,
        asNavFor: '.js--article-slider__projector',
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

    // Табы в афише
    $('.js--affiche-tabs__item').click( function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $(this).closest('.js--affiche').find('.js--affiche-panels__item').removeClass('active');
        $(this).closest('.js--affiche').find('.js--affiche-panels__item').eq($(this).index()).addClass('active');
    });

    // Табы в афише - мобилка
    $('.js--affiche-tabs__item_mobile').click( function() {
        $(this).closest('.js--affiche-mobile__item').siblings().removeClass('active');
        $(this).closest('.js--affiche-mobile__item').toggleClass('active');
    });

    // Бургерное меню
    $('.js--burger').click( function() {
        $(this).toggleClass('active');
        $(this).closest('.js--header-top').find('.js--burger-menu').toggleClass('active');
        $(this).closest('body').toggleClass('hidden');
    });
});