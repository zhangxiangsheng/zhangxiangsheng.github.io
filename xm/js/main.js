var btnsban=document.querySelectorAll(".hualun li");
var consban=document.querySelectorAll(".bannertu li.banner-tu");
var banner=document.querySelector(".banner");
var zuojian=document.querySelector(".zuojian");
var youjian=document.querySelector(".youjian");
var zuojianming=document.querySelector(".zuo");
var youjianming=document.querySelector(".you");
var kongbaijs=document.querySelector(".kongbaijs");
var kongbaijs2=document.querySelector(".kongbaijs2");
var zuoyou=document.querySelector(".zuoyou");
var zuojianming1=document.querySelector(".zuo1");
var youjianming1=document.querySelector(".you1");
var lis=document.querySelectorAll(".listjs");
var seconds=document.querySelectorAll(".daohangxlk");
var nowbtnsban=btnsban[0];
var nowconsban=consban[0];
Array.from(btnsban).forEach(function (v,index) {

    v.onclick=function () {
        num = index;
        nowbtnsban.style.background = "rgba(0,0,0,0.4)";
        this.style.background = "#fff";
        nowbtnsban = this;
        nowconsban.style.opacity = 0;
        nowconsban.style.zIndex = 1;
        consban[index].style.opacity = 1;
        consban[index].style.zIndex = 2;
        nowconsban = consban[index];
    }
});
var num=0;
var t=setInterval(click,2000);
function click() {
    num++;
    if(num==btnsban.length){
        num=0;
    }
    if(num==-1){
        num=btnsban.length-1;
    }
    nowbtnsban.style.background="rgba(0,0,0,0.4)";
    btnsban[num].style.background="#fff";
    nowbtnsban=btnsban[num];
    nowconsban.style.opacity=0;
    nowconsban.style.zIndex=1;
    consban[num].style.opacity=1;
    consban[num].style.zIndex=2;
    nowconsban=consban[num];
}
banner.onmouseover=function () {
    clearInterval(t);
};
banner.onmouseout=function () {
    t=setInterval(click,2000)
};
youjian.onclick=function () {
    click();
};
zuojian.onclick=function () {
    num-=2;
    click();
};
youjianming.onclick=function () {
    kongbaijs.style.marginLeft=-1226+"px";
    youjianming.style.opacity=0.5;
    zuojianming.style.opacity=1;
};
zuojianming.onclick=function () {
    kongbaijs.style.marginLeft=0;
    zuojianming.style.opacity=0.5;
    youjianming.style.opacity=1;
};
var tming=setInterval(moveming,2000);
function moveming() {
    if(zuojianming.style.opacity==0.5){
        youjianming.onclick();
    }else{
        zuojianming.onclick();
    }
};
zuoyou.onmouseover=function () {
    clearInterval(tming);
};
zuoyou.onmouseout=function () {
    tming=setInterval(moveming,2000);
};
kongbaijs.onmouseover=function () {
    clearInterval(tming);
};
kongbaijs.onmouseout=function () {
    tming=setInterval(moveming,2000);
};

