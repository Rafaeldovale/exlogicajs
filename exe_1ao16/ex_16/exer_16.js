/*16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias.*/

var fumoPorDia = prompt('Quantos cigarros você fuma por dia')
fumoPorDia = parseInt(fumoPorDia)

var fumoPorAno = prompt('Quantos anos você fuma')
fumoPorAno = parseInt(fumoPorAno)

var FumoNAVida = (fumoPorDia * 365) * fumoPorAno

var fumoEmMinuto = ((fumoPorDia * 365)*fumoPorAno)*10

var percaDeVida =  fumoEmMinuto /1440
percaDeVida = parseInt(percaDeVida)

alert('Você fumou '+fumoPorDia+' cigarros por dia'+'\n'+
        'A quantidade de cigarros em minutos foi '+fumoEmMinuto+'\n'+
        'Então com isso você perdeu '+percaDeVida+' dias da sua vida')