


$('#color_changer').on('click', function(){
  $color_choice = $('#color').val();
  $('.brush_box').css("background-color", $color_choice)
});
