$(function () {
   /*show main-menu*/
    $('#js-show-menu').on('click', function () {
        $('#js-main-menu').slideToggle();
    });
    
    /*menu change bg on scroll*/
    $(document).on('scroll', function () {
        var documentOffset = $(this).scrollTop();
        var show_main_menu = $('.main-header .show-main-menu');
        var main_menu = $('.main-header .main-menu');
        var main_menu_box = $('#js-main-menu-box');
        var headerHeight = $('.main-header').innerHeight() - 100;

        if(documentOffset > headerHeight){
            $(main_menu_box).css({
                'backgroundColor': 'black'
            });
        }else{
            $(main_menu_box).css({
                'backgroundColor': 'transparent'
            });
        }
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
                breakpoint: 650,
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