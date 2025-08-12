'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}


// function criarContainer (imagem) {
//     const funcionarios = document.getElementById('funcionarios');

    
//     const itemContainer = document.createElement('div');
//     itemContainer.classList.add('card');

//     const novaImagem = document.createElement('img');
//     novaImagem.src = imagem.imagem; 
//     novaImagem.alt = imagem.nome;
  
//     const nome = document.createElement('p');
//     nome.classList.add('nome');
//     nome.textContent = imagem.nome;

//     const cargo = document.createElement('span');
//     cargo.classList.add('cargo');
//     cargo.textContent = imagem.cargo;

    
//     itemContainer.appendChild(novaImagem);
//     itemContainer.appendChild(nome);
//     itemContainer.appendChild(cargo);

//     container.appendChild(itemContainer);
// }

// function carregarFuncionarios() {
//     funcionarios.forEach(criarContainer);
// }

// criarContainer(imagem);
funcionarios.forEach((funcionario)=>{
    console.log(funcionario.nome)
    
});