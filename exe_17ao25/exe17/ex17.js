/*17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.*/

function calcular(){
    var velocidade = parseInt(document.getElementById("velocidade").value)

    var multa = (velocidade - 80)*5

    var velocidadeAcima = velocidade - 80

    if(velocidade > 80){
        alert('Voce foi multado pela velocidade acima do permitido! Velocidade = '+velocidade+'km'+'\n'+
        "Sua multa ficou em R$"+multa+' por ter ultrapassado a velocidade permitida acima '+velocidadeAcima+'km')
    }else{
        alert('Boa Viajem!')
    }
}