$(function(){
    $("#rightCeBian .bottom4 .tabTip a").click(function(){
        $(this).addClass("on").siblings().removeClass();
    });
    $("#rightCeBian .bottom4 .tabTip .moRen").click(function(){
        $("#rightCeBian .bottom4 .tabIcon").css("background-position","-386px 0px");
    });
    $("#rightCeBian .bottom4 .tabTip .laMa").click(function(){
        $("#rightCeBian .bottom4 .tabIcon").css("background-position","-677px 0px");
    });
    $("#rightCeBian .bottom4 .tabTip .nv").click(function(){
        $("#rightCeBian .bottom4 .tabIcon").css("background-position","-636px 0px");
    });
    $("#rightCeBian .bottom4 .tabTip .nan").click(function(){
        $("#rightCeBian .bottom4 .tabIcon").css("background-position","-598px 0px");
    });
});