$(document).ready(function(){
    //navbar fixed
    let heightNav = $("nav").outerHeight();
    $(window).on("scroll",function(){
        let scrollTop = $(window).scrollTop();
        if (scrollTop >= heightNav){
            $("nav").addClass("fixed-top");
        }else{
            $("nav").removeClass("fixed-top");
        }
    });
    //height home section
    $(".home-section").css({height : `calc(100vh - ${heightNav}px)`});
    $(".home-parent").css({height : `calc(100vh - ${heightNav}px)`});
});