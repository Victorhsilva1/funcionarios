'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}


function criarContainer (imagem) {
    const galeria = document.getElementById('galeria');

    
    const itemGaleria = document.createElement('div');
    itemGaleria.classList.add('item-galeria');


    const novaImagem = document.createElement('img');
    novaImagem.src = imagem.url;
   

  
    const nome = document.createElement('span');
    nome.classList.add('legenda');
    nome.textContent = imagem.nome;

    
    itemGaleria.appendChild(novaImagem);
    itemGaleria.appendChild(nome);

   
    galeria.appendChild(itemGaleria);
}

function carregarGaleria() {
    imagens.forEach(criarItemGaleria);
}

carregarGaleria();