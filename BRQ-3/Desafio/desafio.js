//Criação de todas as variáveis
let nick = document.querySelector('#nick');
let intervalo = document.querySelector('#intervalo');
let comecar = document.querySelector('#comecar');
let texto = document.querySelector('#texto');
let numero = document.querySelector('#numero');
let jogar = document.querySelector('#jogar');
let saida = document.querySelector('#saida');
let tentativa = document.querySelector('#tentativa');
let sorteado;
let qntTentativas = 3;

/*Desabilita o botão "começar" e habilita somente quando inserir algo no input "número"*/
nick.addEventListener("input", function () {
    if (nick.value === "") {
        comecar.disabled = true;
        comecar.style.backgroundColor = '#7c7f82';
    } else {
        comecar.disabled = false;
        comecar.style.backgroundColor = '#1180e6';
    }
});

/*Desabilita o botão "jogar" e habilita somente quando inserir algo no input "nick"*/
numero.addEventListener("input", function () {
    if (numero.value === "") {
        jogar.disabled = true;
        jogar.style.backgroundColor = '#7c7f82';
    } else {
        jogar.disabled = false;
        jogar.style.backgroundColor = '#f2890d';
    }
});

/*Ao clicar no botão "começar" altera o nome do usuário, mostra o número de tentativas restantes e sorteia um número aleatório de acordo com a opção escolhida no select*/
comecar.addEventListener('click', function () {
    texto.innerHTML = nick.value;
    tentativa.innerHTML = `Você ainda tem ${qntTentativas} tentativas`
    var escolha = intervalo.options[intervalo.selectedIndex].value;
    switch (escolha) {
        case 'opcao1':
            sorteado = Math.floor(Math.random() * 10);
            console.log(sorteado);
            break;

        case 'opcao2':
            sorteado = Math.floor(Math.random() * 100);
            console.log(sorteado);
            break;

        case 'opcao3':
            sorteado = Math.floor(Math.random() * 200);
            console.log(sorteado);
            break;
              
        default:
            break;
    }
})

/*Função que reseta o botão "começar" e "jogar", o número de tentativas e os textos de dicas para as suas configurações padrões*/
const resetarBotao = () => {
    comecar.addEventListener('click', function () {
        comecar.innerHTML = "COMEÇAR";
        qntTentativas = 3;
        saida.innerHTML = "";
        tentativa.innerHTML = `Você ainda tem ${qntTentativas} tentativas`;
        jogar.style.display = "initial";
        comecar.style.backgroundColor = '#1180e6';
    })
}

/*Função que compara o número sorteado com o número digitado pelo usuário*/
function Comparar(){
    if (numero.value == sorteado) {
        saida.innerHTML = "Parabéns, você conseguiu adivinhar!";
        tentativa.innerHTML = "";
        jogar.style.display = "none";
        comecar.innerHTML = "RESET"; //transforma o botão "começar" em "reset".
        comecar.style.backgroundColor = '#009a68';
        resetarBotao();
    }else if(numero.value < sorteado){
        saida.innerHTML = "O seu número é menor";
        qntTentativas = qntTentativas - 1; //reduz o número de tentativas restante.
        tentativa.innerHTML = `Você ainda tem ${qntTentativas} tentativas`;
    }else if(numero.value > sorteado){
        saida.innerHTML = "O seu número é maior";
        qntTentativas = qntTentativas - 1; //reduz o número de tentativas restante.
        tentativa.innerHTML = `Você ainda tem ${qntTentativas} tentativas`;
    }else{
        console.log("ERRO!");
    }
    if (qntTentativas == 0) { //Quando o número de tentativas chegar a 0, apaga o botão jogar e transforma o botão "começar" em um botão de "reset".
        tentativa.innerHTML = `Você ainda tem ${qntTentativas} tentativas`;
        saida.innerHTML = `Que pena! Você perdeu!<br> O número era ${sorteado}.`;
        jogar.style.display = "none";
        comecar.innerHTML = "RESET";
        comecar.style.backgroundColor = '#009a68';
        resetarBotao();
    }
}

jogar.addEventListener('click', Comparar)