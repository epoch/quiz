console.log('i want to paint the world');


var $brushBox = $('.brush')
var $setColor = $('.set-color')

$setColor.on('click', function(event) {
  event.preventDefault();
  var $brushColorInput = $('.color')
  $brushBox.css('background-color', $brushColorInput.val())
});
