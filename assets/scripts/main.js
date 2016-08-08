$(document).ready(function(){

    var $backtotop = $('.back-to-top');

    // smooth scrolling link
    $backtotop.click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('header').offset().top }, 750);
    });
});
