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
        // responsive: [
        //     {
        //         breakpoint: 993,
        //         settings: {
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 769,
        //         settings: {
        //             slidesToShow: 2
        //         }
        //     },
        // ]
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
});