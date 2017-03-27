console.log('JS connected ...')

$setColorBtn = $('.setColor');
$setColorBtn.on('click', function(){
  input = document.querySelector('.input').value;
  brush = document.querySelector('.brush');
  brush.style.backgroundColor = input;
  //
  // var newElement = $('<div>').className="square";
  // $('body').append(newElement);

  for (i=0; i<20; i++){
    var newElement = document.createElement('div');
    newElement.setAttribute('class', 'square');
    newElement.setAttribute('id', i)
    document.querySelector('body').appendChild(newElement);
  };

});

$inputColor = $('.input');
$inputColor.on('keypress', function(){
  input = document.querySelector('.input').value;
  brush = document.querySelector('.brush');
  brush.style.backgroundColor = input;
});

$square = $('body');
$square.on('click', function(){

});


// title = result[i]['Title'];
//     newH2 = document.createElement('H2');
//     newH2.setAttribute("id", i );
//     document.querySelector('body').appendChild(newH2);
//     // document.querySelector(.i).innerHTML = title;
//     document.getElementById(i).innerHTML = title;
//     console.log(title);
