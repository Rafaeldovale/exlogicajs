/*33) Escreva um programa para aprovar ou não o empréstimo bancário 
para a compra de uma casa. O programa vai perguntar o valor da 
casa, o salário do comprador e em quantos anos ele vai pagar. 
Calcule o valor da prestação mensal, sabendo que ela não pode 
exceder 30% do salário ou então o empréstimo será negado.*/

function calcular(){
    var casa = prompt("Qual o valor da casa:")
    casa= parseFloat(casa)

    var salario = prompt("Qual o seu salário")
    salario=parseFloat(salario)

    var tempo = prompt("Em quantas parcelas vai fazer:")
    tempo = parseInt(tempo)

    var prestacao = casa / tempo
    var salarioEx = (salario * 0.3)

    if(prestacao > salarioEx){
        alert ('Emprestimo não aprovado!! Calculo de 30% da sua renda é de R$'+salarioEx+'\n'+
        'comprometimento da renda é menor que prestação da casa '+ prestacao)
    }else{
        alert('Credito aprovado!!! A prestação será R$'+prestacao)
    }
}