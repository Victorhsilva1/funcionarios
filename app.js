'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}
 
const container = document.getElementById('funcionarios')
 
const criarCard = (funcionario) => {
    const card = document.createElement('div')
    card.classList.add('card')
 
    const imagem = document.createElement('img')
    imagem.src = funcionario.imagem
    imagem.alt = funcionario.nome
 
    const nome = document.createElement('p')
    nome.textContent = funcionario.nome
 
    const cargo = document.createElement('span')
    cargo.textContent = funcionario.cargo
 
    card.append(imagem, nome, cargo)
 
    return card
}
 
const carregarFuncionarios = () => {
    const cards = funcionarios.map(criarCard)
    cards.forEach(card => container.appendChild(card))
}
 
carregarFuncionarios()