

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



  // $(.square).click(function(event){
  //
  //     // var $id = $(event.target).attr('data-id');
  //     // $('[data-id=$id]').css("background-color", green);
  //
  //     $(event.target).css("background-color", green);
  //
  //
  // });
