let inputUF = document.querySelector('#uf');
let inputlocalidade = document.querySelector('#localidade');
let inputlogradouro = document.querySelector('#logradouro');
let botao = document.querySelector('#botao');
let output = document.querySelector('#output');

const Pesquisar = (uf,localidade,logradouro) =>{
    
    var endpoint = `https://viacep.com.br/ws/${uf}/${localidade}/${logradouro}/json/`;

    fetch(endpoint, {
        method:'GET',
        headers: { 'Content-Type': "application/json" }
    })
    .then(response => response.json())
    .then(result => {
        output.innerHTML = "";
        for (let i = 0; i < result.length; i++) {
            output.innerHTML += result[i].cep + '<br><br>';
        }
    })

}

botao.addEventListener('click', ()=>{
    Pesquisar(inputUF.value, inputlocalidade.value, inputlogradouro.value);
})