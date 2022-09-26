let inputCEP = document.querySelector('#cep');
let botao = document.querySelector('#botao');
let output = document.querySelector('#output');

const Pesquisa = (cep) =>{

    var endpoint = 'https://viacep.com.br/ws/'+cep+'/json/';

    fetch(endpoint, {
    method: 'GET',
    headers: { 'Content-Type': "application/json" }
    })
    .then(response => response.json())
    .then(result => {
        output.innerHTML += '<br>' + result.localidade + '<br>';
    })
    .catch(erro => console.log(erro))

}



botao.addEventListener('click', ()=>{
    
    if (inputCEP.value.length > 7) {
        Pesquisa(inputCEP.value);
    }

})