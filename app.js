console.log('i want to paint the world');


var $brushBox = $('.brush');
var $setColor = $('.set-color');
var $brushColorInput = $('.color');


var changeBrushBox = function(event) {
  $brushBox.css('background-color', $brushColorInput.val());
}

$setColor.on('click', function(event) {
  event.preventDefault();
  changeBrushBox();
});

$brushColorInput.keypress( function(event) {
  if (event.which == 13) {
    event.preventDefault();
    changeBrushBox();
  }
});
