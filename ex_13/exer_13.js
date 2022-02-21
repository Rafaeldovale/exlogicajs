/*13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
seu novo salário, com 15% de aumento.*/

var salario = prompt("Digite seu salário:")
salario = parseFloat(salario)

var novoSalario = (salario * 0.15) + salario

alert("O seu salário de R$"+ salario+" Teve um reajuste de 15% e foi alterado para R$"+novoSalario)