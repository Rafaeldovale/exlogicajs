/*27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
mostrando uma mensagem no final, de acordo com a média atingida:
 - Média até 4.9: REPROVADO
 - Média entre 5.0 e 6.9: RECUPERAÇÃO
 - Média 7.0 ou superior: APROVADO*/

 function calcular(){
    
 var nota1 = parseFloat(document.getElementById('nota1').value)
 var nota2 = parseFloat(document.getElementById('nota2').value)
 
    
    var media = ((nota1 + nota2)/2)

     if(media >= 7 && media<=10){
        alert ("Aprovado")
    }else if(media >= 5 && media <7) {
        alert("recuperação")
    } else {
        alert("Reprovado")
        }
}
        