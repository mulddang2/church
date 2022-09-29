$(document).ready(function () {
    $(".mainvisual").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        dots: true,
        dotsClass: "slick-dots",
        arrows: false,
    });
    $(".mainvisual_tab").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        dots: true,
        dotsClass: "slick-dots",
        arrows: false,
    });
    $(".gallery_all").slick({
        slidesToShow: 3,
        //autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: "12.63vw",
        infinite: true,
        prevArrow: $(".gallery_prev"),
        nextArrow: $(".gallery_next"),
        responsive: [
            {
                breakpoint: 1269,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                },
            },
            {
                breakpoint: 768, //화면 너비가 768이상일 때
                settings: {
                    slidesToShow: 1,
                    centerPadding: "122px",
                    centerMode: true,
                },
            },
        ],
    });
    $(".video_all").slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: "100px",
        draggable: false,
        infinite: true,
        prevArrow: $(".video_prev"),
        nextArrow: $(".video_next"),
        responsive: [
            {
                breakpoint: 1269,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, //화면 너비가 768이상일 때
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    });
    $("ul.news").slick({
        slidesToShow: 3,
        autoplay: true,
        loop: true,
        prevArrow: $(".news_prev"),
        nextArrow: $(".news_next"),
        responsive: [
            // {
            //     breakpoint: 1269,
            //     settings: {
            //         slidesToShow: 2,
            //     }
            // },
            {
                breakpoint: 768, //화면 너비가 768이상일 때
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 360, //화면 너비가 768이상일 때
                settings: {
                    slidesToShow: 1,
                    //centerMode: true,
                    centerPadding: "71px",
                },
            },
        ],
    });

    //Top Button
    $(".move_top").on("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
    var position = 0;

    $(window).scroll(function () {
        if ($(window).scrollTop() <= 0) {
            position = 0;
        } else {
            position = $(window).scrollTop();
        }

        position += vh(13.89);

        $(".quick_menu").stop().animate(
            {
                top: position,
            },
            300
        );
    });

    //Drop Menu
    // var gnb = document.querySelector(".gnb"),
    //     header = document.getElementById("header");

    // var headerDrop = $(".header_drop");
    // gnb.addEventListener("mouseenter", function () {
    //         headerDrop.stop().animate({height: vh(56.94)}, 300);
    // });
    // header.addEventListener("mouseleave", function () {
    //     headerDrop.stop().animate(
    //         {
    //             height: vh(0),
    //         },
    //         300
    //     );
    // });
});

//vh function
function vh(v) {
    var h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    return (v * h) / 100;
}

/* dropMenu */
var header = document.querySelector(".header-wrap"),
    headerTop = document.querySelector(".header-top"),
    headerBottom = document.querySelector(".header-bottom"),
    gnbWrap = document.querySelector(".gnb-wrap"),
    gnbDepth1 = document.querySelector(".gnb-depth1"),
    lis = document.querySelectorAll(".gnb-depth1 > li"),
    as = document.querySelectorAll(".gnb-depth1 > li > a"),
    uls = document.querySelectorAll(".gnb-depth1 > li > ul"),
    gnbDepth2s = document.querySelectorAll(".gnb-depth2"),
    gnbDepth3 = document.querySelector(".gnb-depth3"),
    gnbDepth3li = document.querySelector(".gnb-depth3 li"),
    gnbDepth3lia = document.querySelector(".gnb-depth3 li > a"),
    subMenu = document.querySelectorAll(".gnb-depth2 li"); //offsetHeight 410
    

// (headerHeight = header.offsetHeight),
//     (hasDepthHeight = hasDepth.offsetHeight),
//     (subMenuHeight = subMenu.offsetHeight);

// for (var i = 0; i < subMenu.length; i++) {
//     if (subMenu[i].offsetHeight > subMenuHeight) {
//         subMenuHeight = subMenu[i].offsetHeight;
//     }
// }

/**** 220928  depth3을 headerHeight에 포함시키기 ****/
console.log("gnb-depth3 = " + gnbDepth3.scrollHeight);
console.log("gnb-depth3 li > a = " + gnbDepth3lia.scrollHeight); //30px
console.log("gnb-depth3 li > a = " + gnbDepth3lia.scrollHeight * 5); //150px


let hasDeptha = document.querySelectorAll(".has-depth > a");
console.log(hasDeptha);


for (let i = 0; i < hasDeptha.length; i++)
    hasDeptha[i].addEventListener("click", () => {
        console.log(hasDeptha)
    });
    
    document.addEventListener('click', function handleClick(event) {
        event.target.classList.toggle('on');
        
    });



gnbWrap.addEventListener("mouseenter", function () {
    console.log("mouseenter");

    header.style.height =
        Number(header.scrollHeight) + gnbDepth3lia.scrollHeight * 5 + "px";

    console.log("header.style.height = " + header.style.height); //573px
});

gnbWrap.addEventListener("mouseleave", function () {
    const headerTopHeight =
        headerTop.offsetHeight +
        header.style.marginTop +
        header.style.marginBottom;
    const headerBottomHeight =
        headerBottom.offsetHeight +
        header.style.marginTop +
        header.style.marginBottom;

    header.style.height =
        Number(headerTopHeight) + Number(headerBottomHeight) + "px";

    console.log("header.style.height = " + header.style.height);
});

console.log("header.offsetHeight = " + header.offsetHeight);
console.log("header.scrollHeight = " + header.scrollHeight);
console.log("headerTop = " + headerTop.offsetHeight);
console.log("headerBottom = " + headerBottom.offsetHeight);
console.log("gnbWrap = " + gnbWrap.offsetHeight);
console.log("gnbDepth1 = " + gnbDepth1.offsetHeight);
for (var i = 0; i < lis.length; i++) {
    console.log("li" + i + " = " + lis[i].offsetHeight);
}
for (var i = 0; i < as.length; i++) {
    console.log("a" + i + " = " + as[i].offsetHeight);
}
for (var i = 0; i < uls.length; i++) {
    console.log("ul" + i + " = " + uls[i].offsetHeight);
}
for (var i = 0; i < gnbDepth2s.length; i++) {
    console.log("gnbDepth2" + i + " = " + gnbDepth2s[i].offsetHeight);
}

//sticky header-bottom
window.onscroll = function () {
    myFunction();
};

var navbar = document.querySelector(".header-bottom");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

/* header +버튼 */
let hasDepthArr = document.querySelectorAll(".has-depth > a");
let gnbDepth3Arr = document.querySelectorAll(".gnb-depth3");

$(hasDepthArr).click(function (e) {
    //console.log(e);
    // console.log(e.currentTarget.parentElement.querySelectorAll(".gnb-depth3"));
    // let gnbDepth3Arr = document.querySelectorAll(".gnb-depth3");
    // console.log(gnbDepth3Arr)
    // let gnbDepth3Arr = document.querySelectorAll(".gnb-depth3.on");
    // for (var i = 0; i < gnbDepth3Arr.length; i++) {
    //     gnbDepth3Arr[i].classList.remove("on");
    // }
    // gnbDepth3Arr.forEach((element) => {
    //     element.classList.remove("on");
    // });
});
