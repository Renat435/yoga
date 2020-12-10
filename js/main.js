$(document).ready(function () {
    $('.services-slider').slick({
        centerMode: true,
        centerPadding: '460px',
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1870,
                settings: {
                    centerMode: false,
                    centerPadding: '0px',
                }
            }
        ]
    });
    $('.instructors__slider').slick({
        arrows: false,
        dots: true,
    });
    $('.reviews__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/prev.jpg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/next.jpg" alt=""></button>',
        responsive: [
            {
                breakpoint: 930,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});