//Sidebar Active 
$('.sidebarButton').click(function() {
    $('.sidebarWrapper').toggleClass('sidebar-active');
})
$('.bodyContent').click(function() {
    $('.sidebarWrapper').removeClass('sidebar-active');
})

//active class menu
$('.sidebarMenu').on('click', function () {
    $(this).addClass('active').siblings('.active').removeClass('active');
});

//Submenu sidebar
$(".linkMenu").click(function () {
    $(".submenuWrapper").slideUp(500);
    if ($(this).parent().hasClass("submenuActive")) {
        $(".linkMenu").removeClass("submenuActive");
        $(this).parent().removeClass("submenuActive");
    } else {
        $(".linkMenu").removeClass("submenuActive");
        $(this).next(".submenuWrapper").slideDown(500);
        $(this).parent().addClass("submenuActive").siblings('.submenuActive').removeClass('submenuActive');
    }
});

//Limit Text message notification
var txt= $('.message').text();
if(txt.length > 10)
    $('.message').text(txt.substring(0,100) + '...');