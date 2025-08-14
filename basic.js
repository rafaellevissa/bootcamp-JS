const booleanTrue = true
const booleanFalse = false
let string = "string"
var number = 1
const vetor = [1,2,3,4,5,6]

/*
No JavaScript, var é function-scoped (vale para toda a função) e sofre hoisting com inicialização 
como undefined, enquanto let é block-scoped (vale só dentro do bloco {} onde foi declarado)
*/

let nulo = null;
console.log("Null:", nulo);

function funcao(parametro){
    return parametro + 1
}

console.log(funcao(number))

if (number >= 5){
    console.log("maior igual a 5")
}else{
    console.log("menor que 5")
}
for (let i = 0; i < vetor.length; i++) {
  console.log("for", vetor[i]);
}

let i = 0;
while (i < vetor.length) {
  console.log("while:", vetor[i]);
  i++;
}

let day = 3; // 1 = segunda, 2 = terça, 3 = quarta...

switch (day) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Dia inválido");
}

soma = number + 1
console.log(soma)
subtracao = number - 3
console.log(subtracao)
multiplicacao = number * 5
console.log(multiplicacao)
divisao = number / 2
console.log(divisao)
restodaDivisao = number % 2
console.log(restodaDivisao)

console.log(booleanTrue && booleanFalse)
console.log(booleanTrue || booleanFalse)
console.log(!booleanTrue)

const pessoa = { nome: "Ana", idade: 25 };
for (const chave in pessoa) {
  console.log(`Object: ${chave} = ${pessoa[chave]}`);
}

const hoje = new Date();
console.log("Date:", hoje.toISOString());

const conjunto = new Set([1, 2, 2, 3]);
conjunto.forEach((valor) => console.log("Set:", valor));

const mapa = new Map([
  ["chave1", "valor1"],
  ["chave2", "valor2"],
]);
mapa.forEach((valor, chave) => console.log(`Map: ${chave} => ${valor}`));

let a;
console.log(a); 
console.log(typeof a); 

let b = null;
console.log(b); 
console.log(typeof b);

if (a === undefined) {
  console.log("a não foi inicializada");
}

if (b === null) {
  console.log("b foi intencionalmente definido como vazio");
}
