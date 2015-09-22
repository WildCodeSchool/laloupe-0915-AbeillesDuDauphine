(function(){
        var map; var m; var mu; var md;
        /* Script de map */
        function initMap(){
                if (map) map.remove();
                map = L.map('map').setView([45.180, 5.759], 12);
                var marker = L.marker([45.163, 5.759]).addTo(map);

                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: 'erwanhaquet.cieg692wc0004t0khcy010519',
                accessToken: 'pk.eyJ1IjoiZXJ3YW5oYXF1ZXQiLCJhIjoiY2llZzY5NHVkMDAwMnN6bHpsaTBkeTBlbiJ9.UkUMJjUozaMu5J6R9ywhow'
                }).addTo(map);
        }

        initMap();
        /* Script de modification du conteneur */
        document.getElementById("map-open").onclick = function() {mapOpener()};
        function mapOpener(){
                var m = document.getElementById("map");
                var mu = document.getElementById("map-open");
                var md = document.getElementById("map-close"); 
                var adjustHeight = $(window).height()-240;
                m.style.height = adjustHeight + 'px';
                m.style.opacity = "1";
                mu.style.display = "none";
                md.style.display = "inline-block";
                initMap();
        }

        document.getElementById("map-close").onclick = function() {mapCloser()};
        function mapCloser(){
                var m = document.getElementById("map");
                var mu = document.getElementById("map-open");
                var md = document.getElementById("map-close"); 
                m.style.height = "120px";
                m.style.opacity = "0.2";
                mu.style.display = "inline-block";
                md.style.display = "none";
                initMap();
        }


})();