    // Initialize and add the map
    function initMap() {
        //office location
        const swansea = { lat:  51.621441, lng: -3.943646 };
        // map
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: swansea,
        });
        //office marker
        const marker = new google.maps.Marker({
          position: swansea,
          map: map,
        });
      };
      
      window.initMap = initMap;