youjianming1.onclick=function () {
    kongbaijs2.style.marginLeft=-1226+"px";
    youjianming1.style.opacity=0.5;
    zuojianming1.style.opacity=1;

};
zuojianming1.onclick=function () {
    kongbaijs2.style.marginLeft=0;
    zuojianming1.style.opacity=0.5;
    youjianming1.style.opacity=1;
};
Array.from(lis).forEach(function (vlis,ilis) {
    vlis.onmouseover=function () {
        for(var l=0;l<lis.length;l++){
            seconds[l].style.height=0;
    }
        seconds[ilis].style.height="275px";
    }
    vlis.onmouseout=function () {
        seconds[ilis].style.height=0;
    }
});
//banner 左
var navsz=document.querySelectorAll(".banner>aside>ul>li");
var navzuo=document.querySelectorAll(".banner>aside>ul>li>div");
// console.log(navzuo)
Array.from(navsz).forEach(function (vnz,inavz) {
    vnz.onmouseover=function (e) {
        navzuo[inavz].style.display="block";
        // navzuo[inavz].style.top=-31.19*inavz+"px";
        //e.stopPropagation();
    };
    vnz.onmouseout=function () {
        navzuo[inavz].style.display="none";
    }
});
//内容js
var btns_1 = document.querySelectorAll(".lbd.lbd1>div");
var cons_1 = document.querySelectorAll(".nrjs1>div");
var btns_2 = document.querySelectorAll(".lbd.lbd2>div");
var cons_2 = document.querySelectorAll(".nrjs2>div");
var btns_3 = document.querySelectorAll(".lbd.lbd3>div");
var cons_3 = document.querySelectorAll(".nrjs3>div");
var btns_4 = document.querySelectorAll(".lbd.lbd4>div");
var cons_4 = document.querySelectorAll(".nrjs4>div");
var zuo1 = document.querySelector(".zuon.zuos1");
var you1 = document.querySelector(".youn.yous1");
var zuo2 = document.querySelector(".zuon.zuos2");
var you2 = document.querySelector(".youn.yous2");
var zuo3 = document.querySelector(".zuon.zuos3");
console.log(zuo3)
var you3 = document.querySelector(".youn.yous3");
var zuo4 = document.querySelector(".zuon.zuos4");
var you4 = document.querySelector(".youn.yous4");

/*var bigbox2_1 = document.querySelector(".nrb.lba1");
var bigbox2_2 = document.querySelector(".nrb.lba2");
var bigbox2_3 = document.querySelector(".nrb.lba3");
var bigbox2_4 = document.querySelector(".nrb.lba4");*/

function aaa(btns2, cons2, zuo, you) {
    var btnnow2 = btns2[0];
    var connow2 = cons2[0];
    var num2 = 0;
    var tn;
    // var tb2;
    Array.from(btns2).forEach(function (ele, index) {
        ele.onclick = function () {
            num2 = index;
            clearTimeout(tn);
            tn=setTimeout(function () {
                btnnow2.style.background = "#B0B0B0";
                btns2[index].style.background = "#fff";
                btnnow2.style.border = "2px solid #fff";
                btns2[index].style.border = "2px solid #ff6700";
                btnnow2 = btns2[index];

                connow2.style.display = "none";
                connow2.style.zIndex = 1;
                cons2[index].style.zIndex = 2;
                cons2[index].style.display = "block";
                connow2 = cons2[index];
            },3000);
        }

    });
    // var tb2 = setInterval(moven, 3000);

    function moven() {
        num2++;
        if (num2 == btns2.length) {
            num2 = 0;
        }
        if (num2 == -1) {
            num2 = btns2.length - 1;
        }
        btnnow2.style.background = "#B0B0B0";
        btns2[num2].style.background = "#fff";
        btnnow2.style.border = "2px solid #fff";
        btns2[num2].style.border = "2px solid #ff6700";
        btnnow2 = btns2[num2];

        connow2.style.display = "none";
        connow2.style.zIndex = 1;
        cons2[num2].style.zIndex = 2;
        cons2[num2].style.display = "block";
        connow2 = cons2[num2];
    }
   /* bigbox2.onmouseover=function () {
        clearInterval(tb2);
    }
    bigbox2.onmouseout = function () {
        tb2 = setInterval(moven, 3000);
    };*/
    zuo.onclick = function () {
        num2 -= 2;
        moven();
    };
    you.onclick = function () {
        moven();
    };
}
aaa(btns_1, cons_1, zuo1, you1);
aaa(btns_2, cons_2, zuo2, you2);
aaa(btns_3, cons_3, zuo3, you3);
aaa(btns_4, cons_4, zuo4, you4);

//搜索
var inputs=document.querySelector(".text");
console.log(inputs);
var sousuozi=document.querySelector(".sousuozi");
console.log(sousuozi)
inputs.onclick=function (e) {
    sousuozi.style.display="none";
    e.stopPropagation();
};
//购物车
var gouwu=document.querySelectorAll(".header-main3");
var gouwxia=document.querySelectorAll(".header-main3>div");
Array.from(gouwu).forEach(function (iy,vy) {
    iy.onmouseover=function (e) {
        gouwxia[vy].style.opacity=1;

    }
    iy.onmouseout=function () {
        gouwxia[vy].style.opacity=0;
    }
});

