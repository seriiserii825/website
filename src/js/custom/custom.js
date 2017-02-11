$(function () {
   /*show main-menu*/
    $('#js-show-menu').on('click', function () {
        $('#js-main-menu').slideToggle();
    });
    
    /*main-slider
    * =========================*/
    $('#js-main-slider').slick({
        infinite: true,
        speed: 1000,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    

});