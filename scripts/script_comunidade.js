document.addEventListener('DOMContentLoaded', function() {
    console.log('Script carregado!');
});

const publicarBtn = document.querySelector('#publicar');
const inputUsuario = document.querySelector('#inputUsuario');
const postagens = document.querySelector('#postagens');
const fotoPerfil = '/images/fotodeperfil.jpg'; 

//BOTAO DE PUBLICAR
publicarBtn.addEventListener('click', function(event) {
    event.preventDefault();
    window.alert('Publicado com sucesso!');
    
    let novoPost = document.createElement('li');
    novoPost.classList.add('postagem');
    
    //IMGAEM DE PERFIL
    let profileImage = document.createElement('img');
    profileImage.src = fotoPerfil;
    profileImage.alt = 'Foto de perfil do usuário';
    
    let postText = document.createElement('span');
    postText.innerText = inputUsuario.value;

    //BOTAO DE LIKE
    let likeImage = document.createElement('img');
    likeImage.src = '/images/Like.png';
    likeImage.alt = 'Curtir';
    likeImage.addEventListener('click', function() {
        window.alert('Você curtiu este post!');
    });

    //BOTAO DE FOLLOW
    let followImage = document.createElement('img');
    followImage.src = '/images/follow.png';
    followImage.alt = 'Seguir';
    followImage.addEventListener('click', function() {
        window.alert('Você está seguindo este usuário!');
    });
    
    novoPost.appendChild(profileImage);
    novoPost.appendChild(postText);
    novoPost.appendChild(likeImage);
    novoPost.appendChild(followImage);
    
    postagens.appendChild(novoPost);
    
    inputUsuario.value = '';  
});

//BOTAO DE VOLTAR
const voltarBtn = document.querySelector('#logobtn');
voltarBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});
