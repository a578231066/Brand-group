$(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        scrollTop > 120 ? $('.bottom0').fadeIn(300) : $('.bottom0').fadeOut(300);
    });
    $('.bottom0').click(function() {
        $('body,html').stop().animate({
            'scrollTop': 0,
            'duration': 100,
            'easing': 'ease-in'
        })
    });
});