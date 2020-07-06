$(document).ready(function() {

    $('.js--header-search-button').click( function(event) {
        event.preventDefault();
        $(this).closest('.js--header-search').toggleClass('active');
    });

});