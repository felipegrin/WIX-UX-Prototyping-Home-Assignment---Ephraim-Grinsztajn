//Search/Filter function

$("#search").on("keyup", function () {
    if ($("#search").val() == "") {
        $(".resetFilters").hide();
        $(".category-item").show();
        $(".sub-categories-list ul li").show();
        $(".category-item").removeClass("active");
        $(".sub-categories-list span").show();
    } else {
        $(".category-item").addClass("active");
        $(".resetFilters").show();
        var value = $(this).val().toLowerCase();
        $(".category-item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        $(".sub-categories-list ul li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        $(".sub-categories-list span").hide();
    }
});

$(".resetFilters").click(function () {
    $(".resetFilters").hide();
    $('#search').val("");
    $(".category-item").show();
    $(".sub-categories-list ul li").show();
    $(".category-item").removeClass("active");
    $(".sub-categories-list span").show();
});