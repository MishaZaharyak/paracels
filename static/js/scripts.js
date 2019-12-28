// init wow js
new WOW({
    offset: 100
}).init();


(function ($) {
//    main slider
    var mainSlider = $('.main-slider');

    if (mainSlider.length) {
        $(mainSlider).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: "cubic-bezier(0,.24,1,.66)",
            arrows: false,
            appendDots: mainSlider.parent().find('.slider-dots .container'),
            dots: true,
            dotsClass: 'custom-dots',
            customPaging: function (slider, i) {
                var slideNumber = (i + 1);
                var totalSlides = slider.slideCount;
                return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="number">' + slideNumber + '</span></a>';
            }
        });
    }
//    end main slider

// doctors slider
    var doctorsSlider = $(".doctors-slider");
    var doctorsSliderNav = $(".doctors-slider-nav");

    if (doctorsSlider.length) {
        doctorsSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: doctorsSliderNav,
            arrows: false,
            speed: 500,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        asNavFor: null,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        asNavFor: null,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        asNavFor: null,
                    }
                }
            ]
        });

        $(doctorsSliderNav).slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: doctorsSlider,
            speed: 500,
            nextArrow: doctorsSliderNav.closest('.doctors-section-inner').find(".slick_next"),
            prevArrow: doctorsSliderNav.closest('.doctors-section-inner').find(".slick_prev")
        });

        $(window).on('orientationchange', function () {
            doctorsSliderNav.get(0).slick.refresh();
        });
    }
// end doctors slider

// reviews slider
    var reviewSlider = $('.review-slider');

    if (reviewSlider.length) {
        reviewSlider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            nextArrow: reviewSlider.parent().find(".slick_next"),
            prevArrow: reviewSlider.parent().find(".slick_prev"),
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });
    }
//end reviews slider

//medical center slider
    var medicalCenterSlider = $('.medical-center-slider');

    if (medicalCenterSlider.length) {
        medicalCenterSlider.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 500,
            centerMode: true,
            centerPadding: '300px',
            nextArrow: medicalCenterSlider.parent().find(".slick_next"),
            prevArrow: medicalCenterSlider.parent().find(".slick_prev"),
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false,
                        centerPadding: 0
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false,
                        centerPadding: 0
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        centerPadding: 0
                    }
                }
            ]
        });
    }
// end medical center slider
})(jQuery);
// map
(function ($) {
    var map, icon, main_marker;

    $(".google_map").each(function (index, element) {
        var main_lato = 49.353172;
        var main_longo = 23.523140;
        var main_texto = '<p class="mb-1">м. Дрогобич,</p> вул. Грушевського, 52';

        icon = {
            url: "./static/images/icons/place.png",
            // size: new google.maps.Size(28, 38),
            // scaledSize: new google.maps.Size(28, 38),
            // labelOrigin: new google.maps.Point(20, -20)
        };

        map = new GMaps({
            el: element,
            scrollwheel: false,
            lat: main_lato,
            lng: main_longo,
            zoom: 15
        });

        main_marker = map.addMarker({
            lat: main_lato,
            lng: main_longo,
            icon: icon,
            infoWindow: {
                content: main_texto
            },
            mouseover: function () {
                this.infoWindow.open(map, this);
            },
            mouseout: function () {
                this.infoWindow.close();
            }
        });
        main_marker.infoWindow.open(map, main_marker);
        map.setCenter(main_lato, main_longo);
    });
})(jQuery);
// end map

// smooth scroll
$('a[href^="#"]').on('click', function (e) {
    var top = $(this.hash).offset().top;
    $('body, html').animate({scrollTop: top}, 1500);
});

// menu
function fixedMenu() {
    var menu = $('.menu-navbar');
    var height = $('.header').outerHeight();

    if (window.scrollY > height) {
        menu.addClass('fixed-menu');

    } else {
         menu.removeClass('fixed-menu');
    }
}

$(document).ready(function () {
    fixedMenu();
});

$(window)
    .scroll(function () {
        fixedMenu();
    })
    .resize(function () {
        fixedMenu();
    });
// end menu

// menu humburger button amination handler
$("#nav-icon3").on("click", function (e) {
    var button = $(this);
    // button.toggleClass("open");
    var target = $(button.data("target"));

    if (!target.hasClass("show")) {
        button.addClass("open");
        button.closest(".menu-navbar").addClass("opened-menu");
    } else {
        button.removeClass("open");
        button.closest(".menu-navbar").removeClass("opened-menu");
    }
});

$('.menu-backdrop').on('click', function () {

    var menu = $(this).closest('.menu-navbar');

    if (menu.hasClass('opened-menu')) {
        menu.removeClass("opened-menu");
        menu.find('#nav-icon3').removeClass('open');
        $(menu.find('#nav-icon3').data('target')).removeClass('show');
    }
});
// end menu humburger button amination handler

// form
$("form").submit(function(e) {
    e.preventDefault();
    var o = $(this);
    var phone = $(o).find('input[name=phone]').val();
    if(!phone.match(/^[\+]?([0-9]{12})$/)) {
        $(o).find('.alert').removeClass('alert-primary d-none').addClass('alert-danger').fadeIn().html('Формат номеру повинен бути +380*********');
        return;
    }

    $.ajax({
        type: "POST",
        url: "mail.php",
        data: o.serialize()
    }).done(function () {
        $(o).find('.alert').addClass('alert-primary').removeClass('alert-danger d-none').fadeIn().html('Ваше замовлення передане адміністратору');
        setTimeout(function() {
            $(o).find('.alert').addClass('d-none').fadeOut().html('')
        }, 10000)
    })
});