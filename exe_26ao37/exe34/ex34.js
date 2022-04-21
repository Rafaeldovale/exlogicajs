/*34) O Índice de Massa Corpórea (IMC) é um valor calculado 
baseado na altura e no peso de uma pessoa. De acordo com o valor
do IMC, podemos classificar o indivíduo dentro de certas faixas.
 - abaixo de 18.5: Abaixo do peso
 - entre 18.5 e 25: Peso ideal
 - entre 25 e 30: Sobrepeso
 - entre 30 e 40: Obesidade
 - acima de 40: Obseidade mórbida

 Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado
    da altura)*/

 function verificar(){
     var altura = parseFloat(document.getElementById('altura').value)
     var peso =parseFloat(document.getElementById('peso').value)

     var imc = peso /(altura * altura)

     if(imc < 18.5){
         alert('Abaixo do peso')
     }
     else if(imc >= 18.5 && imc < 25){
         alert('Peso ideal')
     }
     else if(imc>= 25 && imc < 30){
         alert('Sobre peso')
     }
     else if(imc >= 30 && imc < 40){
         alert ('Obsidade')
     }
     else {
         alert('Obsidade mórbida')
     }
 }