/*19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento (se ficou acima da média 7.0).*/

function calcular(){
    var nota1 = parseFloat(document.getElementById("nota1").value)

    var nota2 = parseFloat(document.getElementById("nota2").value)

    var media = (nota1 + nota2)/2

    if(media >= 7.0){
        alert( 'Voce foi aprovado pela sua nota '+ media)
    }else{
        alert ('Você não foi aprovado! Sua nota ficou abaixo da media '+ media)
    }
}