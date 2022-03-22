/*30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso 
de mostrar que tipo de triângulo será formado:
 - EQUILÁTERO: todos os lados iguais
 - ISÓSCELES: dois lados iguais
 - ESCALENO: todos os lados diferentes*/

 function mostrar(){
     var r1 = parseFloat(document.getElementById('reta1').value)
     var r2 = parseFloat(document.getElementById('reta2').value)
     var r3 = parseFloat(document.getElementById('reta3').value)

    if(r1 == r2 && r1==r3  && r2==r3){
        alert ('EQUILÁTERO: todos os lados iguais')

    }else if (r1 == r2 || r1 == r3 || r2 == r3){
        alert ('ISÓSCELES: dois lados iguais')
    
    }else if(r1 != r2 && r1 != r3 && r2 != r3){
        alert ('ESCALENO: todos os lados diferentes')
    }
 }