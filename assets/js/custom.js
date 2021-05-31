"use strict";
new WOW().init();

var sticky_navbar= function (){
    var $window = $(window);
    var  $body = $('body');
    var  $intimeInfoMenu = $('.intimeInfo-header');
    $('a.anchor').on('click', function (e) {
        var anchor = $(this);
        var ancAtt = $(anchor.attr('href'));
        $('html, body').stop().animate({
            scrollTop: ancAtt.offset().top
        }, 1000);
        e.preventDefault();
    });

    $window.scroll(function () {
        var currentLink = $(this);
        if ($(currentLink).scrollTop() > 50) {
            $intimeInfoMenu.addClass("sticky");
        } else {
            $intimeInfoMenu.removeClass("sticky");
        }
    });
};

var contactMap = function(){
    if($("#map").length > 0){
        var map;
        var markers = [];

        function initMap(lat = null, lng = null, zoom = 6) {

            if (lat == null){
                lat = $(".changeMap.active").data("lat");
            }
            if (lng == null){
                lng = $(".changeMap.active").data("lng");
            }

            var center = {lat:lat,lng:lng};

            map = new google.maps.Map(document.getElementById('map'), {
                center: center,
                zoom: zoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
            });
        }
        function createMarkerNew(lat, lng) {

            var marker = new google.maps.Marker({
                map: map,
                position: {lat:lat,lng:lng},
                icon: "./assets/img/location.svg",
            });

            markers.push(marker);
        }

        function clearArray(arr) {
            arr = [];
        }

        google.maps.event.addDomListener(window, 'load', initMap(39.9270515, 32.6815276));
        createMarkerNew(40.99194383878771, 29.041598280003814);
        createMarkerNew(41.00279453984937, 29.055000355378148);
        createMarkerNew(39.91421032132179, 32.8088894045927);
        createMarkerNew(40.92033506644141, 29.31415561581492);
    }
};
var partners_carousel= function () {
    if ($(".products_carousel").length > 0)
    {
        $('.products_carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots: true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                },
                1200:{
                    items:5
                }
            }
        })
    }
};
var blog_carousel= function () {
    if ($("#blog_carousel").length > 0)
    {
        $('#blog_carousel').owlCarousel({
            loop: true,
            autoPlay : true,
            stopOnHover : true,
            margin: 20,
            nav: true,
            navText:["<span class=\"intimeinfo intimeinfoleft-arrow\"></span>","<span class=\"intimeinfo intimeinforight-angle\"></span>"],

            responsive:{
                0:{
                    items:1,
                },
                500:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                },
                1200:{
                    items:3,
                }
            }
        });
    }
};
var customer_carousel= function () {
    if ($("#customer_carousel").length > 0)
    {
        $('#customer_carousel').owlCarousel({
            loop: true,
            autoPlay : true,
            stopOnHover : true,
            margin: 20,
            nav: true,
            navText:["<span class=\"intimeinfo intimeinfoleft-arrow\"></span>","<span class=\"intimeinfo intimeinforight-angle\"></span>"],

            responsive:{
                0:{
                    items:1,
                },
                500:{
                    items:1,
                },
                600:{
                    items:1,
                },
                1000:{
                    items:1,
                },
                1200:{
                    items:1,
                }
            }
        });
    }
};
var databg_color = function () {
    if ($("[data-bg]").length > 0){
        $("[data-bg]").each(function (){
            $(this).css("background-color",$(this).data("bg"));
        });
    }
    if ($("[data-color]").length > 0){
        $("[data-color]").each(function (){
            $(this).css("color",$(this).data("color"));
        });
    }
}
$(document).ready(function (){
    contactMap();
    $('.collapse').collapse()
    partners_carousel();
    blog_carousel();
    customer_carousel();
    sticky_navbar();
    databg_color();
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });
});
