/*11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
segundo grau e mostre o valor de Delta.*/


var A = prompt("Digite o valor de A:")
A = parseFloat(A)

var B = prompt("Digite o VAlor de B:")
B = parseFloat(B)

var C = prompt("Digite o valor de C:")
C = parseFloat(C)

var delta = ((B*B)-4*(A*C))

alert(" O valor do Delta será "+ delta)