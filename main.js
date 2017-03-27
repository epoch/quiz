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

function squareDivs(num){
  var $div = $('<div>');
  return $div.addClass("square").text(num);
}
function makeDiv(){
  for(var i=0; i<=20;i++){
    $('body').append(squareDivs(i));
  }
}
makeDiv();

$('div.square').on('click',function(event){
  event.target.style["background-color"] = "green";
});
