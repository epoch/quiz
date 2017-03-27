console.log('quiz');

var count = 0;

function color() {
  if(count === 3){
    count = 0;
  }
  count++;
  if(count === 1){
    var newColor = $('.color').val();
    $('.box').css('backgroundColor', newColor);
    $('.one').css('backgroundColor', newColor);
  } else if (count === 2) {
    var newColor = $('.color').val();
    $('.box').css('backgroundColor', newColor);
    $('.two').css('backgroundColor', newColor);
  } else if (count === 3) {
    var newColor = $('.color').val();
    $('.box').css('backgroundColor', newColor);
    $('.three').css('backgroundColor', newColor);
  }
}


$('.swatch').on('click', function(event){
  squareColor = $(event.target).css('backgroundColor');
  $('.box').css('background-color', squareColor);
})

$('.setColor').on('click', function(event){
  event.preventDefault();
  color();
});

$('.color').keypress(function(event){
  var newColor = $('.color').val();
  if(event.which === 13) {
    color();
    }
  }
);

$(function(){
  $body = $('body');
    for (i = 0; i < 20; i++){
      singleBox = $('<div class="square">');
      $body.append(singleBox);
      $('.square').on('mouseover', function(event){
        var newColor = $('.color').val();
        $target = $(event.target);
        $target.css('backgroundColor', newColor);
        }
      );
    }
});
