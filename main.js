console.log('hello working')

$('button').on('click',function(event){
  event.preventDefault();
  var $color = $('input').val();
  $('button').css('background-color',$color);
  $('input').css('background-color',$color);
});

$('input').keypress(function(event){
  if(event.which === 13){
    var $color = $('input').val();
    $('button').css('background-color',$color);
    $('input').css('background-color',$color);
  }else{
    return;
  }
});
