/*20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
ÍMPAR.*/
function resultado(){
var numero = parseInt(document.getElementById("numero").value)

var result = numero %2

if (result == 0){
    alert ('Este numero '+numero+' é par')
}else{
    alert('Este numero '+ numero+' é impar')
}
}