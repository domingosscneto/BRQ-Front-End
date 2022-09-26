function Ex1()
{
    /*1 - Faça um algoritmo em Javascript para calcular a média aritmética das 3 notas de um
    aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja
    igual ou superior a 6, ou a mensagem "reprovado", caso contrário. Exiba os resultados no
    console. */
    var nota1 = 6;
    var nota2 = 7;
    var nota3 = 8;
    var media = (nota1 + nota2 + nota3)/3;
    if (media >= 6) 
    {
        return(`Aprovado. Media: ${media}`);
    }
    else
    {
        return(`Reprovado. Média: ${media}`);
    }
}

function Ex2()
{
    /*2 - Elaborar um algoritmo em Javascript que dado 3 valores A, B, C, exiba no console o
    maior dos 3 valores e com a mensagem: "É o maior ".*/
    array = [10, 20, 30];
    var A = array[0];
    var B = array[1];
    var C = array[2];
    array.sort();
    return (`${array[array.length -1]} é o maior`)
}

function Ex3() 
{
    /*3 - Elaborar um algoritmo em Javascript que dado 2 valores A e B e os exibam no console
    com a mensagem: "São múltiplos" ou "Não são múltiplos".*/
    var A = 10;
    var B = 30;
    if ((A % B == 0) || (B % A == 0))
    {
        return ("São multiplos");
    }
    else
    {
        return ("Não são multiplos");
    }

}

function Ex4() 
{
    /*4 - Elaborar um algoritmo em Javascript para calcular o IMC ideal de uma pessoa. Tendo
    como dados de entrada a altura e o sexo utilizando as seguintes fórmulas:
    - para homens: (72.7*h)-58
    - para mulheres: (62.1*h)-44.7
    Exiba o resultado no console:*/ 
    //altura = prompt("Qual a sua altura em centímetros: ");
    
    while (isNaN(parseFloat(altura = prompt("Qual a sua altura em centímetros: ")))) {
        altura = prompt("Qual a sua altura em centímetros: ");
    }
    
    sexo = prompt('Qual o seu sexo (responda "M" para masculino ou "F" para feminino): ');
    switch (sexo) {
        case "M":
            var IMC = (72.7*altura)-58;
            break;
        case "F":
            var IMC = (62.1*altura)-44.7;
            break;
        default:
            while (sexo != "M" && sexo != "F") {
                sexo = prompt("Qual o seu sexo (responda M para masculino ou F para feminino): ");
            }
            break;
    }
    return (`Seu IMC é igual a ${IMC}`);
}

function Ex5() 
{
    /*5 - Elaborar um algoritmo em Javascript que dado dois valores e exiba no console uma das
    três mensagens a seguir:
    ‘Números iguais’, caso os números sejam iguais
    ‘Primeiro é maior’, caso o primeiro seja maior que o segundo
    ‘Segundo maior’, caso o segundo seja maior que o primeiro. */ 
    A = prompt("Digite o primeiro valor: ")
    B = prompt("Digite o segundo valor: ")
    var resultado;
    if (A == B) 
    {
        resultado = "Números iguais";
    }
    if (A > B)
    {
        resultado = "Primeiro é maior";
    }
    if (A < B)
    {
        resultado = "Segundo maior";
    }
    return resultado;
}

function Ex6() 
{
    /*6 - Escreva um algoritmo em Javascript para exibir no console os números de 1 (inclusive) a
    10 (inclusive) em ordem decrescente. */ 
    var array = []
    for (let i = 0; i < 11; i++) {
        array[i] = i;
    }
    array.reverse();
    

    for (let i = 0; i < 11; i++) {
       
        console.log(array[i]);
    }
    return array;
}

function Ex7() 
{
    /*7 - Escreva um algoritmo em Javascript para exibir no console os números múltiplos de 5 do
    intervalo de 1 a 50.*/ 
    var array = []
    for (let i = 1; i < 51; i++) {
        if (i % 5 == 0)
            array.push(i);
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]); 
    }
    return array;

}

function Ex8() 
{
    /*8 - Escreva um algoritmo em Javascript que dado um número inteiro N exiba no console todos
    os valores pares entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que
    ZERO.*/ 
    num = parseInt(prompt("Digite um número inteiro maior que zero "))
    var resposta = []
    for (let i = 1; i < num + 1; i++) {
        if (i % 2 == 0) {
            resposta.push(i);
        }
    }
    return resposta
}

function Ex9() 
{
    /*9 - Escreva um algoritmo em Javascript que calcule e exiba no console a tabuada do 7 (1 a
    10). No console deverá ser impresso:
    7 X 1 = 7
    7 X 2 = 14 …*/ 
    for (let i = 1; i < 11; i++) {
        console.log(`7 X ${i} = ${7*i}`);
    }
    return
}
function Ex10() 
{
    /*10 - Escreva um algoritmo em Javascript que exiba no console os 15 primeiros números da
    série Fibonacci: 1, 1, 2, 3, 5, 8, 13…*/ 
    var n1 = 1, n2 = 1, soma = 1;
    for (let i = 1; i <= 15; i++) {
        console.log(n1);
        soma = n1 + n2;
        n1 = n2;
        n2 = soma;
    }
    return;
}

console.log(Ex4());