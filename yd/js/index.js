var ban = document.querySelector(".ban")
var banneraImg = document.querySelectorAll(".ba a")
var lun = document.querySelectorAll(".lun>div")
var baz = document.querySelector(".baz")
var bay = document.querySelector(".bay")
var hid = document.querySelector(".hid")
var login = document.querySelector(".login")
var office = document.querySelector(".office")
var yier = document.querySelector(".yier")
console.log(login)
//banner效果
var num = 0;
var z = 5;
var flag = true;
var t = setInterval(move, 3000)
function move() {
    banneraImg[num].classList.add("leftOut");//添加类名
    lun[num].classList.remove("active")
    num++;
    if (num == banneraImg.length) {
        num = 0
    }
    banneraImg[num].classList.add("leftIn");
    lun[num].classList.add("active")
    banneraImg[num].style.zIndex = z++;

}
banneraImg.forEach(function (v, b) {
    v.addEventListener("animationend", function () {
        banneraImg[b].className = ""
        flag = true;
    })

})
ban.onmouseover = function () {
    clearInterval(t)
}
ban.onmouseout = function () {
    t = setInterval(move, 3000)
}
lun.forEach(function (v, i) {
    v.onclick = function () {
        if (flag) {
            if (num == i) {
                return
            }
            else if (num < i) {
                banneraImg[num].classList.add("leftOut")
                lun[num].classList.remove("active")
                lun[i].classList.add("active")
                banneraImg[i].classList.add("leftIn")
            }
            else if (num > i) {
                banneraImg[num].classList.add("rightOut")
                lun[num].classList.remove("active")
                lun[i].classList.add("active")
                banneraImg[i].classList.add("rightIn")
            }
            banneraImg[i].style.zIndex = z++;
            num = i;
            flag = false
        }
    }
})
bay.onclick = function () {
    if (flag) {
        move()
        flag = false;
    }
}
baz.onclick = function () {
    if (flag) {
        banneraImg[num].classList.add("rightOut")
        lun[num].classList.remove("active")
        num--;
        if (num < 0) {
            num = banneraImg.length - 1;
        }
        banneraImg[num].classList.add("rightIn")
        lun[num].classList.add("active")
        banneraImg[num].style.zIndex = z++;
        flag = false;
    }
}
//头部效果
login.onmouseover = function () {
    hid.style.display = "block"
}
login.onmouseout = function () {
    hid.style.display = "none"
}
office.onmouseover = function () {
    yier.style.display = "block"
}
office.onmouseout = function () {
    yier.style.display = "none"
}
//无缝轮播效果
var list = document.querySelector(".list")
var con = document.querySelectorAll(".list .con")
var content = document.querySelector(".content")
var pre = document.querySelector(".con-pre")
var next = document.querySelector(".con-next")
var wf = 4;
var w = setInterval(wufeng, 3000)
function wufeng() {
        list.style.transition = "all 1s"
    wf++;
    list.style.marginLeft = -295 * wf + "px"
}
list.addEventListener("transitionend", function () {
    if (wf == con.length - 4) {
        list.style.transition = "none"
        wf = 4;
        list.style.marginLeft = -295 * wf + "px"
    }else if(wf==0){
        list.style.transition = "none"
        wf=8;
        list.style.marginLeft = -295 * wf + "px"
    }
    flag1=true;
})
content.onmouseover = function () {
    clearInterval(w)
}
content.onmouseout = function () {
    w = setInterval(wufeng, 3000)
}
var flag1=true;
next.onclick = function () {
    if(flag1){
        flag1=false;
        wufeng()
    }
}
pre.onclick = function () {
    if(flag1){
        flag1=false;
        wf -= 2;
      wufeng()
    }
}


//公告
var nom = 0;
var notice = document.querySelector(".no-middle")
var gonggao = document.querySelector(".notice")
console.log(gonggao)
var g = setInterval(gmove, 3000)
function gmove() {
    nom++;
    notice.style.marginTop = -38 * nom + "px";
    if (nom == 2) {
        notice.style.marginTop = 0;
        nom = 0
    }
}
gonggao.onmouseover = function () {
    clearInterval(g)
}
gonggao.onmouseout = function () {
    g = setInterval(gmove, 3000)
}
var gnext = document.querySelector(".no-right .zj")
var gpre = document.querySelector(".no-right .yj")

gpre.onclick = function () {
    gmove()
}
gnext.onclick = function () {
    gmove();
}
//咨询
var zixun = document.querySelector(".i-zixun")
var problem = document.querySelector(".problem")
var suggition = document.querySelector(".suggition")
zixun.onmouseover = function () {
    zixun.style.right = 120 + "px";
}
zixun.onmouseout = function () {
    zixun.style.right = 60 + "px";
}
problem.onmouseover = function () {

    problem.style.right = 120 + "px";
}
problem.onmouseout = function () {
    problem.style.right = 60 + "px";
}
suggition.onmouseover = function () {
    suggition.style.right = 120 + "px";
}
suggition.onmouseout = function () {
    suggition.style.right = 60 + "px";
}
//二级页面
var san = document.querySelectorAll(".san")
var li = document.querySelectorAll(".na li")
var erjiye = document.querySelectorAll(".na .erjiye")
var erji = document.querySelector(".erjiye")
console.log(erjiye)
console.log(li)
li.forEach(function (v, i) {
    v.onmouseover = function () {
        erjiye[i].style.display = "block"
        san[i].style.display = "block"
    }
    v.onmouseout = function () {
        erjiye[i].style.display = "none"
        san[i].style.display = "none"
    }
})
