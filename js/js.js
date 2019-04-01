
$(".page3_Skill").find("a").click(function () {
    $(this).parent().find("p").slideToggle();
});
$("#slider").easySlider( {
    slideSpeed: 500,
    paginationSpacing: "12px",
    paginationDiameter: "15px",
    paginationPositionFromBottom: "30px",
    slidesClass: ".slides",
    controlsClass: ".controls",
    paginationClass: ".pagination"
});