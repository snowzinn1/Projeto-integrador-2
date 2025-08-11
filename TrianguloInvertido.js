import prompt from 'prompt-sync'
const ler = prompt ();

console.log('== Triangulo invertido ==');

console.log('Informe o tamanho do triangulo');
let tamanho = Number (ler());

for(let i = tamanho; i >= 1; i--){
    let linha = ''
    for(let j = 1; j <= i; j++){
        linha += '*';
    }
    console.log(linha);
}