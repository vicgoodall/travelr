$(document).ready(function() {
    
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
        })

        $("#suncity").click(function() {
            $(".question-box > p").text("Exploring or relaxing?");
            $(this).text("Relaxing");
            $(".btn1").text("Exploring");
            $(".btn1").attr("id", "suncityexplore");
            $(".btn2").attr("id", "suncityrelax");
        })
            $("#suncityexplore").click(function() {
                
            })

            $("#suncityrelax").click(function() {
                
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
        })

        $("#mountains").click(function() {
            $(".question-box > p").text("Adventuring or relaxing?");
            $(this).text("Relaxing");
            $(".btn1").text("Adventuring");
            $(".btn1").attr("id", "snowmntadventure");
            $(".btn2").attr("id", "snowmntrelax");
        })

    })

    
}

);