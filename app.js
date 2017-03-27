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

for (var i = 0; i < 20; i++) {
  $('<div>').addClass('square').appendTo('body')
}
