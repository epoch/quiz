


$('#color_changer').on('click', function(){
  event.preventDefault();
  $color_choice = $('#color').val();
  $('.brush_box').css("background-color", $color_choice)
});

$('#color').keypress(function(e){
  $color_choice = $('#color').val();
  if (e.which === 13) {
    $('.brush_box').css("background-color", $color_choice)
  }  
});
