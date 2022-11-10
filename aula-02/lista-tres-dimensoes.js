const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(funcionarios)
console.log('Segundo Func: '+ funcionarios[0][1])
console.log('Idade: '+ funcionarios[1][1])
console.log('Tem Faculdade: '+ funcionarios[2][1])