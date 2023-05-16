function iniciarMap() {
    var coordenadas = [
        {lat: 20.57367, lng: -100.35952},
        {lat: 20.67501, lng: -100.43784},
        {lat: 20.58403, lng: -100.38975},
        {lat: 20.59321, lng: -100.37361}
        // Agrega más conjuntos de coordenadas aquí
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: coordenadas[0] // Establece el primer conjunto de coordenadas como centro del mapa
    });

    coordenadas.forEach(function(coord) {
        var marker = new google.maps.Marker({
            position: coord,
            map: map
        });
    });
}
