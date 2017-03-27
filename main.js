console.log('hello working')

$('button').on('click',function(event){
  event.preventDefault();
  var $color = $('input').val();
  $('button').css('background-color',$color);
  $('input').css('background-color',$color);
})
