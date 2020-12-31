//Drag & Drop element to the stage funcion

$('.button-img').draggable({
    revert: "invalid",
    opacity: 0.35,
    cursor: "grabbing",
    helper: 'clone',
    appendTo: '#stage',
    zIndex: 100000,
    start: function (event, ui) {
        setTimeout(function () {
            closePanel();
        }, 150);
    }
});

$('#stage').droppable({
    drop: function (event, ui) {
        var newDiv = $(ui.helper).clone(false)
            .removeClass('button-img')
            .css({
                opacity: 1,
                position: 'absolute',
                left: ui.offset.left - 12,
                top: ui.offset.top - 12
            });
        $(this).append(newDiv);
    }
});