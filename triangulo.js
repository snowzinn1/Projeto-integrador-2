import prompt from 'prompt-sync'
const ler = prompt ();

console.log("== Triangulos == ");

console.log("Iforme o tamanho do triangulo");
let tamanho = Number (ler());

for(let i = 1; i <= tamanho; i++) {
    let linha=''
    for(let j = 1; j<= i; j++){
        linha += "x "
    }
    console.log(linha)

}