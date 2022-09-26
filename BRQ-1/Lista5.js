const Ex1 = () => {
    /*1 - Crie um algoritmo em Javascript que gere um vetor de 8 posições, onde os valores de
    cada posição seja o cubo de cada índice.*/
    array = []
    for (let i = 0; i < 8; i++) {
        array[i] = Math.pow(i,3);
    }
    return array
}

const Ex2 = () => {
    /*Dado um vetor V: V = [5, 1, 4, 2, 7, 8, 3, 6]
    Crie um algoritmo em Javascript que gere um vetor V2 a partir do dobro de cada valor de V.
    Gere os resultados no console.*/
    V = [5, 1, 4, 2, 7, 8, 3, 6]
    V2 = []
    for (let i = 0; i < V.length; i++) {
        V2[i] = V[i]*2;
    }
    return V2
}

const Ex3 = () => {
    /*3 - Ler um vetor A de 10 números. Após, ler mais um número e guardar em uma variável X.
    Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X.
    Logo após, imprimir o vetor M. Gere os resultados no console.*/
    A = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    X = prompt("Digite uma variável: ")
    M = []
    for (let i = 0; i < A.length; i++) {
        M[i] = A[i] * X;
    }
    return M
}

const Ex4 = () => {
    /*4 - Escreva um algoritmo que permita a leitura dos nomes de 5 pessoas e armazene os nomes
    lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de um nome qualquer de
    pessoa e depois escrever a mensagem ACHEI, se o nome estiver entre os 10 nomes lidos
    anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário. Gere os resultados no
    console.*/
    array = []
    for (let i = 0; i < 5; i++) {
        nome = prompt("Digite um nome para a lista: ");
        array[i] = nome;
    }

    pesquisa = prompt("Digite um nome para PROCURAR na lista: ");
    for (let i = 0; i < array.length; i++) {
        if (array.includes(pesquisa)){
            console.log("ACHEI");
            break;
        }
        else{
            console.log("NÃO ACHEI");
            break;
        }

    }
    console.log(pesquisa);
    return array
}

const Ex5 = () => {
    /*5 - Crie um algoritmo que leia um vetor Q de 10 posições (aceitar somente números pares).
    O algoritmo deverá escrever o valor do maior elemento de Q e a respectiva posição que ele
    ocupa no vetor. Gere os resultados no console.*/
    Q = []
    var count = 0;
    while (Q.length < 10) {
        numero = prompt(`Digite um número inteiro para inserir no vetor:`)
        if (numero % 2 == 0){
            Q[count] = parseInt(numero);
            count += 1;
        }
    }
    
    var maior = Q[0];
    for (let i = 0; i < Q.length; i++) {
        if (Q[i] > maior) {
            maior = Q[i];
        }
    }
    console.log(`Maior elemento do array: ${maior}`);
    console.log(`Posição do maior elemento: ${Q.indexOf(maior)}`);

    return Q
}

const Ex6 = () => {
    /*6 - Faça um algoritmo para ler e armazenar em um vetor a temperatura média de todos os
    dias de uma semana. Calcular e escrever no console:
    a) Menor temperatura da semana
    b) Maior temperatura da semana
    c) Temperatura média semanal
    d) O número de dias da semana em que a temperatura foi inferior a média semana*/
    array = []
    var count = 0;

    while (array.length < 7) {
        temperatura = Number(prompt(`Digite uma temperatura em Celsius para inserir no vetor:`))
        if (-100 < temperatura < 100 ){
            array[count] = temperatura;
            count += 1;
        }
    }

    var soma = 0, media;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
        media = soma/array.length;
    }
    var aux = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < media) {
            aux += 1;
        }
    }
    array.sort();
    console.log(`Menor temperatura: ${array[0]}`);
    console.log(`Maior temperatura: ${array[array.length - 1]}`);
    console.log(`Media semanal da temperatura: ${media}`);
    console.log(`Número de dias da semana que a temperatura foi inferior a media semanal: ${aux}`);
    return array
}

const Ex7 = () => {
    /*7 - Faça um algoritmo para ler 10 números e armazenar em um vetor. Após isto, o algoritmo
    deve ordenar os números no vetor em ordem crescente. Escrever o vetor ordenado. Gere os
    resultados no console*/
    array = []
    var count = 0;

    while (array.length < 10) {
        num = Number(prompt(`Digite um número para inserir no vetor:`))
            array[count] = num;
            count += 1;
    }
    array.sort();
    return array
}


const Ex8 = () => {
    /*8 - Faça um programa, com uma função que necessite de três argumentos, e que forneça a
    soma desses três argumentos através de uma função. Seu script também deve fornecer a
    média dos três números, através de uma segunda função que chama a primeira.*/
    funcSoma();
    var media;
    media = soma/array.length;
    return media;
}

const funcSoma = () => {
    array = [];
    var arg, soma = 0, count = 0;
    while (array.length < 3) {
        arg = Number(prompt("Digite três números"));
        array[count] = arg;
        count += 1;
    }
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    console.log(array);
    return soma
}












const Ex9 = () => {
    /*9 - Faça um programa, com uma função que necessite de um argumento. A função retorna o
valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou
negativo.*/


}

const Ex10 = () => {
    /*10 - Faça uma função que informe a quantidade de dígitos de um determinado número inteiro
informado.*/


}
console.log(Ex8());