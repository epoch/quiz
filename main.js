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

function squareDivs(){
  var $div = $('<div>');
  return $div.addClass("square");
}
function makeDiv(){
  for(var i=0; i<=20;i++){
    $('body').append(squareDivs());
  }
}
makeDiv();
