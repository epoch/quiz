$(function() {
  console.log('main.js connected');

  var $body = $('body');
  var $brushBox = $('.brush-box');
  var $colorInput = $('input');
  var $swatches = $('.swatch');
  var recentColors = [];

  var setColorOf = function($element, color) {
    $element.css('background', color);
  };

  var setBrushBoxColor = function() {
    var color = $colorInput.val();

    setColorOf($brushBox, color);

    if (recentColors.includes(color)) {
      recentColors.splice(recentColors.indexOf(color), 1);
    }

    recentColors.unshift(color);

    if (recentColors.length > 3) {
      recentColors.pop();
    }

    updateSwatches();
  };

  var updateSwatches = function() {
    for (var i = 0; i < recentColors.length; i++) {
      $swatches.eq(i).css('background', recentColors[i]);
    }
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

  $body.on('mouseover', '.square', function(e) {
    setColorOf($(e.target), $brushBox.css('background'));
  });

  $swatches.click(function(e) {
    setColorOf($brushBox, $(e.target).css('background'));
  });
});
