function leafletFindLocation () {
    var map = L.map('map');

    // toolserver.org hosts OpenStreetMap tile data
    L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);
    
    // setup location events
    map.on('locationfound', function (event) {
        var radius = event.accuracy / 2;

        L.marker(event.latlng).addTo(map)
            .bindPopup("You are within " + radius + " meters from this point").openPopup();

        L.circle(event.latlng, radius).addTo(map);
    });
    map.on('locationerror', function () {
        alert(e.message);
    });
    
    map.locate({setView: true, maxZoom: 16});
}

$(document).ready(function () {
    $("#locateMe").click(function() {
        leafletFindLocation();
        $(this).hide();
    });
});