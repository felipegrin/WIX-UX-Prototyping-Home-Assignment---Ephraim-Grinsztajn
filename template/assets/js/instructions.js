$(document).keydown(function(e) {
     if (e.keyCode == 16){
       // user has pressed shift
           $(".indicator").fadeIn();
   }
});

$(document).keyup(function(e) {
     if (e.keyCode == 16){
       // user has stopped pressing shift
           $(".indicator").fadeOut();
   }
});

$('#start').click(function() {
    $('.instructions').fadeOut();
});