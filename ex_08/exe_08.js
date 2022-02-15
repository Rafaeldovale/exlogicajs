/*8) Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm*/

var distancia = prompt("Digite sua distancia em metros:")
distancia = parseFloat(distancia)

var km = distancia / 1000
var hm = distancia / 100 //hectômetro 1 metro x 100
var dam = distancia / 10
var dm = distancia * 10
var cm= distancia *100
var mm = distancia *1000

alert(km + " km"+ "\n" +hm +"hm" + "\n" + dam +" dam" + "\n" 
        + dm + "dm" + "\n" + cm +" cm" + "\n" + mm + " mm")