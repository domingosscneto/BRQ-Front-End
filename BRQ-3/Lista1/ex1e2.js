alert('Bom dia');
array = []
let numero1 = Number(prompt('Informe o primeiro número'));
let numero2 = Number(prompt('Informe o segundo número'));
let numero3 = Number(prompt('Informe o terceiro número'));

array.push(numero1);
array.push(numero2);
array.push(numero3);

maior = Math.max(...array);
console.log(maior);

alert(`Maior número informado: ${maior}`);