//Demo Indicator
$(document).click(function () {
    $(".indicator").fadeIn();
    setTimeout(function () {
        $(".indicator").fadeOut();
    }, 500);
});

//Opening Add Panel
$('.leftbar-item-add').click(function () {
    event.stopPropagation();
    $(".Add-Toolbar-Active").addClass("opened");
    $(".add-panel").addClass("opened");
});

//Closing Add Panel
function closePanel() {
    $(".Add-Toolbar-Active").removeClass("opened");
    $(".add-panel").removeClass("opened");
    $(".category-item").removeClass("active");
    $("li").removeClass("active");
    $(".content-empty").show();
    $(".content-element").hide();
}

$('.close').click(function () {
    closePanel();
});

$('.Add-Toolbar-Active').click(function () {
    closePanel();
});

//Selecting Category
$(document).on('click', ".sub-categories-list li:not(.active)", function (event) {
    $(".category-item").removeClass("active");
    $("li").removeClass("active");
    $(this).parents(".category-item").addClass("active");
    $(this).addClass("active");
    $(".content-empty").hide();
    $(".content-element").show();
});

//Deselecting Category
$(document).on('click', ".sub-categories-list li.active", function (event) {
    $(".category-item").removeClass("active");
    $("li").removeClass("active");
    $(".content-empty").show();
    $(".content-element").hide();
});