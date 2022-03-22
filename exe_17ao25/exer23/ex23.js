/*23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer 
dar descontos para todos, mas especialmente para mulheres. 
Faça um programa que leia nome, sexo e o valor das compras 
do cliente e calcule o preço com desconto. Sabendo que:
 - Homens ganham 5% de desconto
 - Mulheres ganham 13% de desconto*/

 function enviar(){
    var preco = parseFloat(document.getElementById("compra").value)
    var genero = document.querySelector('input[name="sex"]:checked').value
    var nome = document.getElementById("nome").value
    if(genero == 'Masculino'){
        var desM = preco - (preco*0.05) 
        alert ('Olá '+nome+' sua compra ficou em R$'+preco+'\n'+
        'O valor já com o desconto para genero '+genero+' é de R$'+desM)
    }else{
        var desF = preco - (preco *0.13)
        alert ('Olá '+nome+' sua compra ficou em R$'+preco+'\n'+
        'O valor já com o desconto para genero '+genero+' é de R$'+desF)
    }
    //alert(preco)
    //alert(genero)
 }