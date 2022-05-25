/*49) Crie um programa que leia 6 números inteiros e no final mostre quantos deles
são pares e quantos são ímpares.*/

/*var a = prompt('Digite o valor:');
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
*/

var cont = 1;
var par = 0;
var impar = 0;

while(cont <= 6){
    var numero = prompt('Digite o valor ->'+cont+'º');
    //numero = parseInt(numero);
    cont ++;
    console.log(numero)
    if( numero % 2 == 0 ){
        numero = par;
        par ++;
        console.log(' esse número é par!');
    }else{
        numero = impar;
        impar++;
        console.log(' Esse é impar')
    }
}