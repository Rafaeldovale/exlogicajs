/*43) Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...*/

var i = 31;
var r = 0;

while (i > 0){
    //console.log(i)
    i--
    r = i %4
    if(r == 0){
        console.log('['+i+']')
    }else{
        console.log(i)
    }
}