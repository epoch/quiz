// console.log('Hello');

var brushBox = $('.brush');
var colorInput = $('.input-color');
var setColorBtn = $('.set-color');

function setBackgroundColor(){
  backgroundColor = colorInput.val().toLowerCase();
  brushBox.css("background", backgroundColor);
}

setColorBtn.on('click', setBackgroundColor);

// On key up for 'Enter'
colorInput.on('keyup', function(e) {
 var key = e.which;
 if (key == 13) {
   setBackgroundColor();
  }
});
