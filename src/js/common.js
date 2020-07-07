$(document).ready(function() {

    // Поиск в хедере
    $('.js--header-search-button').click( function(event) {
        event.preventDefault();
        $(this).closest('.js--header-search').toggleClass('active');
    });

    // Слайдер Врачей на главной
    $('.js--main-slider').slick({
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        prevArrow: $('.js--main-slider__prev'),
        nextArrow: $('.js--main-slider__next'),
        responsive: [
            {
                breakpoint: 993,
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
        ]
    });
});