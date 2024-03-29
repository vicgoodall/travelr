$(document).ready(function() {

    //reveal quiz when user clicks button
    $("#show-quiz").click(function() {
        $(".quiz").show();
        $(".summary").hide();
        $("#quiz-intro").hide()
        $("#show-quiz").hide();
    });
    
    //trigger quiz questions based on user response
    $("#water").click(function() {
        $(".question-box > p").css({"color": "rgb(40, 5, 62)", "font-size": "16pt", "font-weight": "bold"}).text("Would I rather be lakeside or on the coast?").css({"color": "rgb(40, 5, 62)", "font-size": "16pt", "font-weight": "bold"});
        $(this).text("Lake");
        $(".btn2").text("Coast");
        $(".btn1").attr("id", "lake");
        $(".btn2").attr("id", "coast");

        $("#lake").click(function() {
            $(".question-box > p").text("Do I prefer water sports or canoeing?").css({"color": "rgb(40, 5, 62)", "font-size": "16pt", "font-weight": "bold"});
            $(this).text("Water sports");
            $(".btn2").text("Canoeing");
            $(".btn1").attr("id", "watersports");
            $(".btn2").attr("id", "canoeing");
            let quiz = $(".quiz");
            let waterSportsCard = $(".watersportscard");
            $("#watersports").click(function() {
                waterSportsCard.show();
                quiz.hide();
            });
            //cards track to correspondng cards which user is then shown
            let canoeingCard = $(".canoeingcard");
            $("#canoeing").click(function() {
                canoeingCard.show();
                quiz.hide();
            });
        });
        // alternative quiz path
        $("#coast").click(function() {
            $(".question-box > p").text("Which is better: exploring or surfing?").css({"color": "rgb(40, 5, 62)", "font-size": "16pt", "font-weight": "bold"});
            $(this).text("Surfing");
            $(".btn1").text("Exploring");
            $(".btn1").attr("id", "exploring");
            $(".btn2").attr("id", "surfing");
            let quiz = $(".quiz");
            let seaExploringCard= $(".seaexploringcard");
            $("#exploring").click(function() {
                seaExploringCard.show(); 
                quiz.hide(); 
            });
            let surfingCard = $(".surfingcard");
            $("#surfing").click(function() {
                surfingCard.show();
                quiz.hide();
            });
        });
    });
    //alternative quiz path
    $("#land").click(function() {
        $(".question-box > p").text("Warm weather or cold?").css({"color": "rgb(40, 5, 62)", "font-size": "16pt", "font-weight": "bold"});
        $(this).text("Cold");
        $(".btn1").text("Warm");
        $(".btn1").attr("id", "warm");
        $(".btn2").attr("id", "cold");

        $("#warm").click(function() {
            $(".question-box > p").text("Would I rather be hiking or exploring a new city?").css({"color": "rgb(40, 5, 62)", "font-size": "16pt", "font-weight": "bold"});
            $(this).text("Hiking");
            $(".btn2").text("Explore a city");
            $(".btn1").attr("id", "hiking");
            $(".btn2").attr("id", "city");
            let quiz = $(".quiz");
            let hiking = $(".hikingcard");
            $("#hiking").click(function() {
                hiking.show(); 
                quiz.hide(); 
            });
            let city = $(".citycard");
            $("#city").click(function() {
                city.show();
                quiz.hide();
            });
        });

        $("#cold").click(function() {
            $(".question-box > p").text("Snowsports or something different?").css({"color": "rgb(40, 5, 62)", "font-size": "16pt", "font-weight": "bold"});
            $(this).text("Something else");
            $(".btn1").text("Snowsports");
            $(".btn1").attr("id", "snowsports");
            $(".btn2").attr("id", "snowexplore");
            let quiz = $(".quiz");
            let snowSports = $(".snowsportscard");
            $("#snowsports").click(function() {
                snowSports.show(); 
                quiz.hide(); 
            });
            let snowExplore = $(".snowexplorecard");
            $("#snowexplore").click(function() {
                snowExplore.show();
                quiz.hide();
            });
        });

    });  
    // destination ids are logged as an array
    const destinations = [ "lakeside", "coastal", "kayaking", "sailing", "exploring", "hiking", "snowsports", "surfing", "city" ];
        
    //event listener triggers when user checks a filter box
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((box) => {
        box.checked = false;
        box.addEventListener("change", () => filterCards());
    });

    //function to record all values checked by user and push into new array
    function getCheckValues() {
      var checkboxValues = [];
      checkboxes.forEach((checkbox) => {
          if (checkbox.checked) checkboxValues.push(checkbox.value);
      });
    return checkboxValues;
    }
    //function cross-checks destination array against returned checkbox value array
    //user is shown destination results which match their selected checkboxes
    //couple of StackOverflow posts inspired idea to filter array against array - see readme for reference
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
    }

    //function called when checkboxes are all unchecked again by user so all results display again
    function resetCards() {
        $('.destination').show();
    }

});
    