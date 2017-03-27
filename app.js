$('input:text').bind('focus blur', function() {
    $(this).toggleClass('red');
});

$('button').click(function() {
    $('body').html('<div class="square"></div>');
    // $(this).toggleClass()
});
