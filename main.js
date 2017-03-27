console.log('quiz');

$('.setColor').on('click', function(event){
  event.preventDefault();
  var newColor = $('.color').val();
  $('.box').css('backgroundColor', newColor);
}
);
