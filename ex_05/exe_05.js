/*5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
na tela a sua média na disciplina.
Ex:
Nota 1: 4.5
Nota 2: 8.5
A média entre 4.5 e 8.5 é igual a 6.5*/ 

var a = prompt("Entre com a 1º nota")
a = parseFloat(a)

var b = prompt("Entre com a 2º nota")
b = parseFloat(b)

var result = (a+b)/2
alert("A média entre "+a+" e "+b+" é igual a "+result)