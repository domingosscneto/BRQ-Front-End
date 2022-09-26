let input = document.querySelector('#palavra');
let botao = document.querySelector('#gerar');
let paragrafo = document.querySelector('#paragrafo');

const Fatorial = () => {
    var resultado = input.value;
    for (let i = 1; i < input.value; i++) {
        resultado = resultado * i;
    }
    paragrafo.innerHTML = (`${input.value}! = ${resultado}`);
}

function limit()
{
    if(input.value.length > 10) {
        input.value = input.value.substr(0, 10);
    }
}

input.addEventListener('input', limit);
botao.addEventListener('click', Fatorial);