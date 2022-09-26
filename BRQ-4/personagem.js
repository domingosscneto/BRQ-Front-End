"use strict";
//PARA COMPILAR:
//no terminal: npx tsc -> cria um java script a partir do typescript
//no terminal: npx tsc --watch -> atualiza automaticamente o javascript quando alterar o typescript
// ctrl + c -> finaliza o código acima no terminal
//
//em outro terminal: node personagem.js(nome do arquivo .js) -> executa o arquivo .js
let nome = "Ryu";
let idade = 20;
let jogavel = true;
let ataque = {
    principal: "Soco",
    secundario: "Chute",
    forca: 200
};
//ANY
let documento = "000.000.000-00";
documento = 3;
documento = true;
console.log(nome);
console.log(ataque);
//FUNÇÕES
const Somar = (n1, n2) => {
    return n1 + n2;
};
let numeroSomado = Somar(2, 5);
console.log(`Número Somado: ${numeroSomado}`);
//VOID (vazio) - retornos de funções
const BoasVindas = () => {
    console.log("Olá Domingos");
};
BoasVindas();
//Arrays
let placar1 = [7, 1];
let placar2 = [1, 7];
//Tupla - Array misto
//Dados do aluno: Nome, Nota, Aprovado
let minhaTupla = ['Bruno', 9, true];
//Enums - Máquina de Estados
var Acoes;
(function (Acoes) {
    Acoes[Acoes["Correr"] = 0] = "Correr";
    Acoes[Acoes["Pular"] = 1] = "Pular";
    Acoes[Acoes["Defender"] = 2] = "Defender";
    Acoes[Acoes["Atacar"] = 3] = "Atacar";
})(Acoes || (Acoes = {}));
var Respostas;
(function (Respostas) {
    Respostas[Respostas["Nao"] = 0] = "Nao";
    Respostas[Respostas["Sim"] = 1] = "Sim";
})(Respostas || (Respostas = {}));
let acaoAtual = Acoes.Atacar;
console.log(acaoAtual);
try {
    fetch('https://viacep.com.br/ws/03050010/json/') //Erro pois fetch não está definido
        .then(response => response.json());
}
catch (error) {
    console.log('Ops deu erro :( ... Salvando erro em logs');
}
