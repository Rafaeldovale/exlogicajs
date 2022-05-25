/*46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
8 + 10 + 12 + 14 + ... + 98 + 100.*/

var cont = 6;

var a = 0;

var c = 2;

while(cont <=100){
    console.log(cont);
    a = cont + a;
    cont = cont + c;
}

console.log('a soma foi '+a);