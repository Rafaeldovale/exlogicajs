/*37) Uma empresa precisa reajustar o salário dos seus funcionários,
dando um aumento de acordo com alguns fatores. Faça um programa
que leia o salário atual, o gênero do funcionário e há quantos 
anos esse funcionário trabalha na empresa. No final, mostre o seu
novo salário, baseado na tabela a seguir:
- Mulheres
 - menos de 15 anos de empresa: +5%
 - de 15 até 20 anos de empresa: +12%
 - mais de 20 anos de empresa: +23%
- Homens
 - menos de 20 anos de empresa: +3%
 - de 20 até 30 anos de empresa: +13%
 - mais de 30 anos de empresa: +25% */

 function calcular(){
     var genero = document.querySelector('input[name = genero]:checked').value
    
     var salario = parseFloat(document.getElementById('salario').value)
     var tempoTrabalho = parseInt(document.getElementById('tempo').value)
     
     if(genero === 'Masculino'){

        if(tempoTrabalho < 20) {
            var novoSalario = (salario *  0.03) + salario;
            alert(novoSalario)
        }
        else if (tempoTrabalho >= 20 && tempoTrabalho <30){

            var novoSalario = (salario *  0.13) + salario;
            alert(novoSalario)
        
        }
        else {
            var novoSalario = (salario *  0.25) + salario;
            alert(novoSalario)
        }
        
    }
    if(genero === 'Feminino'){

        if (tempoTrabalho < 15) {
            var novoSalario = (salario *  0.05) + salario;
            alert(novoSalario)
        }
        else if ((tempoTrabalho >= 15 && tempoTrabalho < 20)){

            var novoSalario = (salario *  0.12) + salario;
            alert(novoSalario)
        }
        else{
        //else if((genero == 'Feminino') && (tempoTrabalho >= 20) ){
            var novoSalario = (salario *  0.23) + salario;
            alert(novoSalario)
        }

    }
}