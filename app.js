console.log('i want to paint the world');


var $brushBox = $('.brush');
var $setColor = $('.set-color');
var $brushColorInput = $('.color');
var $body = $('body')


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

for (var i = 0; i < 20; i++) {
  $square = $('<div>');
  $square.addClass('square');
  $body.append($square);
}




//
