/*36) Um programa de vida saudável quer dar pontos atividades 
físicas que podem ser trocados por dinheiro. O sistema funciona 
assim:
 - Cada hora de atividade física no mês vale pontos
 - até 10h de atividade no mês: ganha 2 pontos por hora
 - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
 - acima de 20h de atividade no mês: ganha 10 pontos por hora
 - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos) */


function calcular(){
 //var atividade = prompt("Quantas horas você praticou esse mês:")
 //atividade = parseFloat(a)
var atividade = document.getElementById('atividade').value

 if (atividade < 10){
     var pts = 2
     alert('Você somou dois pontos!')
     var fatura = pts *0.05
     alert ('Você faturou R$'+fatura+' em troca do seus pontos')
 }
 else if (atividade >= 10 && atividade < 20){
    var pts1 = 5
    alert('Você somou 5 pontos!')
    var fatura1 = pts1 * 0.05
    alert ('Você faturou R$'+fatura1+' em troca do seus pontos')
 }

 else //if (atividade >= 20)
 {
    var pts2 = 10
    alert('Você somou 10 pontos!')
    var fatura2 = pts2 *0.05
    alert ('Você faturou R$'+fatura2+' em troca do seus pontos')
 }
}