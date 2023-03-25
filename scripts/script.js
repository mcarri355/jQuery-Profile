// On Load Function that creates the expanding effect on the bottom containers
$(window).on('load',function(){
    $('#left').slideUp(0).slideDown(2000);
    $('#middle').slideUp(0).slideDown(2000);
    $('#right').slideUp(0).slideDown(2000);
})

// When you click on the left container it will change order of containers
$('#left').click( function(){
    $('.bottomContainers').css('flex-direction', 'row-reverse')
})

//When you click on the middle container it will Clone Everything with the class "pfp" (the only thing with this class is the picture of me) and place it underneath the bottom containers
$('#middle').click(function(){
    $('.pfp').clone().insertAfter('.bottomContainers');
})

$('#right').click(function(){
    $(this).hide(2000).show(2000).fadeOut(2000).fadeIn(2000).animate({opacity: '1', width: '100%'},(2000)).animate({width: '28vw'},(2000));
});

//When you click on my name it changes Text From Matthew Carrillo To Giga Chad & changes my picture to Giga Chad
$('.topContainer').click(function(){
    $('span').text('Giga Chad');
    $('.pfp').attr("src", "./gigachad.jpg");
})


$('.topContainer').hover(function(){
    $(this).css('border-color', 'fuchsia');
    $('.pfp').css('border-color', 'fuchsia')
})

$(".bottomContainers").mouseenter(function(){
  $("#left").css("border-color", "lime");
  $("#middle").css("border-color", "lime");
  $("#right").css("border-color", "lime");
});