window.onload=function (){
    var top=document.querySelector(".top");
    var left = document.querySelector(".left");

    console.log(left);
    var obj;
    var s;
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if(st>=$(".xuanzhong").eq(1).offset().top - 300){
            $(".top").css("top",0);
        }else {
            $(".top").css("top",-50);
        }
        if(st>=$(".xuanzhong").eq(1).offset().top - 50){
            $("#lift").css("display","block");
        }else {
            $("#lift").css("display","none");
        }
        clearTimeout(s);
       s=setTimeout(function () {


            $(".J_lift_item").each(function (index){
                if(st>=$(".xuanzhong").eq(index).offset().top - 50){

                    $(".J_lift_item").css("background","#918888").eq(index-1).css("background","#D70B1C");
                }else {

                }
            })
        },200);

    });
    window.onscroll=function () {
        obj = document.body.scrollTop;
        // console.log(obj);
        rights[6].onclick=function (){
            animate(document.body,{scrollTop:0},300);
        };

       // if(obj>=1300) {
       //      // alert(1)
       //      left.style.opacity="1";
       //
       //
       //  }  else{
       //     left.style.opacity="0";
       // }

    }
    var rights=document.querySelectorAll(".rights ul li");
    var rboxs=document.querySelectorAll(".rights ul li .rbox")
    console.log(rboxs);
    Array.from(rights).forEach(function (ele,index){
        ele.onmouseover=function (){
            rboxs[index].style.left="-61px";
            // ele.style.background="#c81623";
            rboxs[index].style.background="#c81623";
        }
        ele.onmouseout=function (){
            rboxs[index].style.left="35px";
            rboxs[index].style.background="#7a6e6e";
        }
    })
    var nummm=0;
    var t=setInterval(move,2000);
    function move(){
        nummm++;
        if(nummm>=$(".J_slider_item").length){
            nummm=0;
        }
        $(".J_slider_item").css({"opacity":"0"},{"z-index":"0"},{"transition":"all 1s"}).eq(nummm).css({"opacity":"1"},{"z-index":"1"});
    $(".slider_indicator_btn").css("background","#FFFFFF").eq(nummm).css("background","#DB192A")

    }
    $(".J_slider_list").hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(move,2000);
    })
    $(".slider_indicator_btn").hover(function () {
        var index=$(this).index();
        nummm=index;
        $(".J_slider_item").css({"opacity":"0"},{"z-index":"0"},{"transition":"all 1s"}).eq(nummm).css({"opacity":"1"},{"z-index":"1"});
        $(".slider_indicator_btn").css("background","#FFFFFF").eq(nummm).css("background","#DB192A")
        clearInterval(t);
    },function () {
        t=setInterval(move,2000);
    })
    $(".J_lift_item").hover(function () {
        $(this).css("background","#D70B1C");
        clearTimeout(s);
    },function () {
        $(this).css("background","#918888");
    })
    $(".J_lift_item").click(function () {
        var index=$(this).index()+1;
        var ot = $(".xuanzhong").eq(index).offset().top - 50;
        $("html,body").animate({scrollTop: ot}, 500);
        clearTimeout(s);
        $(".J_lift_item").css("background","#918888");
        $(this).css("background","#D70B1C")
    })
    $(".J_lift_item").eq(10).click(function () {
        // $("html,body").animate({scrollTop:0}, 500);
        alert(1)
    });
    console.log( $(".J_lift_item").eq(10));

};