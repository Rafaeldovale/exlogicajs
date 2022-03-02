/*7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
sua terça parte.
Ex:
Digite um número: 3.5
O dobro de 3.5 é 7.0
A terça parte de 3.5 é 1.16666*/

var a = prompt("Digite um número:")
a = parseFloat(a)

var dobro = a * 2

var terca = a/3

alert("O dobro de "+ a+" é"+dobro+"\n"+"A terça parte de "+a+" é "+terca)