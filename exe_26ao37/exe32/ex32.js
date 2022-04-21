/*32) [DESAFIO] Crie um jogo onde o computador vai sortear um 
número entre 1 e 5 o jogador vai tentar descobrir qual foi o valor sorteado.*/


function sortear(){
    var ale = parseInt(document.getElementById('aleatorio').value);

    var resp = document.getElementById('resp');
    alert  (Math.floor(5* Math.random() + 1))

    if(ale === resp){
        alert('Você acertou o número: '+ resp)    
    }else{
        alert('tente outra vez')
    }
}