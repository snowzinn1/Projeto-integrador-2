import { calcularMedia } from './funcoes.js'

import prompt from 'prompt-sync'
const ler = prompt();

console.log('-- PROGRAMA DA MÉDIA --');

console.log('Informe a primeira nota:');
let nota1 = Number(ler());

console.log('Informe a segunda nota:');
let nota2 = Number(ler());

console.log('Informe a terceira nota:');
let nota3 = Number(ler());

let med = calcularMedia(nota1, nota2, nota3);

console.log('A média é ' + med);