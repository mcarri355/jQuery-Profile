// On Load Function that has
$(window).on('load',function(){
    $('#left').slideUp(0).slideDown(2000);
    $('#middle').slideUp(0).slideDown(2000);
    $('#right').slideUp(0).slideDown(2000);
})

$('#left').on('click', function(){
    $('.bottomContainers').css('flex-direction', 'row-reverse')
})

$('#middle').on('click', function(){
    $('.pfp').clone().insertAfter('.bottomContainers');
});

$('#right').on('click', function(){

})

$('span').on('click', function(){
    $(this).text('Who Am I?')
})