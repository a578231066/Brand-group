$(function(){
    /*各个页面左侧悬浮nav的js控制*/
    $(window).scroll(function(){
        var Bheight=$(document).scrollTop(); 
        var Bwidth=$(window).width();
        if(Bheight>300 && Bwidth>1580){
            $("#ceBianLan").fadeIn(300);
            $("#ceBianLan_one").fadeOut(300);
        }else{ 
            $("#ceBianLan").fadeOut(300);
            $("#ceBianLan_one").fadeIn(300);
        }
    });
});