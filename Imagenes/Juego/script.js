function iniciarMap(){
    var coord = {lat:20.617465922617136 ,lng:-100.38073680231253};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}