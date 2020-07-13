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

    // Маска для ввода телефона в формах
    function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
        // 
        // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +	 bugfix by: Michael White (http://crestidg.com)
    
        var i, j, kw, kd, km;
    
        // input sanitation & defaults
        if( isNaN(decimals = Math.abs(decimals)) ){
            decimals = 0;
        }
        if( dec_point == undefined ){
            dec_point = ",";
        }
        if( thousands_sep == undefined ){
            thousands_sep = " ";
        }
    
        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
    
        if( (j = i.length) > 3 ){
            j = j % 3;
        } else{
            j = 0;
        }
    
        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
    
    
        return km + kw + kd;
    }
    
        
    [].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });


    // Вывод alt и title в типовых картинках
    let cardForTags = document.querySelectorAll('.js--article-img');
    
    for (let node of cardForTags) {
        let alt = node.querySelector('img').getAttribute('alt');
        if(alt !== 'undefined') {
            node.querySelector('.js--article-img__alt').innerHTML = alt;
        }
        let title = node.querySelector('img').getAttribute('title');
        if(alt !== 'undefined') {
            node.querySelector('.js--article-img__title').innerHTML = title;
        }
    }

    // Даты
    moment.locale('ru');

    let elementsForTime = document.querySelectorAll('.js--time')
    
    for (let el of elementsForTime) {
        let date = el.innerHTML
        el.innerHTML = moment(date).calendar();
    }
});