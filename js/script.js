var myToggle = document.getElementById('menuBth');

    menuBtn.onclick = function () {

    menuBtn.classList.toggle('active');
    menuOpen.classList.toggle('slide');
}


$(document).ready(function () {
/*=======nav=========*/
    $(window).scroll(function(){
        $toggle = $(window).scrollTop();
        if($toggle > 50){
            $('#navFixed').addClass('nav-fixed');
        }else{
            $('#navFixed').removeClass('nav-fixed');

        }
    })

/*===========slide-image=========*/
    $('.slide-testi-image').slick({
        dots: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>"
    });
    

/*===========slide-brand=========*/
    $('.brand-slide').slick({
    
        slidesToShow: 3,
        slidesToSscroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
    });
 
})