import prompt from 'prompt-sync'
const ler = prompt ();

console.log("== tabuada ==");

console.log("informe o primeiro numero");
let n1 = Number(ler());

console.log("informe o segundo numero");
let n2 = Number(ler());

for(let i = 0;i <= n2; i++) {
    console.log(`${n1} x ${i} = ${n1*i}`);
}