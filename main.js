$(function() {
  console.log('main.js connected');

  var setBrushBoxColor = function() {
    var color = $('input').val();
    $('.brush-box').css('background', color);
  };

  $('button').click(function() {
    setBrushBoxColor();
  });

  $('input').keydown(function(e) {
    if (e.which === 13) {
      setBrushBoxColor();
    }
  });

  var $body = $('body');

  for (var i = 0; i < 20; i++) {
    $body.append($('<div>').addClass('square'));
  }
});
