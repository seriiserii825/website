$(function () {
   /*show main-menu*/
    $('#js-show-menu').on('click', function () {
        $('#js-main-menu').slideToggle();
    });
    
    /*menu change bg on scroll*/
    $(document).on('scroll', function () {
        var documentOffset = $(this).scrollTop();
        var main_menu_box = $('#js-main-menu-box');
        var headerHeight = $('.main-header').innerHeight() - 100;

        if(documentOffset > headerHeight){
            $(main_menu_box).css({
                'backgroundColor': 'rgba(0,0,0,.65)'
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
    
    /*smooth scroll to the pages block*/
    $('.js-main-menu__item').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var current = $(this).attr('href');
        var currentOffset = $(current).offset().top;
        $('.js-main-menu__item').removeClass('active');
        $this.addClass('active');
        console.log($this);


         $('html, body').animate({
             scrollTop: currentOffset
         }, 800);
    });

    /*scroll to head*/
    $('.js-to-up').on('click', function () {
        $('.js-main-menu__item').removeClass('active');
        $('.js-main-menu__item:first-of-type').addClass('active');

        var headerOffset = $('#js-header').offset().top;
        $('html, body').animate({
            scrollTop: headerOffset
        }, 800);
    })


});