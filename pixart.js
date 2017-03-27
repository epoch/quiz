console.log('pixart');


$('.setColor').on('click', function(){
  $colorValue = $('input').val();
  $('.brush').css("background-color" , $colorValue);

})
