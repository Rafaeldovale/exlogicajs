/*6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
sucessor.
Ex:
Digite um número: 9
O antecessor de 9 é 8
O sucessor de 9 é 10*/

var a = prompt("Digite um numero:")
a = parseInt(a)

var ant = a-1
var suc = a+1

alert("O antecessor de "+a+" é " + ant +"\n"+ "O sucessor de "+a+" é "+ suc)