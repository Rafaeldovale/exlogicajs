/*48) Faça um programa que leia 7 números inteiros e no final mostre o somatório
entre eles.*/
/*
var a = prompt('Digite o valor:');
    a = parseInt(a)

var b = prompt('Digite o valor:');
    b = parseInt(b)

var c = prompt('Digite o valor:');
    c = parseInt(c)

var d = prompt('Digite o valor:');
    d = parseInt(d)

var e = prompt('Digite o valor:');
    e = parseInt(e)

var f = prompt('Digite o valor:');
    f = parseInt(f)

var g = prompt('Digite o valor:');
    g = parseInt(g)

var cont = a + b + c + d + e + f + g;
console.log(cont)

while (cont <= 7){
    console.log(cont)
    cont ++;
   
}*/

var cont = 1;
var soma = 0;

while(cont <= 7){
    var numero = prompt('Digite o Valor: '+ cont +'º');
    cont++;
    console.log('=>' +numero)
    soma = soma + numero++;
    
}

console.log('A soma foi '+ soma);

