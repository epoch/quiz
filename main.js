console.log('hello working')
var arrayColors = [];

$('button').on('click',function(event){
  event.preventDefault();
  var $color = $('input').val();
  $('button').css('background-color',$color);
  $('input').css('background-color',$color);
  colorSwatch($color);
});

$('input').keypress(function(event){
  if(event.which === 13){
    var $color = $('input').val();
    $('button').css('background-color',$color);
    $('input').css('background-color',$color);
    colorSwatch($color);
  }else{
    return;
  }
});

function squareDivs(num){
  var $div = $('<div>');
  return $div.addClass("square");
}
function makeDiv(num){
  for(var i=0; i<=num;i++){
    $('body').append(squareDivs(i));
  }
}

function colorDivs(){
  // debugger;
  $('.color-swatch-1').css('background-color',arrayColors[0]);
  $('.color-swatch-2').css('background-color',arrayColors[1]);
  $('.color-swatch-3').css('background-color',arrayColors[2]);
}

function colorSwatch(color){
  // debugger;
  if (arrayColors.length === 3){
    arrayColors.shift();
    arrayColors.push(color);
    colorDivs();
  }else{
    arrayColors.push(color);
    colorDivs();
  }
}


makeDiv(2000);

$('div.square').hover(function(event){
  var $color = $('input').val()
  event.target.style["background-color"] = $color;
});

$('.color-swatch').on('click', function(event){
  var $color = $(event.target).css('background-color');
  $('input').css('background-color',$color);
  $('input').val($color);
  $('button').css('background-color',$color);
})
