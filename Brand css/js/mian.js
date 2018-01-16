$(function(){
    $(".juZh").mouseenter(function(){
        $(this).children("h5").removeClass("mouseShow"); 
        $(this).children("p").removeClass("mouseShow"); 
    });
    $(".juZh").mouseleave(function(){
        $(this).children("h5").addClass("mouseShow");
        $(this).children("p").addClass("mouseShow"); 
    });
    $(".close").click(function(){
        $("#tanchu").fadeOut(400);
    });
    $(document).click(function(){
        $("#rightCeBian .bottom3 .tabTip").fadeOut(200);
    });
    $("#rightCeBian .bottom3").mouseenter(function(){
        $("#rightCeBian .bottom3 .tabTip").show();
    });
    $("#rightCeBian .bottom3").mouseleave(function(){
        $("#rightCeBian .bottom3 .tabTip").hide();
    });
});