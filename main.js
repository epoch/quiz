console.log('main.js connected');

var setBrushBoxColor = function() {
  var color = $('input').val();
  $('.brush-box').css('background', color);
}

$('button').click(function() {
  setBrushBoxColor();
});
