$(document).ready(function() {

    // Initialize and add the map
    function initMap() {
    // The location of Uluru
    const swansea = { lat: 51.6214, lng: 3.9436 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: swansea,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: swansea,
      map: map,
    });
  }
  
  window.initMap = initMap;


    $("#show-quiz").click(function() {
        $(".quiz").show();
        $(".summary").hide();
        $("#quiz-intro").hide();
    })
    
    $("#water").click(function() {
        $(".question-box > p").text("I'd rather be lakeside or on the coast?");
        $(this).text("Lake");
        $(".btn2").text("Coast");
        $(".btn1").attr("id", "lake");
        $(".btn2").attr("id", "coast");

        $("#lake").click(function() {
            $(".question-box > p").text("Do I prefer water sports or canoeing?");
            $(this).text("Water sports");
            $(".btn2").text("Canoeing");
            $(".btn1").attr("id", "watersports");
            $(".btn2").attr("id", "canoeing");
            let quiz = $(".quiz");
            let waterSportsCard = $(".watersportscard");
            $("#watersports").click(function() {
                waterSportsCard.show();
                quiz.hide();
            })
            let canoeingCard = $(".canoeingcard");
            $("#canoeing").click(function() {
                canoeingCard.show();
                quiz.hide();
            })
        })

        $("#coast").click(function() {
            $(".question-box > p").text("Which is better: exploring or surfing?");
            $(this).text("Surfing");
            $(".btn1").text("Exploring");
            $(".btn1").attr("id", "exploring");
            $(".btn2").attr("id", "surfing");
            let quiz = $(".quiz");
            let seaExploringCard= $(".seaexploringcard");
            $("#exploring").click(function() {
                seaExploringCard.show(); 
                quiz.hide(); 
            })
            let surfingCard = $(".surfingCard");
            $("#surfing").click(function() {
                surfingCard.show();
                quiz.hide();
            })
        })
    })

    $("#land").click(function() {
        $(".question-box > p").text("Warm weather or cold?");
        $(this).text("Cold");
        $(".btn1").text("Warm");
        $(".btn1").attr("id", "warm");
        $(".btn2").attr("id", "cold");

        $("#warm").click(function() {
            $(".question-box > p").text("Would I rather be hiking or exploring a new city?");
            $(this).text("Hiking");
            $(".btn2").text("Explore a city");
            $(".btn1").attr("id", "hiking");
            $(".btn2").attr("id", "city");
            let quiz = $(".quiz");
            let hiking = $(".hikingcard");
            $("#hiking").click(function() {
                hiking.show(); 
                quiz.hide(); 
            })
            let city = $(".citycard");
            $("#city").click(function() {
                city.show();
                quiz.hide();
            })
        })

        $("#cold").click(function() {
            $(".question-box > p").text("Snowsports or something different?");
            $(this).text("Something else");
            $(".btn1").text("Snowsports");
            $(".btn1").attr("id", "snowsports");
            $(".btn2").attr("id", "snowexplore");
            let quiz = $(".quiz");
            let snowSports = $(".snowsportscard");
            $("#snowsports").click(function() {
                snowSports.show(); 
                quiz.hide(); 
            })
            let snowExplore = $(".snowexplorecard");
            $("#snowexplore").click(function() {
                snowExplore.show();
                quiz.hide();
            });
        });

    });  
    
    const destinations = [ "lakeside", "coastal", "kayaking", "sailing", "exploring", "hiking", "snowsports", "surfing", "city" ];
        

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((box) => {
        box.checked = false;
        box.addEventListener("change", () => filterCards());
    });

    function getCheckValues() {
    
    var checkboxValues = [];
    checkboxes.forEach((checkbox) => {
          if (checkbox.checked) checkboxValues.push(checkbox.value);
    });
    return checkboxValues;
   
    };

    function filterCards() {

        if ($(".filter input:checkbox:checked").length > 0)
        {
            $('.destination').hide();
            let checkValues = getCheckValues();
            let matchy = destinations.filter(itm => checkValues.includes(itm));
            matchy.forEach((itm) => {
                $('div.' + itm).show();
            }); 
        }
        else
        {
           resetCards();
        }
    };

    function resetCards() {
        $('.destination').show();
    }

    

});
    