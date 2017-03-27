console.log('quiz');

$('.setColor').on('click', function(event){
  event.preventDefault();
  var newColor = $('.color').val();
  $('.box').css('backgroundColor', newColor);
}
);

$('.color').keypress(function(event){
  var newColor = $('.color').val();
  if(event.which === 13) {
    $('.box').css('backgroundColor', newColor);
    }
  }
);
