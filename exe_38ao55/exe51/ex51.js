/*51) Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
qual foi o maior e qual foi o menor preço digitados.*/

var cont = 1;
var valorMaior = 0;
var valorMenor = 65536;

while(cont <= 8){
    var valor = prompt("Digite o valor do produto R$")
    valor = parseFloat(valor);
    cont++;
    console.log(valor);
        if(valor > valorMaior){
            valorMaior = valor;
            
        }if(valor < valorMenor){
            valorMenor = valor;
            
        }

}
    console.log("O produto mais caro teve o valor de: R$", valorMaior)
    console.log("O produto mais barato teve o valor de: R$", valorMenor);

