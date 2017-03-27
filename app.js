var swatch = []

$('.colourChange').click(function(){
   event.preventDefault();
  changeBrushColour()

});

$('.colourType' ).keydown(function(e) {
  if (e.keyCode == 13) {
    changeBrushColour()
      addColor(colour)
  }
});



var changeBrushColour = function(){
  var colour = $('.colourType').val();
  console.log(colour)
  $(".brush").css('background-color', colour)
  addColor(colour)

};

for (var i = 0; i < 20; i++) {
  $('<div>').addClass('square').appendTo('body')
}

$( ".square" ).on( "click", function() {
  $(this).css('background-color', 'green');
});


var addColor = function(colour){
  if (swatch.length === 3) {
    swatch.shift()
    swatch.push(colour)
    swatches()
  } else {
    swatch.push(colour)
    swatches()
  }

}

var swatches = function() {
  for (var i = 0; i < swatch.length; i++) {
    var swatchDiv = $('<div>').addClass('swatch').attr('id', i).appendTo('body')

  }
    swatchDiv.css('background-color', swatch[i]).html(swatch[i])
};
