console.log('quiz');


var count = 0;
var brushColor;

function color() {
  if(count === 3){
    count = 0;
  }
  count++;
  var newColor = $('.color').val();
  if(count === 1){
    $('.one').css('backgroundColor', newColor);
  } else if (count === 2) {
    var newColor = $('.color').val();
    $('.two').css('backgroundColor', newColor);
  } else if (count === 3) {
    var newColor = $('.color').val();
    $('.three').css('backgroundColor', newColor);
  }
}


$('.swatch').on('click', function(event){
  brushColor = $(event.target).css('backgroundColor');
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
        var newColor = brushColor;
        $target = $(event.target);
        $target.css('backgroundColor', brushColor);
        }
      );
    }
});
