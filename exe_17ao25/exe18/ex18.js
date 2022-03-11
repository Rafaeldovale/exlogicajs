/*18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar.*/

function calcular(){
    var idade = parseInt(document.getElementById("idade").value)

    var ano = new Date();
    var anoAtual = ano.getFullYear()
    //console.log(anoAtual);
    var calIdade = anoAtual - idade

    if(calIdade>= 18 && calIdade <= 65) {
        alert ("Você está na faixa etária para votar! Sua idade é "+calIdade+" anos")
    }
    else if ((calIdade <= 17 && calIdade >= 16) || (calIdade >65)) {
        alert("Você não tem a obrigação de votar! Pois sua idade é "+calIdade+" anos")
    
    }else{
        alert ("Você não precisa votar! Não tem idade minima "+calIdade+" anos")
    }
}