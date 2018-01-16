$(function(){
    $(window).scroll(function(){
        var Theight=$(document).scrollTop(); 
        if(Theight>500){
            $("#fixedTitle").slideDown(300);
        }else{ 
            $("#fixedTitle").slideUp(300);
        }
    });
});