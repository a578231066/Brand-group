$(function(){
    var timejpg=3000; //轮播时间
    var num=$('.box .box_img li').size(); //获取li中图片的数量
    for(var i=1; i<=num; i++){
        $(".box_tab").append("<a href='javascript:(void)'>"+" "+"</a>");
    }   
//初始化
    $(".box_img li").eq(0).show();
    $(".box_tab a").eq(0).addClass("active");

//轮播基本功能(鼠标经过按钮轮播)  
    $(".box_tab a").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(this).index();
        i=index;
        /***
            1.解决点击按钮后,无法按顺序轮播的bug
            2.原理: 将鼠标经过按钮的下标值,传给自动轮播move的按钮下标.
        ***/
        $(".box_img li").eq(index).stop(false, true).fadeIn(400).siblings().stop(false, true).fadeOut(400);
    });

//自动轮播 
    var i=0; //图片|按钮的数组下标
    var timer=setInterval(move,timejpg);
    function move(){
        i++;
        if(i==num){
            i=0;
        }
        if(i<0){
            i=num-1;
        }
        $(".box_tab a").eq(i).addClass("active").siblings().removeClass();
        $(".box_img li").eq(i).stop(false, true).fadeIn(400).siblings().stop(false, true).fadeOut(400);
    }
//鼠标经过停止
    $(".box").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(move,timejpg);
    });

    //用js给主页品牌热卖三个图来赋值
    $("#main .coupon div").eq(0).css({"padding-left":"2%","float":"left"});
    $("#main .coupon div").eq(1).css({"margin-left":"0.67%","float":"left"});
    $("#main .coupon div").eq(2).css({"margin-left":"0.67%","float":"left"});
});
















