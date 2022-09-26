let input_numero = document.querySelector('#fatorial');
let botao = document.querySelector('#gerar');
let paragrafo = document.querySelector('#resultado_fatorial');

const Fatorial = () => {
    var resultado = input_numero.value;
    for (let i = 1; i < input_numero.value; i++) {
        resultado = resultado * i;
    }
    paragrafo.innerHTML = (`${input_numero.value} fatorial = ${resultado}`);
}

botao.addEventListener('click', Fatorial);