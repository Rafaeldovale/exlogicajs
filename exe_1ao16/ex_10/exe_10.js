/*10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados*/

var altura = prompt("Digite a altura:")
altura = parseFloat(altura)

var largura = prompt ("Digite a largura:")
largura = parseFloat(largura)

var area = altura * largura
var tinta = area *0.5

alert("A área a ser pintada "+ area+"m²"+"\n"+ "A quantidade de tinta que precisa "+tinta+"L")