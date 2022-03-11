/*22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
 - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
 - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.*/


function verificar(){
    var idade = parseInt(document.getElementById("alistar").value)
    var falta = 18 - idade
    var passou = idade - 18
    if(idade >= 18){
        alert( 'Você tem a idade '+idade+' anos e já pode alistar, já se passaram'+passou+'anos')
    }else{
        alert('Você '+idade+' anos ainda falta '+falta+' para alistar')
    }
}