console.log('JS connected ...')

$setColorBtn = $('.setColor');
$setColorBtn.on('click', function(){
  input = document.querySelector('.input').value;
  brush = document.querySelector('.brush');
  brush.style.backgroundColor = input;

});

$inputColor = $('.input');
$inputColor.on('keypress', function(){
  input = document.querySelector('.input').value;
  brush = document.querySelector('.brush');
  brush.style.backgroundColor = input;
}); 
