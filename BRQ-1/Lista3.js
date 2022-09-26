function Ex1()
{
    /*1 - Escreva um algoritmo em Javascript que dado (atribuição) três números inteiros e
    positivos (A, B, C) e calcule a seguinte expressão: X = A + B / C. Exiba o resultado no console.*/
    var A = 10;
    var B = 20;
    var C = 30;
    var X = (A + B) / C;
    return(`X = ${X}`);
}

function Ex2()
{
    /*2 - Faça um algoritmo em Javascript que dada (atribuição) as 3 notas de um aluno, calcule a
    média final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3
    e 5, respectivamente. Exiba o resultado no console.*/
    var nota1 = 10;
    var nota2 = 5;
    var nota3 = 7;
    var media = ((nota1*2) + (nota2*3) + (nota3*5)) / 10;
    return(`Media ponderada = ${media}`);
}

function Ex3()
{
    /*3 - Faça um algoritmo em Javascript que dado (atribuição) o tempo de duração de um evento
    em uma fábrica expressa em segundos e mostre o resultado no console expresso em horas,
    minutos e segundos.*/

    var temposeg = 11800;

    var temposeg2 = parseInt((temposeg % 3600) % 60);
    var tempomin = parseInt((temposeg % 3600) / 60);
    let tempohora = parseInt((temposeg / 3600));


    console.log(`${temposeg} segundos`);
    return(`${tempohora} horas ${tempomin} minutos e ${temposeg2} segundos`);
}

function Ex4()
{
    /*4 - Escreva um algoritmo em Javascript que calcule a área de um triângulo equilátero. */
    var l = 20;
    var area = (Math.pow(l,2)*Math.sqrt(3)) / 4
    return area;
}

function Ex5()
{
    /*5 - Escreva um algoritmo em Javascript que dado (atribuição) três números inteiros e positivos
    (A, B, C) e calcule a seguinte expressão: X = (A + B)² + C. Exiba o resultado no console.*/

    const A = 1.1;
    const B = 2;
    const C = 3;
    
    if((A && B && C) >= 0 && (Number.isInteger(A) && Number.isInteger(B) && Number.isInteger(C)) == true)
    {
        var resultado = (Math.pow((A+B),2) + C); 
        return(`Resultado: ${resultado}`);
    }
    else
    {
        return('Os números não são inteiros e positivos');
    }
    
}

function Ex6()
{
    /*6 - Escreva um algoritmo em Javascript que dado um valor escreva no console o dobro de
    seu antecessor .*/
    const num = 10;
    var resultado = (num-1)*2;
    return(`Resultado: ${resultado}`);
}

function Ex7()
{
    /*7 - Escreva um algoritmo em Javascript que dado o número total de eleitores de um município,
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um
representa em relação ao total de eleitores. Exiba o resultado no console.*/
    var brancos = 20;
    var nulos = 10;
    var validos = 170;
    var total = brancos + nulos + validos;
    brancos = brancos*100/total;
    nulos = nulos*100/total;
    validos = validos*100/total;

    return(`Percentual de votos brancos = ${brancos}%\nPercentual de votos nulos = ${nulos}%\nPercentual de votos válidos = ${validos}%`);
}

function Ex8()
{
    /*8 - O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem
    do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem
    do distribuidor seja de 30% e os impostos de 45%, escrever um algoritmo em Javascript que
    dado (atribuição) o custo de fábrica de um carro e escreva, no console o custo ao consumidor.*/
    var custoCarro = 85500.99;
    custoCarro = custoCarro + custoCarro*30/100;
    custoCarro = custoCarro + custoCarro*45/100;
    return(`Custo ao consumidor: R$${custoCarro.toFixed(2)}`);
}

console.log(Ex3());