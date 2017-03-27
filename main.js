console.log('connect to html');

colorArr= [];

function storeColor(){
  if (colorArr.length == 3){
    colorArr.splice(0, 1);
    colorArr.push($('.boxColor').val());
  } else{
    colorArr.push($('.boxColor').val());
  }
}

$('.colorChange').click(function(){
  $('.brush').css('backgroundColor', $('.boxColor').val());
  storeColor()
})

$('.boxColor').keypress(function(){
  $('.brush').css('backgroundColor', $('.boxColor').val());

})

for (var i = 0; i < 20; i++){
  var $box = $('<div>').attr("class", "square")
  $("body").append($box)
}

// $('.square').click(function(){
//   $(this).css('backgroundColor', 'green');
// })

// $('.square').click(function(){
//   $(this).css('backgroundColor', $('.boxColor').val());
// })

$('.square').hover(function(){
  $(this).css('backgroundColor', $('.boxColor').val());

})

$('.square').css({
  'width': '10px',
  'height': '10px',
  'margin': '0'
})

for (var i = 0; i < 3; i++){
  var $box = $('<div>').attr({
    "class": "squareStoredColor" + i,
    "value": i
  })
  var $input = $('<input>').attr({
    "value": i,
    "type": "hidden",
    "class": "colorInput"
   })
  $("body").append($box);
  $($box).append($input)
}

$('.squareStoredColor0').click(function(){
  $(this).css('backgroundColor', colorArr[0]);
})

$('.squareStoredColor1').click(function(){
  $(this).css('backgroundColor', colorArr[1]);
})

$('.squareStoredColor2').click(function(){
  $(this).css('backgroundColor', colorArr[2]);
})
