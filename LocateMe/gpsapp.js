document.addEventListener("DOMContentLoaded", function(event) {
    var saveButton = document.querySelector('#save');
    saveButton.addEventListener('click', function () {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
            console.log('geolocation in navigator\n' + position.coords.latitude + ', ' +
                    position.coords.longitude);
                store(position.coords.latitude + ', ' +
                    position.coords.longitude);
            }, function (err) {
                console.error('Failed to get user location', err);
                store('Could not get your location');
            }, {"timeout":5000});
        } else {
            store('You don\'t have GPS');
        }
    });
});

function store(location) {
    var coordinates = document.querySelector('#coordinates');
    console.log(location);
    coordinates.textContent = location;
    coordinates.classList.remove('no-items');  
}