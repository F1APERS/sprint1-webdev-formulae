document.addEventListener('DOMContentLoaded', function() {
    console.log('Script carregado!');
});


//PARALLAX
document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.parallax img');
    var currentImageIndex = 0;

    function changeImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    images[currentImageIndex].classList.add('active');

    setInterval(changeImage, 3000);
});


//BOTAO DOS CARDS
const novidades = document.querySelector('.novidades-linha');

novidades.addEventListener('click', function () {
    window.alert('Em breve!');

});

const novidades2 = document.querySelector('.novidades-linha-2');

novidades2.addEventListener('click', function () {
    window.alert('Em breve!');

});


//BOTAO DE VOLTAR
let voltarBtn = document.querySelector('#logobtn');
voltarBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
});
