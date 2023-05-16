function iniciarMap() {
    var coordenadas = [
        {lat: 20.58957, lng: -100.41097},
        {lat: 20.58967, lng: -100.40060},
        {lat: 20.69143, lng: -100.44591},
        {lat: 20.56916, lng: -100.41057}
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
