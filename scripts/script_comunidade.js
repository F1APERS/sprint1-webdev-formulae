document.addEventListener('DOMContentLoaded', function() {
    console.log('Script carregado!');
});

const publicarBtn = document.querySelector('#publicar');
const inputUsuario = document.querySelector('#inputUsuario');
const postagens = document.querySelector('#postagens');
const userProfileImageUrl = '/images/fotodeperfil.jpg'; 

publicarBtn.addEventListener('click', function(event) {
    event.preventDefault();
    window.alert('Publicado com sucesso!');
    
    
    let novoPost = document.createElement('li');
    novoPost.classList.add('postagem');
    
    
    let profileImage = document.createElement('img');
    profileImage.src = userProfileImageUrl;
    profileImage.alt = 'Foto de perfil do usuário';
    
    
    let postText = document.createElement('span');
    postText.innerText = inputUsuario.value;
    
    
    novoPost.appendChild(profileImage);
    novoPost.appendChild(postText);
    
    
    postagens.appendChild(novoPost);
    
    
    inputUsuario.value = '';  
});

const voltarBtn = document.querySelector('#logobtn');
voltarBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});
