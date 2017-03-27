// console.log('Hello');

var brushBox = $('.brush');
var colorInput = $('.input-color');
var setColorBtn = $('.set-color');

function setBackgroundColor(){
  backgroundColor = colorInput.val().toLowerCase();
  brushBox.css("background", backgroundColor);
}

// Click to change set background-color = input text
setColorBtn.on('click', setBackgroundColor);

// On key up for 'Enter'
colorInput.on('keyup', function(e) {
 var key = e.which;
 if (key == 13) {
   setBackgroundColor();
  }
});


//// Create 20 square boxes
function addDiv(){
  var square = $( '<div>', { 'class': 'square'} );
  var squareNumber = $( '<h2>', { 'class': 'square-number'} );

  squareNumber.html( i );
  square.append(squareNumber);
  $('body').append(square);
  // console.log(i);
}

for (var i = 1; i <= 20; i++) {
  addDiv();
}


function getSquare(event){
  $square = $(event.target);
  backgroundColor = colorInput.val().toLowerCase();
  if ( $square.is( "div" ) ) {
    $square.css( 'background-color', backgroundColor);
  }
}

$('body').on('click', 'div', getSquare );
