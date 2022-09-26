let input_numero = document.querySelector('#fatorial');
let botao = document.querySelector('#gerar');
let paragrafo = document.querySelector('#resultado_fatorial');

const Fatorial = () => {
    var resultado = input_numero.value;
    for (let i = 1; i < input_numero.value; i++) {
        resultado = resultado * i;
    }
    paragrafo.innerHTML = (`${input_numero.value}! = ${resultado}`);
    
}

function limit()
{
    if(input_numero.value.length > 10) {
        input_numero.value = input_numero.value.substr(0, 10);
    }
}
input_numero.addEventListener('input', limit);
botao.addEventListener('click', Fatorial);