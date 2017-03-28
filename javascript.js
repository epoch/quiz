


$('#color_changer').on('click', function(){
  event.preventDefault();
  $color_choice = $('#color').val();
  $('.brush_box').css("background-color", $color_choice)
});
