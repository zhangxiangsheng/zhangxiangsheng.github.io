window.onload=function (){
    var banna=document.querySelector(".bannatu");
    var items=document.querySelectorAll(".bannatu ul li");
    var dians=document.querySelectorAll(".dian");
    var zuojt=document.querySelector(".leftjt");
    var youjt=document.querySelector(".rightjt");
    var yhcx=document.querySelector(".yhcx");
    var longs=document.querySelectorAll(".yhcx ul li");
    var ul=document.querySelector(".yhcx ul")
    var chang=longs[0].offsetWidth;
    var kongzhi=true;
    console.log(ul);
    var num2=4;

    var num=0;
    var l=setInterval(move2,3000);
    function move2() {
            ul.style.transition = "all 1s";

        num2++;
        console.log(num2);
        ul.style.left = -(chang + 15) * num2 + "px";
        kongzhi = true;


    }
    ul.addEventListener("transitionend",function (){
        if (num2==10){
            ul.style.transition="none";

            num2=5;
            ul.style.left=-(chang + 15) * num2 + "px";


        }
    });
    youjt.onclick=function (){
        if(kaiguan) {
            kaiguan = false;
            move();
        }
    };
    yhcx.onmouseover=function (){
        clearInterval(l);
    };
    yhcx.onmouseout=function (){
        l=setInterval(move2,3000);
    };
    youjt.onmousemove=function (){
        youjt.style.opacity="1";
    };
    youjt.onmouseout=function (){
        youjt.style.opacity="0.5";
    };
    zuojt.onclick=function (){
        if(kaiguan){
            kaiguan=false;
        items[num].classList.add("rightchu");
        dians[num].style.background="#ccc";
        num--;
        if (num==-1){
            num=items.length-1;
        }
        items[num].classList.add("leftru");
        dians[num].style.background="#E40077";
        items[num].style.zIndex=z++;
    }};
    zuojt.onmousemove=function (){
        zuojt.style.opacity="1";
    }
    zuojt.onmouseout=function (){
        zuojt.style.opacity="0.5";
    }
    var t=setInterval(move,4000);
    var num=0;
    var z=5;
    function move(){
        items[num].classList.add("leftchu");
        dians[num].style.background="#ccc";
        num++;
        if (num==items.length){
            num=0;
        }
        items[num].classList.add("rightru");
        dians[num].style.background="#E40077";
        items[num].style.zIndex=z++;
    }
    items.forEach(function (img){
        img.addEventListener("animationend",function () {
            img.className="";
            kaiguan=true;
        })
    });
    banna.onmouseover=function (){
        clearInterval(t);
    };
    banna.onmouseout=function (){
        t=setInterval(move,4000);
    };
    var kaiguan=true;
    dians.forEach(function (e,index){
        e.onclick=function (){
            if(kaiguan){
                kaiguan=false;
            dians[num].style.background="#ccc";
            e.style.background="#E40077";
                if(num==index){
                    e.onclick=null;
                }
            if(num<index){
                items[num].classList.add("leftchu");
                items[index].classList.add("rightru");
            }else if(num>index){
                items[num].classList.add("rightchu");
                items[index].classList.add("leftru");
            }
            items[index].style.zIndex=z++;
            num=index;
        }
        }
    });

    var yhnext=document.querySelector(".yhnext");
    var yhpre=document.querySelector(".yhpre");
    yhpre.onclick=function (){
        if(kongzhi){
            kongzhi=false;
            console.log(num2);
            // if (num2==9){
            //     move2();
                move2();

            // }else {
            //     move2();
            // }

        }


    };
    console.log(yhnext);
    yhnext.onclick=function () {
        if(kongzhi){
            kongzhi=false;
            num2-=2;
            move2();
        }
    }

};