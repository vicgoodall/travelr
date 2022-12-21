$(document).ready(function() {
    


function answerQuiz() {
    $("#sunshine").click(function() {
        $(".question-box > p").fadeOut().text("Coastal or city?");
        $(this).text("Coastal");
        $("#snow").text("City");
    })
}

});