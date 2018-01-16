/*
    项目负责人：赵强
    项目创建日期:2017.10.24
    最新更新:2017.10.24
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间:
*/
$(function(){

/* 热卖品牌 */
    var liWidth=$(".main .brand .brand_banner li").width();//li的宽度
    var liSize=$(".main .brand .brand_banner li").size();//li的个数
    var ulWidth=liWidth*liSize;//ul的宽度
    $(".main .brand .brand_banner ul").width(ulWidth+"px");//把宽度给ul
    leftRight(".main .brand .brand_banner .left",".main .brand .brand_banner .right",".main .brand .brand_banner li",".main .brand .brand_banner ul");/* 调用方法 */
    function leftRight(left,right,width,positions){
        /* 点击左键 */
        $(left).click(function(){
            var posi=$(positions).position().left;//获取当前位置
            if(posi<=0){
                if(posi>=0){
                    $(positions).stop(true,false).animate({left:posi-liWidth*(liSize-1)},1000);
                    return;
                }
                $(positions).stop(true,false).animate({left:posi+liWidth},1000);
                return;
            }
        });

        /* 点击右键 */
        $(right).click(function(){
            var posi=$(positions).position().left;
            if(posi<=0){
                if(posi<=-(ulWidth-liWidth)){
                    $(positions).stop(true,false).animate({left: 0},1000);
                    return;
                }
                $(positions).stop(true,false).animate({left: posi-liWidth},1000);
                return;
            }
        });
    }
});