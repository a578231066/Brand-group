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
    $(document).ready(function(){
        var p=0,t=0;
        $(window).scroll(function(e){
            p=$(this).scrollTop();
            if(t<=p){//下滚
                $(".main .volume").css({
                    position: 'static'
                });
            }
            else{//上滚
                if(p<=500){
                    $(".main .volume").css({
                        position: 'static'
                    });
                }else{
                    $(".main .volume").css({
                        width: '1170',
                        position: 'fixed',
                        top:'0'
                    });
                }
            }
            t=p;//更新上一次scrollTop的值
        });
    });

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

    $(".main .volume ul.two li").click(function(){
        var aVal=$(this).children("a").html();
        if(aVal!="默认"){
            $(".main .volume ul.one").hide();
        }else{
            $(".main .volume ul.one").show();
        }
        $(this).addClass('active').siblings().removeClass('active');
        $(".main .volume ul img").hide();
        
    });

    var i=0;
    $(".main .volume ul.two li.jiage").click(function(){
        if(i==0){
            $(".main .volume ul.two img.two").hide();
            $(".main .volume ul.two img.one").show();
            i=1;
        }else{
            $(".main .volume ul.two img.one").hide();
            $(".main .volume ul.two img.two").show();
            i=0;
        }
    });

/* 懒加载 */
    $("img.lazy").lazyload({
        placeholder : "{{asset('public/Brand/images/no_pic.png')}}",
        effect: "fadeIn"
    });

/* ajax方法 */
    function page(p){
        var oIh=$("#inputHidden").val();
        var oIn1=$("#inputHidden1").val();
        var url="http://192.168.0.9/Wap/catelist/"+oIh+"/"+oIn1+"?page="+p;
        var DetailUrl=$("#DetailUrl").val();
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            },
            success: function(data){
                for(var i=0;i<data.data.length;i++){
                    var html="";
                    if(i%2!=0){
                        html="<div class='fr left'>";
                    }else{
                        html="<div class='fl left'>";
                    }
                    html+="<a href='"+DetailUrl+'/'+data.data[i].id+"'><div class='divImg'><img src='"+data.data[i].goods_pic+"' /></div><p class='top'>"+data.data[i].goods_title+"</p><p class='down'><span class='money'>￥</span>"+data.data[i].app_price+"<span class='fr'>详情</span></p></a></div>";
                    $("#main_two").append(html);
                    if(data.next_page_url==null){
                        $(".down_down").empty();
                        $(".down_down").append("<span>到达底部</span>");
                    }
                }
                
            }/*,
            error: function(xhr, type){
                alert('莫慌，别太心急！')
            }*/
        });
    }


});