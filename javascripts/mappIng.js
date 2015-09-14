        /* Script de map */
        var map = L.map('map').setView([45.180, 5.759], 12);
        var marker = L.marker([45.163, 5.759]).addTo(map);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'erwanhaquet.cieg692wc0004t0khcy010519',
        accessToken: 'pk.eyJ1IjoiZXJ3YW5oYXF1ZXQiLCJhIjoiY2llZzY5NHVkMDAwMnN6bHpsaTBkeTBlbiJ9.UkUMJjUozaMu5J6R9ywhow'
        }).addTo(map);


        /* Script de modification du conteneur */
        document.getElementById("map-opener").onclick = function() {myFunction()};

        function myFunction() {
        var map = document.getElementById("map");
        map.style.height = "460px";
        map.style.opacity = "1";
        map.style.marginBottom = "0px";
        }