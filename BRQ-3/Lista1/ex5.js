let input_celsius = document.querySelector('#celsius');
let botao_celsius = document.querySelector('#converter_celsius');
let resultado_celsius = document.querySelector('#resultado_celsius');
let input_farehnheit = document.querySelector('#fahrenheit');
let botao_fahrenheit = document.querySelector('#converter_fahrenheit');
let resultado_fahrenheit = document.querySelector('#resultado_fahrenheit');


const Calcula_celsius = () => {
    resultado_celsius.innerHTML = ((Number(input_celsius.value)*9)/5) + 32 + '°F';
}

const Calcula_fahrenheit = () => {
    resultado_fahrenheit.innerHTML = ((Number(input_farehnheit.value)-32)*5)/9 + '°C';
}

botao_celsius.addEventListener('click', Calcula_celsius);
botao_fahrenheit.addEventListener('click', Calcula_fahrenheit);