/*12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
PREÇO PROMOCIONAL, com 5% de desconto.*/

var valor = prompt("Digite o valor inicial do produto:")
valor = parseFloat(valor)

var desconto = (valor * 5)/100

alert("O desconto do valor de R$" + valor + " Foi de R$" + desconto)