;(function($){
    $(function(){
        $('.slick2').slick ({});
        $('.slick').slick ({
            dots: true,
            lazyLoad: 'ondemand',
            fade: true,
            speed: 500,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
        $('.slider-for').slick ({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
        });
        $('.header__menu__search button').click(function () {
            $('.header__menu__search input').toggle(500)
        });
        $('.header__menu--mini').on('click', function () {
            $('.menu').slideToggle();
        });
        new WOW().init();

        let regex = {
            name: /^[a-zA-Z]{2,30}$/,
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
        function validateField(val, fieldName) {
            let pattern = regex[fieldName];
            return pattern.test(val)
        }
        $('.form').on('.btn', function (e) {
            e.preventDefault();
            e.stopPropagation();
            let name = $(".form__name"),
                email = $(".form__email"),
                data = {
                    name: name.val(),
                    email: email.val()
            }
        });
    })
}) (jQuery)
;(function(){

}) ()

const iw = document.getElementById('iw').outerHTML
function initMap() {
    const pos = {lat: 40.6761135, lng: -73.8135905}
    const pos2 = {lat: 40.6731135, lng: -73.813905}
    const image = {url: 'img/marker.png'}
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: pos,
        disableDefaultUI: true,
        styles:
            [{"elementType": "geometry", "stylers": [
                    {"color": "#f5f5f5"}
                ]},
                {"elementType": "labels.icon", "stylers": [
                        {"visibility": "off"}
                    ]},
                {"elementType": "labels.text.fill", "stylers": [
                        {"color": "#616161"}
                    ]},
                {"elementType": "labels.text.stroke", "stylers": [
                        {"color": "#f5f5f5"}
                    ]},
                {"featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill", "stylers": [
                        {"color": "#bdbdbd"}
                    ]},
                {"featureType": "poi", "elementType": "geometry",
                    "stylers": [{"color": "#eeeeee"}
                    ]},
                {"featureType": "poi", "elementType": "labels.text.fill",
                    "stylers": [{"color": "#757575"}
                    ]},
                {"featureType": "poi.park", "elementType": "geometry",
                    "stylers": [{"color": "#e5e5e5"}
                    ]},
                {"featureType": "poi.park", "elementType": "labels.text.fill",
                    "stylers": [{"color": "#9e9e9e"}
                    ]},
                {"featureType": "road", "elementType": "geometry",
                    "stylers": [{"color": "#ffffff"}
                    ]},
                {"featureType": "road.arterial", "elementType": "labels.text.fill",
                    "stylers": [{"color": "#757575"}
                    ]},
                {"featureType": "road.highway", "elementType": "geometry",
                    "stylers": [{"color": "#dadada"}
                    ]},
                {"featureType": "road.highway", "elementType": "labels.text.fill",
                    "stylers": [{"color": "#616161"}
                    ]},
                {"featureType": "road.local", "elementType": "labels.text.fill",
                    "stylers": [{"color": "#9e9e9e"}
                    ]},
                {"featureType": "transit.line", "elementType": "geometry",
                    "stylers": [{"color": "#e5e5e5"}
                    ]},
                {"featureType": "transit.station", "elementType": "geometry",
                    "stylers": [{"color": "#eeeeee"}
                    ]},
                {"featureType": "water", "elementType": "geometry",
                    "stylers": [{"color": "#c9c9c9"}
                    ]},
                {"featureType": "water", "elementType": "labels.text.fill",
                    "stylers": [{"color": "#9e9e9e"}
                    ]}
            ]
    });
    const m1 = new google.maps.Marker({
        position: pos2, map,
        icon: image
    });
    const infoWindow = new google.maps.InfoWindow({
        content: iw,
    });
    m1.addListener("click", () => {
        infoWindow.open(map, m1);
    });
}