/*50) Desenvolva um programa que faça o sorteio de 20 números
entre 0 e 10 e mostre na tela:
a) Quais foram os números sorteados
b) Quantos números estão acima de 5
c) Quantos números são divisíveis por 3*/

var cont = 0;
var maior = 0;
var div = 0;
var sort = [1,2,3,4,5,6,7,8,9,10];

while(cont < 20){
    var random = Math.floor(Math.random() * sort.length);
    console.log(sort[random]);
    cont++;

    var numero = sort[random];

    if(numero > 5){
        maior++;
    }
    if(numero % 3 ==0){
        div++;
    }

}
console.log("Maior que 5! Qt=>"+ maior);
console.log("Divisivel por 3 Qt=> "+ div);