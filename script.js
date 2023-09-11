const sivo = document.querySelector('.heder');

window.addEventListener('scroll', function()  {
    if (window.pageYOffset > 0){
        sivo.classList.add('sivo');
    }else{
        sivo.classList.remove('sivo')
    }
});