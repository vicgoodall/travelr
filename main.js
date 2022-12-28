$(document).ready(function() {

    $("#show-quiz").click(function() {
        $(".quiz").show();
    })
    
    $("#sunshine").click(function() {
        $(".question-box > p").text("Seaside or city?");
        $(this).text("Seaside");
        $(".btn2").text("City");
        $(".btn1").attr("id", "seaside");
        $(".btn2").attr("id", "suncity");

        $("#seaside").click(function() {
            $(".question-box > p").text("Adventuring or partying?");
            $(this).text("Adventuring");
            $(".btn2").text("Partying");
            $(".btn1").attr("id", "sunseaadventure");
            $(".btn2").attr("id", "sunbeachparty");
            let quiz = $(".quiz");
            let sunSeaAdvCard = $("#sunseaadventurecard");
            $("#sunseaadventure").click(function() {
                sunSeaAdvCard.show();
                quiz.hide();
            })
            let sunBeaParCard = $("#sunbeachpartycard");
            $("#sunbeachparty").click(function() {
                sunBeaParCard.show();
                quiz.hide();
            })
        })

        $("#suncity").click(function() {
            $(".question-box > p").text("Exploring or relaxing?");
            $(this).text("Relaxing");
            $(".btn1").text("Exploring");
            $(".btn1").attr("id", "suncityexplore");
            $(".btn2").attr("id", "suncityrelax");
            let quiz = $(".quiz");
            let sunCityExpCard = $("#suncityexplorecard");
            $("#suncityexplore").click(function() {
                sunCityExpCard.show(); 
                quiz.hide(); 
            })
            let sunCityRelCard = $("#suncityrelaxcard");
            $("#suncityrelax").click(function() {
                sunCityRelCard.show();
                quiz.hide();
            })
        })
    })

    $("#snow").click(function() {
        $(".question-box > p").text("Mountains or city?");
        $(this).text("Mountains");
        $(".btn1").text("City");
        $(".btn1").attr("id", "snowcity");
        $(".btn2").attr("id", "mountains");

        $("#snowcity").click(function() {
            $(".question-box > p").text("Exploring or relaxing?");
            $(this).text("Exploring");
            $(".btn2").text("Relaxing");
            $(".btn1").attr("id", "snowcityexploring");
            $(".btn2").attr("id", "snowcityrelaxing");
            let quiz = $(".quiz");
            let snowCityExpCard = $("#snowcityexploringcard");
            $("#snowcityexploring").click(function() {
                snowCityExpCard.show(); 
                quiz.hide(); 
            })
            let snowCityRelCard = $("#snowcityrelaxingcard");
            $("#suncityrelaxing").click(function() {
                snowCityRelCard.show();
                quiz.hide();
            })
        })

        $("#mountains").click(function() {
            $(".question-box > p").text("Adventuring or relaxing?");
            $(this).text("Relaxing");
            $(".btn1").text("Adventuring");
            $(".btn1").attr("id", "snowmntadventure");
            $(".btn2").attr("id", "snowmntrelax");
            let quiz = $(".quiz");
            let snowMtAdvCard = $("#snowmntadventurecard");
            $("#snowcityexploring").click(function() {
                snowMtAdvCard.show(); 
                quiz.hide(); 
            })
            let snowMtRelCard = $("#snowmntrelaxcard");
            $("#snowmntrelax").click(function() {
                snowMtRelCard.show();
                quiz.hide();
            })
        })

    })

    
}

);