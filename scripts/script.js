//PARALLAX
document.addEventListener('DOMContentLoaded', function() {
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
const novidades = document.querySelector('.novidades-item');

novidades.addEventListener('click', function() {
    window.alert('Em breve!');
    
});

const comunidadeBtn = document.querySelector('#Comunidade-btn');

comunidadeBtn.addEventListener('click', function() {
    window.location.href = 'comunidade.html';
    
});


//BOTAO COMUNIDADE
let publicarBtn = document.querySelector('#publicar');

publicarBtn.addEventListener('click', function() {
    window.alert('Publicado com sucesso!');
    
});

//BOTAO DE VOLTAR
let voltarBtn = document.querySelector('#logobtn');
    voltarBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
