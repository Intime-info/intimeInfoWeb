
new WOW().init();


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
$(document).ready(function (){
    contactMap();
    $('.collapse').collapse()
    partners_carousel();
});
