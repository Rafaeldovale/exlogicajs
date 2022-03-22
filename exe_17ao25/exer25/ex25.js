/*25) [DESAFIO] Crie um programa que leia o tamanho de três 
segmentos de reta. Analise seus comprimentos e diga se é 
possível formar um triângulo com essas retas. Matematicamente, 
para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois.*/

function calcular(){

var A = parseInt(document.getElementById('A').value)
var B = parseInt(document.getElementById('B').value)
var C = parseInt(document.getElementById('C').value)

    if(A==0 || B==0 || C==0){
        alert('Não é possivel calcular o lado do triângulo no valor de 0')
    }else if (A+B<C||A+C<B||B+C<A){
        alert('Os valores A='+ A +'B = '+ B +'C = '+ C +' Não são lados de um triângulo')
    }else{
        alert('Esses valores A='+ A +'B = '+ B +'C = '+ C +'SÃO LADOS DE UM TRIÂNGULO')
    }
}
