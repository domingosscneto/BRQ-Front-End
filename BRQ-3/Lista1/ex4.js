let entrada = document.querySelector('#numero');
let botao = document.querySelector('#gerar');
let result = document.querySelector('#resultado');
let resultado;

const Operacao = () => {
    for (let i = 0; i < 11; i++) {
        resultado = i * entrada.value;
        result.innerHTML = result.innerHTML + (`${parseInt(entrada.value)} X ${i} = ${resultado}`) + '<br>';
    }
}

botao.addEventListener('click', Operacao);