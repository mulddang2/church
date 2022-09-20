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
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: "100px",
        infinite: true,
        prevArrow: $(".gallery_prev"),
        nextArrow: $(".gallery_next"),
        responsive: [
    
            {
                breakpoint: 1269,
                settings: {
                    slidesToShow: 2,
                }
            },
            { 
                breakpoint: 768, //화면 너비가 768이상일 때
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ] 
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
                }
            },
            { 
                breakpoint: 768, //화면 너비가 768이상일 때
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ] 
            
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
                    centerMode: false
                }
            }
        ] 
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
    var gnb = document.querySelector(".gnb"),
        header = document.getElementById("header");
    
    var headerDrop = $(".header_drop");
    gnb.addEventListener("mouseenter", function () {
            headerDrop.stop().animate({height: vh(56.94)}, 300);
    });
    header.addEventListener("mouseleave", function () {
        headerDrop.stop().animate(
            {
                height: vh(0),
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