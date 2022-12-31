    // Initialize and add the map
    function initMap() {
        // The location of Uluru
        const swansea = { lat:  3.9436, lng: 51.6214 };
        // The map
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 7,
          center: swansea,
        });
        //office marker
        const marker = new google.maps.Marker({
          position: swansea,
          map: map,
        });
      };
      
      window.initMap = initMap;