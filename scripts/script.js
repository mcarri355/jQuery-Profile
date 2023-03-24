// On Load Function that has
$(window).on('load',function(){
    $('#pfp').slideDown(2000)
})

// Changes Picture of Me to Picture of Smiling Monkey
$('#pfp').on('click', function(){
    $(this).fadeOut(2500).fadeIn(2500);;
})
