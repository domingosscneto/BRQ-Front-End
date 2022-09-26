const diagnostico = (nome, sexo, idade, altura, peso) => {
    console.log("DIAGNÓSTICO PRÉVIO\n\n");
    console.log(`Nome: ${nome}`);
    console.log(`Sexo: ${sexo}`);
    console.log(`Idade: ${idade}`);
    console.log(`Altura: ${altura}`);
    console.log(`Peso: ${peso}`);

    if (idade < 12) {
        console.log("Categoria: Infantil\n");
    }
    if (idade > 12 && idade < 20) {
        console.log("Categoria: Juvenil\n");
    }
    if (idade > 21 && idade < 65) {
        console.log("Categoria: Adulto\n");
    }
    if (idade > 65) {
        console.log("Categoria: Idoso\n");
    }
    calculoIMC(peso, altura);

}

const calculoIMC = (peso, altura) => {
    console.log(`\nIMC Desejável: entre 20 e 24.99\n\n`);
    imc = peso / (altura * altura);
    console.log(`Resultado IMC: ${imc}`);

    if (imc < 20) {
        console.log("Riscos: Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso.\n");
        console.log("Recomendações: Inclua carboidratos simples em sua dieta, além de proteínas - indispensáveis para ganho de massa magra. Procure um profissional .");
    }
    else if (imc > 20 && imc < 24.99){
        console.log("Riscos: Seu peso está ideal para suas referências.\n");
        console.log("Recomendações: Mantenha uma dieta saudável e faça seus exames periódicos.");
    }
    else if (imc > 25 && imc < 29.99){
        console.log("Riscos: Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares.\n");
        console.log("Recomendações: Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante");
    }
    else if (imc > 30 && imc < 35.99){
        console.log("Riscos: Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade.\n");
        console.log("Recomendações: Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino).");
    }
    else if (imc > 36){
        console.log("Riscos: O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas.\n");
        console.log("Recomendações: Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino).");
    }
}

var nome, sexo, idade, altura, peso;
do {
    nome = prompt("Digite seu nome: ");
} while (!isNaN(nome));

do {
    sexo = prompt("Digite seu sexo: ");
} while (!isNaN(sexo));

do {
    idade = prompt("Digite sua idade: ");
} while (!parseInt(idade));

do {
    altura = prompt("Digite sua altura: ").replace(/,/g, ".");
} while (!parseFloat(altura));

do {
    peso = prompt("Digite seu peso: ").replace(/,/g, ".");
} while (!parseFloat(peso));

diagnostico(nome, sexo, idade, altura, peso);