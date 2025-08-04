import prompt from 'prompt-sync'
const ler = prompt();

console.log('== média final ==');

console.log('informe o primeiro número:');
let n1 = Number(ler());

console.log('informe o primeiro número:');
let n2 = Number(ler());

console.log('informe o primeiro número:');
let n3 = Number(ler());


 let media = (n1+n2+n3) /3;


 let situação = ''
 if (media >= 6 ){
  situação = 'aprovado';  
 }
else {
    situação = 'DP';
}

console.log(`Média: ${media}
    Situação ${situação}
    `)