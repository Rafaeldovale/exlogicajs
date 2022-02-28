/*15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o
salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
por hora trabalhada.*/

let dia = prompt('Quantos dias trabalhou nesse mês')
dia = parseInt(dia)

let salario = (8 * 25) * dia

alert("Você trabalhou "+dia+" dias e recebeu a contia de R$"+salario)