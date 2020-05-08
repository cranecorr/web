$(function () {

    $('.reviwes-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1106,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    $('.btn__menu').on('click', function () {
        $('.menu__list').slideToggle();
    });
});

