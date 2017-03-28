


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




$('.body').ready(function () {
    var $newDiv = $('<div class="square"/>');
    for (var i = 0; i <= 20; i++) {
        $newDiv = $('<div class="ball" />').text(i);
        $('body').append($newDiv);
    }
});
