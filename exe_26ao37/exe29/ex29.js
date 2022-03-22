/*29) Desenvolva um programa que leia o nome de um funcionário,
seu salário, quantos anos ele trabalha na empresa e mostre
seu novo salário, reajustado de acordo com a tabela a seguir:
 - Até 3 anos de empresa: aumento de 3%
 - entre 3 e 10 anos: aumento de 12.5%
 - 10 anos ou mais: aumento de 20%*/

 function enviar(){

    var nome = document.querySelector('#nome')
    var salario = parseFloat(document.getElementById('salario').value)
    var anos = parseInt(document.getElementById('anos').value)

    if(anos <3){
        var reajust1 = (salario * 0.03)+salario
        alert ('Sr(a) '+nome+' seu salário era R$'+salario+' agora com reajuste de 3% ficou R$'+reajust1)
    
    }else if(anos >= 3 && anos <10){
        var reajust2 = (salario *0.125)+salario
        alert ('Sr(a) '+nome+' seu salário era R$'+salario+' agora com reajuste de 12,5% ficou R$'+reajust2)

    }else{
        var reajust3 = (salario * 0.2)+salario
        alert ('Sr(a) '+nome+' seu salário era R$'+salario+' agora com reajuste de 3% ficou R$'+reajust3)

    }
 }