console.log("JS WORKS");


$('.set-color').on('click',function(event){
   event.preventDefault();
   var $color = $('input').val();
   $('.brush-box').css('background-color',$color);
});


function squareDivs(){
  var $div = $('<div>');
  return $div.addClass("square");
}

function makeDiv(){
  for(var i=0; i<=19; i++){
  $(squareDivs()).appendTo('body');
  }
}

makeDiv();
