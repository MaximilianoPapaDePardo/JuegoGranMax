function iniciarMap() {
    var coordenadas = [
        {lat: 20.67516, lng: -100.43749},
        {lat: 20.67508, lng: -100.43361},
       
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
