"use strict";
let inputNome = document.querySelector(".nome");
let inputStatus = document.getElementsByName("atividade");
let inputData = document.querySelector(".data");
let inputTexto = document.querySelector(".areaTexto");
let btnCadastro = document.querySelector(".cadastrar");
let novosCards = [];
class Card {
    constructor(_nome, _descricao, _data, _status, _id) {
        this.nome = _nome;
        this.descricao = _descricao;
        this.data = _data;
        this.status = _status;
        this.id = _id;
    }
    get Nome() {
        return this.nome;
    }
    set Nome(value) {
        this.nome = value;
    }
    get Descricao() {
        return this.descricao;
    }
    set Descricao(value) {
        this.descricao = value;
    }
    get Data() {
        return this.data;
    }
    set Data(value) {
        this.data = value;
    }
    get Status() {
        return this.status;
    }
    set Status(value) {
        this.status = value;
    }
    get Id() {
        return this.id;
    }
    set Id(value) {
        this.id = value;
    }
}
//função que pega os dados da API e armazena em um array
function obterCardsApi() {
    fetch('https://62361b7feb166c26eb2f488a.mockapi.io/pacotes')
        .then(resposta => resposta.json())
        .then((dados) => {
        return dados.map(dadosCard => {
            return new Card(dadosCard.nome, dadosCard.descricao, dadosCard.data, dadosCard.status, dadosCard.id);
        });
    })
        .then(dadosNovosCards => {
        novosCards = dadosNovosCards;
        inserirDados(dadosNovosCards);
        console.log(novosCards);
    });
    validacaoStatus(inputStatus);
    inputData.value;
    inputTexto.value;
}
//função que cria um card novo
function criarCards() {
    inputNome.value;
    validacaoStatus(inputStatus);
    inputData.value;
    inputTexto.value;
    let novoCard = new Card(inputNome.value, inputTexto.value, inputData.value, validacaoStatus(inputStatus), criarId());
    console.log("corrigir idFake");
    novosCards.push(novoCard);
    console.log(novosCards);
    inserirDados(novosCards);
}
function criarId() {
    let maiorId = 0;
    novosCards.map((dadoId, index) => {
        if (Number(dadoId.Id) > maiorId) {
            maiorId = Number(dadoId.Id);
        }
    });
    maiorId++;
    return maiorId.toString();
}
//EventListener do botão cadastrar
btnCadastro.addEventListener('click', () => {
    criarCards();
});
function validacaoStatus(status) {
    status = inputStatus;
    for (let i = 0; i < status.length; i++) {
        if (status[i].checked) {
            if (status[i].value == "ativo") {
                status = true;
            }
            else {
                status = false;
            }
        }
    }
    return status;
}
//função que transforma a data para a formatação correta
function dataTexto(data) {
    let newDate = new Date(data);
    let dataString;
    dataString = (newDate.getDate().toString() + "/"
        + (newDate.getMonth() + 1).toString() + "/"
        + newDate.getFullYear().toString());
    return dataString;
}
//função para inserir os dados no card e atualizar a página HTML
function inserirDados(arrayNovosCards) {
    let cardNovo = document.querySelector('.secao2');
    console.log(cardNovo);
    cardNovo.innerHTML = "";
    for (let i = 0; i < arrayNovosCards.length; i++) {
        cardNovo.innerHTML += `<div class="pacotes">
        <h3 class="nomeAPI">${arrayNovosCards[i].nome}</h3>
        <p class="txtAPI">${arrayNovosCards[i].descricao}</p>
        <p class="txtData">${dataTexto(arrayNovosCards[i].data)}</p>
        <button type="submit" class="editar" id="editar${arrayNovosCards[i].id}" value="${arrayNovosCards[i].id}" onClick="editar(${arrayNovosCards[i].id})">Editar</button>
        <button type="submit" class="excluir" id="excluir${arrayNovosCards[i].id}" value="${arrayNovosCards[i].id}" onClick="excluir(${arrayNovosCards[i].id})">Excluir</button>
    </div>`;
    }
    console.log(dataTexto(arrayNovosCards[0].data));
}
//função que exclui o card ao clicar no botão Excluir
function editar(id) {
    let indice;
    indice = selecionarCardById(id);
    inputNome.value = novosCards[indice].Nome;
    inputData.value = InversaoData(novosCards[indice].Data);
    inputTexto.value = novosCards[indice].Descricao;
    inputStatus.value = novosCards[indice].Status;
    excluir(id);
    inserirDados(novosCards);
}
//função que inverte a data para a formatação correta e funcionar o botão editar
function InversaoData(data) {
    let newDate = new Date(data);
    let dataString;
    dataString = (Number(newDate.getFullYear()).toString() + "-"
        + (newDate.getMonth() + 1).toString() + "-"
        + newDate.getDate().toString());
    return dataString;
}
//função que exclui o card ao clicar no botão Excluir
function excluir(id) {
    let indice;
    indice = selecionarCardById(id);
    novosCards.splice(indice, 1);
    inserirDados(novosCards);
}
//Seleciona o card pelo seu id
function selecionarCardById(id) {
    let indice = 0;
    for (let i = 0; i < novosCards.length; i++) {
        if (novosCards[i].Id == id) {
            indice = i;
        }
    }
    return indice;
}
window.onload = () => {
    obterCardsApi();
};
