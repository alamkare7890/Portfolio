var myToggle = document.getElementById('menuBth');

    menuBtn.onclick = function () {

    menuBtn.classList.toggle('active');
    menuOpen.classList.toggle('slide');
}


$(document).ready(function () {

    $(window).scroll(function(){
        $toggle = $(window).scrollTop();
        if($toggle > 50){
            $('#navFixed').addClass('nav-fixed');
        }else{
            $('#navFixed').removeClass('nav-fixed');

        }
    })

 
})