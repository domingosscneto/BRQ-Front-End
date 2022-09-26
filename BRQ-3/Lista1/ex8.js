let input_nome = document.querySelector("#name");
let input_idade = document.querySelector("#age");
let botao = document.querySelector("#enviar");
let tabela = document.querySelector("#saida");


const Print = () => {
    tabela.innerHTML = tabela.innerHTML + input_nome.value + "<br><br>" + input_idade.value + "<br><br>";
}


botao.addEventListener('click', Print);