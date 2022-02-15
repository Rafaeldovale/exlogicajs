/*9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.*/

var valor = prompt("Qual o valor que quer coverter em US$:")
valor = parseFloat(valor)

var dolar = valor /3.45

alert ("Seu valor em real é R$"+ valor+ "convertido em dolar fica em US$"+dolar)