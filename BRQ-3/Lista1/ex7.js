let input_palavra = document.querySelector('#inverter');
let botao = document.querySelector('#gerar');
let paragrafo = document.querySelector('#resultado_inverter');

const Inverter = () => {
    paragrafo.innerHTML = input_palavra.value.split("").reverse().join("");
}

var texto = input_palavra.value;
botao.addEventListener('click', Inverter);