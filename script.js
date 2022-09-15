/* header Menu */
var header = document.querySelector("header"),
    mainMenuList = document.querySelectorAll(".gnb-depth1 > li"),
    subMenu = document.querySelectorAll(".gnb-depth2"),
    headerHeight = header.offsetHeight,
    subMenuHeight = 0;

console.log(subMenu);

for (var i = 0; i < subMenu.length; i++) {
    if (subMenu[i].offsetHeight > subMenuHeight) {
        subMenuHeight = subMenu[i].offsetHeight;
    }
}
for (var i = 0; i < mainMenuList.length; i++) {
    mainMenuList[i].addEventListener("mouseover", function () {
        header.style.height = headerHeight + subMenuHeight +  10 +"px";
    });
    mainMenuList[i].addEventListener("mouseout", function () {
        header.style.height = headerHeight + "px";
    });
}



/*========================토글기능====================
1. dropmenu의 +버튼누르면 gnb-depth3가 display:none 되고,
2. ::after 가 display:block 된다.
*/
//3뎁스
$('.gnb-depth2 .has-depth > a').not(".on").attr("aria-expanded","false");
$('.gnb-depth2 .has-depth > a').on('click',function(){
    $(this).toggleClass('on');
    $(this).closest('.has-depth').find('.gnb-depth3').slideToggle();
//3뎁스 메뉴확장 접근성
if($(this).hasClass('on')){
        $(this).attr("aria-expanded","true");
    }else{
        $(this).attr("aria-expanded","false");
    }
});