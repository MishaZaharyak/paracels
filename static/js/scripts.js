// init wow js
new WOW({
    offset: 100
}).init();


(function ($) {
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

        var windowWidth = window.innerWidth;

        if (windowWidth < 992) {
            doctorsSliderNav.slick('unslick');
        }
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
