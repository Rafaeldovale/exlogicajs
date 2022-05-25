/*47) Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
450 + 400 + 350 + 300 + ... + 50 + 0*/

var cont = 500;
var a = 0;
var c = 50;

while(cont >= 0){
    console.log(cont);
    a = cont + a;
    cont = cont - c;
}

console.log("A soma da expressão foi: "+(a))