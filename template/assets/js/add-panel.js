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

    //Reset panel size
    $(".add-panel").css({"width": "600px", "height": "70%"});

    //Reset filters
    $('#search').val("");
    $(".category-item").show();
    $(".sub-categories-list ul li").show();
    $(".sub-categories-list span").show();
    $(".category-item").removeClass("active");
    $(".resetFilters").hide();
}

$('.close').click(function () {
    closePanel();
});

$('.Add-Toolbar-Active').click(function () {
    closePanel();
});

//Selecting Category
$(document).on('click', ".category-item:not(.active)", function () {
    $(this).addClass("active");
});

$(document).on('click', ".category-item.active > .category-name", function () {
    $(".category-item").removeClass("active");
    $("li").removeClass("active");
    $(".content-empty").show();
    $(".content-element").hide();
});

$(document).on('click', ".sub-categories-list li:not(.active)", function () {
    $(".category-item").removeClass("active");
    $("li").removeClass("active");
    $(this).parents(".category-item").addClass("active");
    $(this).addClass("active");
    $(".content-empty").hide();
    $(".content-element").show();
});

//Deselecting Category
$(document).on('click', ".sub-categories-list li.active", function () {
    $(".category-item").removeClass("active");
    $("li").removeClass("active");
    $(".content-empty").show();
    $(".content-element").hide();
});