/*31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)*/

function jogar(){
    var m1 = document.querySelector('input[name=adv1]:checked').value
    var m2 = document.querySelector('input[name=adv2]:checked').value
   /* 
    alert(m1)
    alert(m2)
    */
        if(m1 === m2){
            alert('Deu empate')
        }
        else if(m1 === 'papel' && m2==='tesoura'){
            alert('Adversário 2 ganhou')
        }
        else if (m1 === 'papel' && m2 === 'pedra'){
            alert('Adversário 1 ganhou')
        }
        else if(m1 === 'pedra' && m2 ===' tesoura'){
            alert('Adversário 1 ganhou')
        }
        else if (m1 ==='pedra' && m2==='papel'){

            alert('Adversário 2 ganhou')
        }
        else if (m1==='tesoura' && m2==='papel'){
            alert('Adversário 1 ganhou')
        }
        else if(m1 === 'tesoura' && m2 ==='pedra'){
            alert('Adversário 2 ganhou')
        }
    }