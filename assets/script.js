"use strict";
var nav = $('nav');
var navHeight = nav.outerHeight();

$('.navbar-toggler').on('click', function () {
    if (!$('#mainNav').hasClass('navbar-reduce')) {
        $('#mainNav').addClass('navbar-reduce');
        $('.navbar-toggler').css('background-color', 'rgba(0, 0, 0, 0.6)');
        $('.nav-link').css('color', 'rgba(0, 0, 0, 0.6)', 'padding-right', '6px');
        $('navbar-brand').css('color', 'rgba(0, 0, 0, 0.6)', 'padding-right', '6px');
    }
    // Closes responsive menu when a scroll trigger link is clicked.
    $('.js-scroll').on("click", function () {
        $('.navbar-collapse').collapse('hide');
    });

})

$(window).trigger('scroll');
$(window).on('scroll', function () {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
        $('.navbar-expand-md').addClass('navbar-reduce');
        $('.navbar-expand-md').removeClass('navbar-trans');
        $('.navbar-toggler').css('background-color', 'rgba(0, 0, 0, 0.6)')
        $('.js-scroll').css('color', 'rgba(0, 0, 0, 0.6)');
    } else {
        $('.navbar-expand-md').addClass('navbar-trans');
        $('.navbar-expand-md').removeClass('navbar-reduce');
        $('.navbar-toggler').css('background-color', 'transparent')
        $('.js-scroll').css('color', '#fff');
        $('.navbar-toggler').css('color', '#fff')
    }
    if ($(window).scrollTop() - $(window).height() > 1200) {
        $("footer").hide()
    }
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });
    // if ($(window).scrollTop() > top) {
    //     $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    // }
    // else {
    //     $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    // }
    
});

if ($("a").hasClass("active")) {
    $(".active").css('background-color', 'rgba(0, 0, 0, 0.6)')
} 
$(document).ready(function() {
    if ($(window).width() < 992) {
        $(".LI-profile-badge").attr('data-type', 'horizontal');
    }})
