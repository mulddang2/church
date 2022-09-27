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
    gnbWrap = document.querySelectorAll(".gnb-depth1 > li"), //50
    subMenu = document.querySelectorAll(".gnb-depth2 li"), //offsetHeight 410
    hasDepth = document.querySelectorAll(".has-depth"); //176

    headerHeight = header.offsetHeight,
    hasDepthHeight = hasDepth.offsetHeight,
    subMenuHeight = subMenu.offsetHeight

    for(var i = 0; i < subMenu.length; i++) {
        if(subMenu[i].offsetHeight > subMenuHeight){
            subMenuHeight = subMenu[i].offsetHeight;
        }
    }

    for(var i = 0; i < gnbWrap.length; i++) {
        gnbWrap[i].addEventListener('mouseover', function(){
            header.style.height = headerHeight + subMenuHeight + 'px';
        })
        gnbWrap[i].addEventListener('mouseout', function(){
            header.style.height = headerHeight + 'px';
        })
    }
    //console.log(gnbWrap)
    //console.log(headerHeight) 140
    console.log(subMenu)
        















/* header +버튼 */
let hasDepthArr = document.querySelectorAll(".has-depth > a");
let gnbDepth3Arr = document.querySelectorAll(".gnb-depth3");

$(hasDepthArr).click(function (e) {
    console.log(e);
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
