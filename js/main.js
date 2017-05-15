$(".hbb").click(function () {
   guding()
});
$(".hbbr ul li").click(function () {
    guding();
    
});
function guding() {
    $(".hbb").toggleClass("hbbz");
    $(".hbbl").fadeToggle("slow");
    $(".hbbr").slideToggle("slow");
}
$(".hbbr ul li").hover(function () {
    $(this).toggleClass("lihove");
},function () {
    $(this).toggleClass("lihove");
})
$(".fp-slidesNav ul li").hover(function () {
$(this).css("background","#333333");
    console.log(1)
},function () {

});
