//PARA COMPILAR:
//no terminal: npx tsc -> cria um java script a partir do typescript
//no terminal: npx tsc --watch -> atualiza automaticamente o javascript quando alterar o typescript
// ctrl + c -> finaliza o código acima no terminal
//
//em outro terminal: node personagem.js(nome do arquivo .js) -> executa o arquivo .js
let nome: string = "Ryu";
let idade: number = 20;
let jogavel: boolean = true;
let ataque: object = {
    principal: "Soco",
    secundario: "Chute",
    forca: 200
}

//ANY
let documento: any = "000.000.000-00";
documento = 3;
documento = true;

console.log(nome);
console.log(ataque);


//FUNÇÕES
const Somar = (n1:number, n2:number): number => {
    return n1 + n2;
}

let numeroSomado:number = Somar(2,5);
console.log(`Número Somado: ${numeroSomado}`);


//VOID (vazio) - retornos de funções
const BoasVindas = ():void => {
    console.log("Olá Domingos");
}
BoasVindas();


//Arrays
let placar1: Array<number> = [7,1];
let placar2: number[] = [1,7];

//Tupla - Array misto
//Dados do aluno: Nome, Nota, Aprovado
let minhaTupla: [string, number, boolean] = ['Bruno', 9, true];

//Enums - Máquina de Estados
enum Acoes{
    Correr,
    Pular,
    Defender,
    Atacar
}

enum Respostas{
    Nao,
    Sim
}

let acaoAtual: Acoes = Acoes.Atacar;
console.log(acaoAtual);


try {
    fetch('https://viacep.com.br/ws/03050010/json/') //Erro pois fetch não está definido
    .then(response => response.json())
} catch (error:unknown) {
    console.log('Ops deu erro :( ... Salvando erro em logs');
    
}