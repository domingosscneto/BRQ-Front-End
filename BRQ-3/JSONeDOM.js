// Chave : valor
// String - texto
// Numero - inteiro/decimal
// Objeto
// Array - []
// Booleano - v/f
// null

// Manipulação do DOM
let botao = document.querySelector('#adicionar');
let contador = document.querySelector('#contador');
let manual = document.querySelector('.manual');

const Somar = () => {
    contador.innerHTML = parseInt(contador.innerHTML) + 1; //innerHTML -> pega o que está dentro da tag (string)
}

botao.addEventListener('click', Somar);

manual.addEventListener('input', () => {
    contador.innerHTML = manual.value;
});