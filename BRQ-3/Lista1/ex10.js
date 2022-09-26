let texto = document.querySelector("#texto");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");


const Contar = () => {
    resultado.innerHTML = texto.value.length;
}

botao.addEventListener('click', Contar)
