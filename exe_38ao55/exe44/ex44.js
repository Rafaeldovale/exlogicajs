/*44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
incremento, mostrando em seguida todos os valores no intervalo:
Ex: Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!*/

var a = prompt("Digite o primeiro valor: ");
a = parseInt(a);

var b = prompt("Digite o último valor: ");
b = parseInt(b);

var c = prompt("Digite o incremento: ");
c = parseInt(c);

/*var a = 3
var b = 10
var c =2*/


while( a <= b){
    console.log(a);
    a = a+c;
}
console.log('Acabou!')