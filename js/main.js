$(document).ready(function () {
    $('.menu li:has(ul)').hover(function (e) {
        e.preventDefault();

        if ($(this).hasClass('activado')) {
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();

        } else {
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }
    });

    $(window).resize(function () {
        if ($(document).width() > 450) {
            $('.contenedor-menu .menu').css({ 'display': 'block' });
        }

        if ($(document).width() < 450) {
            $('.contenedor-menu .menu').css({ 'display': 'none' });
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('activado');
        }

    });
});