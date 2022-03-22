/*26) Escreva um algoritmo que leia dois números inteiros e
compare-os, mostrando na tela uma das mensagens abaixo:
 - O primeiro valor é o maior
 - O segundo valor é o maior
 - Não existe valor maior, os dois são iguais*/

 function mostrar(){
     var numero1 = parseFloat(document.getElementById('numero1').value)
     var numero2 = parseFloat(document.getElementById('numero2').value)

     if (numero1 > numero2){
         alert (numero1+'  <=o primeiro  valor é maior=> '+numero2)
     }else
        alert(numero1 + ' <=o segundo valor é maior=> '+numero2)
 }