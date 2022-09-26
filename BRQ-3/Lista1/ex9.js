let inputs = document.querySelectorAll("input");
let botao = document.querySelector("#enviar");
let tabela = document.querySelector("#saida");
botao.disabled = true;

function checkInputs(inputs) {
    let preenchido = true;
    inputs.forEach(function (input) {
        if (input.value === "") {
            preenchido = false;
        }
    });
    return preenchido;
}
  

inputs.forEach(function (input) {
    input.addEventListener("keyup", function () {
        if (checkInputs(inputs)) {
            botao.disabled = false;
        } else {
            botao.disabled = true;
        }
    });
});


const Print = () => {
    tabela.innerHTML = `${tabela.innerHTML}  ${inputs[0].value} <br><br> ${inputs[1].value} <br><br>`;
}

botao.addEventListener('click', Print);