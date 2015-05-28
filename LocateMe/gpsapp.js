document.addEventListener("DOMContentLoaded", function(event) {
    var saveButton = document.querySelector('#save');
    saveButton.addEventListener('click', function () {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                store('Latitude: ' + position.coords.latitude + '<br/> Longitude: ' + position.coords.longitude);
            }, function (err) {
                console.error('Failed to get user location', err);
                store('Failed to get user location: <i>' + err.message + '</i>');
            }, {"timeout":5000});
        } else {
            store('You don\'t have GPS');
        }
    });
});

function store(str) {
    var coordinates = document.querySelector('#coordinates');
    coordinates.innerHTML = str;
    coordinates.classList.remove('no-items');  
}