let height = document.querySelector('#altura');
let weight = document.querySelector('#peso');
let botao = document.querySelector('#calcular');

const Calculo = () => {
    height.value = Number(height.value/100);
    resultado = Number(weight.value)/(height.value*height.value);
    alert(resultado);
}

botao.addEventListener('click', Calculo);
