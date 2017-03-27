$('.colourChange').click(function(){
  changeBrushColour()

});

$('.colourType' ).keypress(function() {
  changeBrushColour()
});

var changeBrushColour = function(){
  var colour = $('.colourType').val();
  $(".brush").css('background-color', colour)

};
