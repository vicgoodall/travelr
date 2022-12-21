$(document).ready(function() {
    
    $("#sunshine").click(function() {
        $(".question-box > p").text("Seaside or city?");
        $(this).text("Seaside");
        $("#snow").text("City");
        $(".btn1").attr("id", "seaside");
        $(".btn2").attr("id", "suncity");

    })

    $("#snow").click(function() {
        $(".question-box > p").text("Mountains or city?");
        $(this).text("Mountains");
        $("#sunshine").text("City");
        $(".btn1").attr("id", "snowcity");
        $(".btn2").attr("id", "mountains");

    })

    $("#seaside").click(function() {
        $(".question-box > p").text("Adventuring or partying?");
        $(this).text("Adventuring");
        $("#suncity").text("Partying");
    })
}

);