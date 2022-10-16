$(document).ready(function () {
    $(".mainvisual").slick({
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        dots: true,
        dotsClass: "slick-dots",
        arrows: false,
    });
    $(".mainvisual_m").slick({
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

});

//vh function
function vh(v) {
    var h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    return (v * h) / 100;
}

var navbar = document.querySelector(".header-bottom");
var sticky = navbar.offsetTop;


//sticky header-bottom
window.onscroll = function () {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};


/* header +버튼 */
let hasDepths = document.querySelectorAll(".has-depth");
let hasDepthAs = document.querySelectorAll(".has-depth > a");
let gnbDepth3Arr = document.querySelectorAll(".gnb-depth3");


for (let i = 0; i < hasDepthAs.length; i++) {
    hasDepthAs[i].addEventListener("click", function (event) {
        let hasDepthsClassList = event.target.parentElement.classList;
        let hasActiveClass = hasDepthsClassList.contains("active")
        for (let j = 0; j < hasDepths.length; j++) {
            hasDepths[j].classList.remove("active");
        }
        
        if (hasActiveClass === false) {
            hasDepthsClassList.add("active");
        } else {
            hasDepthsClassList.remove("active");
        }
        event.preventDefault()
    })

}

let gnbDepth1 = document.querySelector('.gnb-depth1')
gnbDepth1.addEventListener("mouseenter", function () {
    navbar.classList.add('on');
});
gnbDepth1.addEventListener("mouseleave", function () {
    navbar.classList.remove('on');
});