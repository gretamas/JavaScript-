$(document).ready(function() {
    $(".cocktails li").hover(
        function() {
            const cocktail = $(this).data("cocktail");
            $("#" + cocktail + "-details").addClass("active");
        },
        function() {
            const cocktail = $(this).data("cocktail");
            $("#" + cocktail + "-details").removeClass("active");
        }
    );
});





