/*14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.*/

var km = prompt("Quantos km foram percorridos:")
km = parseFloat(km)


var dias = prompt("Quantos dias foi alugado:")
dias = parseFloat(dias)

novokm = km * 0.2
novodia = dias * 90

totalpagar = novokm + novodia

alert("O total de km percorrido foi de "+km+ " e ficou em R$"+novokm+ "\n"+
        "O total de dias alugado foi "+ dias+ "dia! O valor a ser cobrado fica em "+ novodia+ "\n"+
        "O total a ser pago será R$"+totalpagar)