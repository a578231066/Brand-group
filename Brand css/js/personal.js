$(function(){
    /*正则*/
    //注册事件
    $("#mobile").keyup(function(){
        loginYan();
        console.log("点了");
    });
    $("#name").keyup(function(){
        nameYan();
    });
    $("#youXiang").keyup(function(){
        youXYan();
    });
    $("#qqNum").keyup(function(){
        qqYan();
    });
    //手机号验证
    function loginYan(){
        var str = $("#mobile").val();
        var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if(ret.test(str)){
            /*$(".loginGet").addClass("loginGets").removeClass("loginGet");
            //改动1
            daojishi(".loginGets");*/
            $("#mobile").siblings("em").html("手机号可用").css({"color":"#0f0","margin-left":"10px"});

        }else{
            /*$(".loginGet").css({"background":"#ccc","pointer-events":"none"});*/
            $("#mobile").siblings("em").html("手机号格式有误").css({"color":"#f00","margin-left":"10px"});
        }

    }
    /*姓名正则验证 只能输入两个字到6个字 根据相关法律规定 中国姓名个数大于等于2且小于等于6*/
    function nameYan(){
        var str = $("#name").val();
        var ret= /^[\u4e00-\u9fa5]{2,6}$/;
        if(ret.test(str)){
            $("#name").siblings("em").html("姓名格式正确").css({"color":"#0f0","margin-left":"10px"});
        }else{
            $("#name").siblings("em").html("姓名格式有误").css({"color":"#f00","margin-left":"10px"});
        }
    }
    //邮箱验证
    function youXYan(){
        var str = $("#youXiang").val();
        var ret = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(ret.test(str)){
            $("#youXiang").siblings("em").html("邮箱格式正确").css({"color":"#0f0","margin-left":"10px"});
        }else{
            $("#youXiang").siblings("em").html("邮箱格式有误").css({"color":"#f00","margin-left":"10px"});
        }
    }
    //QQ验证
    function qqYan(){
        var str = $("#qqNum").val();
        var ret = /^\d{5,10}$/;
        if(ret.test(str)){
            $("#qqNum").siblings("em").html("QQ号格式正确").css({"color":"#0f0","margin-left":"10px"});
        }else{
            $("#qqNum").siblings("em").html("QQ号格式有误").css({"color":"#f00","margin-left":"10px"});
        }
    }
    //当input获得焦点时执行的增长动画
    $("#main .box .show .zhangHuZiLiao form ul li input,#main .box .show .zhangHuZiLiao form ul .sjrxm input").focus(function(){
        $(this).stop().animate({"width":"180px"},200);
        $(this).siblings("span,label").css({"color":"#F72C48"});
    });
    //当input失去焦点时执行的缩短动画
    $("#main .box .show .zhangHuZiLiao form ul li input,#main .box .show .zhangHuZiLiao form ul .sjrxm input").blur(function(){
        $(this).stop().animate({"width":"150px"},200);
        $(this).siblings("span,label").css({"color":"#333"});
    });
    //当select内容发生改变 则获取他的option的值
    $("#main .box .show .zhangHuZiLiao form ul #city select").change(function(){
        //获取全部的选项
        //var cc=$("#main .box .show .zhangHuZiLiao form ul #city select option:selected").text();
        var cc=$(this).find("option:selected").text()
        console.log(cc);
        $("input").focus(function(){
            console.log(cc);
        });
    });

    tuD();
    //让定位的图钉能通过鼠标拖动通过公式来赋值top和left
    function tuD(){
        var dragging = false; 
        var iX, iY; 
        $("#tuDing").mousedown(function(e) { 
            dragging = true; 
            iX = e.clientX - this.offsetLeft; 
            iY = e.clientY - this.offsetTop; 
            this.setCapture && this.setCapture(); 
            return false; 
        }); 
        document.onmousemove = function(e) { 
            if (dragging) { 
                var e = e || window.event; 
                var oX = e.clientX - iX; 
                var oY = e.clientY - iY; 
                $("#tuDing").css({"left":oX + "px", "top":oY + "px"}); 
                return false; 
            } 
        }; 
        $(document).mouseup(function(e) { 
            dragging = false; 
            //$("#tuDing")[0].releaseCapture(); 
            e.cancelBubble = true; 
        });
    }
    //程序锁
    var cloke=true;
    //检测滑块距离来实现图钉的上下动画
    $(window).scroll(function(){
        var Bheight=$(document).scrollTop();
        if(Bheight>400&&cloke==true){
            $("#tuDing").stop().animate({"top":"1013","left":"948"});
            cloke=false;
        }else if(Bheight<400&&cloke==false){
            $("#tuDing").stop().animate({"top":"0","left":"948"});
            cloke=true;
        }
    });

    //发送至服务器
    /*function setAjax(){
        var uPwd=$('.password').val();
        var uQq=$('#qqNum').val();
        var uYx=$('#youXiang').val();
        var uName=$('#name').val();
        var uMobile=$('#mobile').val();
        var uXxdz=$('textarea').html();
        var uSname=$('#sName').val();
        $.ajax({
            url:,
            //url:"{{url('login/login')}}", 
            type:"post",
            data:{},
            success:function(data){
                //接收后台返回的结果
                alert(data);
                if(data==true){
                    console.log("走你");
                }else{
                    alert("错误,请重试。");

                }
            },
            error:function(e){
                //出错 
                alert("故障");
            }
        });
    }*/


    $("#main .box .show .myBackstage .hint div img").click(function(){
        var cc=$(this).parent("div").position().left+400;
        console.log(cc);
        $(this).parent("div").animate({"left":-cc},function(){
            $(this).fadeOut(400);
        });
    });
    $("#main .box .show .myBackstage .hint div img").mouseenter(function(){
        $(this).attr("src","http://192.168.0.9/public/Index/zhe/images/guanbi2.png");
    });
    $("#main .box .show .myBackstage .hint div img").mouseleave(function(){
        $(this).attr("src","http://192.168.0.9/public/Index/zhe/images/guanbi4.png");
    });
    var clock1=false;
    var clock2=false;
    var clock3=false;
    var clock4=false;
    var clock5=false;
    var clock6=false;
    //各种验证
    shouName()
    function shouName(){
        $("#sName").blur(function(){
            console.log("11");
            if($(this).val()==""){
                $(this).attr({"placeholder":"请输入收件人姓名"});
                $(this).addClass("borderRed");
                $("#tuDing").stop().animate({"left":"290px","top":"489px"});
            }else{
                $(this).removeClass("borderRed");
            }
        });
        $("#sName").focus(function(){
            if($(this).val()==""){
                $(this).attr({"placeholder":""});
                $("#tuDing").stop().animate({"left":"320px","top":"489"});
            }
        });
    }
    //
    textarea();
    function textarea(){
        $("textarea").blur(function(){
            if($(this).val()==""){
                clock6=false;
                $(this).attr({"placeholder":"请输入详细地址"});
                $(this).addClass("borderRed");
            }else{
                clock6=true;
                $(this).removeClass("borderRed");
            }
        });
    }
    //
    yanZhengP(".password","请输入您的密码","72px",clock1);
    yanZhengP("#qqNum","请输入您的QQ","123px",clock2);
    yanZhengP("#youXiang","请输入您的邮箱","172px",clock3);
    yanZhengP("#name","请输入您的姓名","222px",clock4);
    yanZhengP("#mobile","请输入您的姓名","272px",clock5);
    function yanZhengP(a,b,c,d){
        $(a).blur(function(){   
            if($(this).val()==""){
                $(this).attr({"placeholder":b});
                $("#tuDing").stop().animate({"left":"273px","top":c});
                $(this).addClass("borderRed");
                d=false;
            }else{
                d=true;
                $(this).removeClass("borderRed");
            }
        });
        $(a).focus(function(){
            if($(this).val()==""){
                $(this).attr({"placeholder":""});
                $("#tuDing").stop().animate({"left":"300px","top":c});
            }
        });
    } 
   
});