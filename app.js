

//$(document).ready(function(){

  $(".search").click(function(event){

    event.preventDefault();

      $colour = $("input:text[name='colour']").val();

      // var $wrapper = $(event.target).closest('.wrapper');

      // $wrapper.find
      $('.brush_box').css("background-color", $colour);

  });


  for(i=0; i<20; i++){

    var $newSquare = $("<div>").addClass("square").attr('data-id', i);
    $newSquare.appendTo(".squares_container");
  }



  $(".squares_container").mouseover(function(event){

      if ($(event.target).hasClass('square')){
      $colour = $('.brush_box').css("background-color");
      $(event.target).css("background-color", $colour);
    }


  });
