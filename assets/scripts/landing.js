$(document).ready(function(){

    $('header .nav--arrow').hide();

    var mqDesktopWidth = window.matchMedia('(min-width: 68.75em)');
    var mqDesktopHeight = window.matchMedia('(min-height: 43.75em)');
    var mqDesktopAspectRatio = window.matchMedia('(max-aspect-ratio: 25/12)');
    var mqLargeMobile = window.matchMedia('(min-width: 31.25em)');

    var initAnimation = function(){
        $('nav').hide().fadeIn(1000);
        $('.logo--nameplate').hide().delay(1000).fadeIn(800);

        if (mqDesktopWidth.matches){
            setTimeout(function(){
                $('.border--title, .nameplate__border-container, .logo--nameplate').addClass('activate-animation');
            }, 1800);
            $('.logo--word:nth-child(even)').hide().delay(4200).fadeIn(800);
            $('.nameplate__subtitle--tagline').hide().delay(4600).fadeIn(500);

            if (mqDesktopHeight.matches && mqDesktopAspectRatio.matches){
                $('header .nav--arrow').delay(4800).fadeTo(800, 1, 'swing');
            }
        } else{
            setTimeout(function(){
                $('.border--title').addClass('activate-animation');
            }, 1800);

            if(mqLargeMobile.matches){
                $('.nameplate__subtitle--name, .nameplate__subtitle--tagline').hide().delay(3700).fadeIn(500);
            } else{
                $('.nameplate__subtitle--name').hide().delay(3700).fadeIn(500);
            }
        }
    }

    /* initialize animation on load */

    initAnimation();

    /* enable smooth scrolling link functionality */

    $('.nav--arrow, nav ul li a, .logo--nav').click(function(e){
        var clicked = $(e.target);
        var scrollTarget;
        var linkID = $.attr(this, 'href');
        var navLogoClass = 'logo--nav';

        if( clicked.hasClass(navLogoClass) ){
            scrollTarget = 'header';
        } else {
            e.preventDefault();
            scrollTarget = linkID;
        }
        $('html, body').animate({ scrollTop: $(scrollTarget).offset().top }, 1000);
    });


    $(window).scroll(function(){
        var windowScrollTop = $(window).scrollTop();
        var aboutScrollTop = $('#about').offset().top;
        var windowBreakpoint = $(window).height()/2;
        var scrollBreakpoint = aboutScrollTop - windowBreakpoint;
        var navLogo = $('.logo--nav');

        if ( windowScrollTop >= scrollBreakpoint){
            navLogo.addClass('active');
        } else{
            navLogo.removeClass('active');
        }
    });
});
