$(document).ready(function() {

    $(".tab-btn").click(function() {
        $(".tab-btn").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").removeClass("active");
        $("#" + $(this).data("tab")).addClass("active");
    });

    $(".accordion-header").click(function() {
        $(this).next().slideToggle();
    });

    $("#openPopup").click(() => $("#popup").show());
    $("#closePopup").click(() => $("#popup").hide());

});