$(function() {
  console.log('main.js connected');

  var $body = $('body');
  var $brushBox = $('.brush-box')
  var $colorInput = $('input');

  var setColorOf = function($element, color) {
    $element.css('background', color);
  };

  var setBrushBoxColor = function() {
    setColorOf($brushBox, $colorInput.val());
  };

  $('button').click(function() {
    setBrushBoxColor();
  });

  $('input').keydown(function(e) {
    if (e.which === 13) {
      setBrushBoxColor();
    }
  });

  for (var i = 0; i < 20; i++) {
    $body.append($('<div>').addClass('square'));
  }

  $body.on('click', '.square', function(e) {
    setColorOf($(e.target), $colorInput.val());
  });
});
