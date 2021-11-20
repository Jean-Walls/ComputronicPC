$(document).ready(function() {
    console.log("Pagina Cargada!");

    $("#btnLanding").on("click", function() {
        $("#sectionOne").show();
        $("#sectionTwo").hide();
    })

    $("#btnLanding").on("click", function() {
        $("#sectionOne").hide();
        $("#sectionTwo").show();
    })

})