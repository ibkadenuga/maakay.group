const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
});


$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
    $('ul li').click(function(){
        $(this).siblings().removeClass('active')
        $(this).toggleClass('active')
    })

})


