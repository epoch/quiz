document.getElementById('button').onclick = function(e){
  e.preventDefault();
  document.getElementById('brush').style.backgroundColor = 'mistyrose';
};



document.getElementById('createDivs').onclick = function(){
  for (var i = 0; i < 10; i++) {
    $('body').append('<div>').addClass('square');
  };
};
