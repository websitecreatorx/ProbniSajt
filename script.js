const sivo = document.querySelector('.header .row');

window.addEventListener('scroll', function()  {
    if (window.pageYOffset > 0){
        sivo.classList.add('sivo');
    }else{
        sivo.classList.remove('sivo')
    }
});