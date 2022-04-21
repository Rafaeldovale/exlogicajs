/*35) Uma empresa de aluguel de carros precisa cobrar pelos seus
serviços. O aluguel de um carro custa R$90 por dia para carro
popular e R$150 por dia para carro de luxo. Além disso, o cliente
paga por Km percorrido. Faça um programa que leia o tipo de carro 
alugado (popular ou luxo), quantos dias de aluguel e quantos Km
foram percorridos. No final mostre o preço a ser pago de acordo com a
tabela a seguir:
 - Carros populares (aluguel de R$90 por dia)
 - Até 100Km percorridos: R$0,20 por Km
 - Acima de 100Km percorridos: R$0,10 por Km
 - Carros de luxo (aluguel de R$150 por dia)
 - Até 200Km percorridos: R$0,30 por Km
 - Acima de 200Km percorridos: R$0,25 por Km*/
function calcular(){

    var carro = document.querySelector('input[name=carro]:checked').value  
    var km = parseInt(document.getElementById('km').value)
    var dias = parseInt(document.getElementById('dias').value)

    if(carro === 'popular'){

        if((carro == 'popular') && (km <100)){
            var populares = ((dias * 90)+ (km * 0.20))
            alert('O valor a pagar será R$'+populares)
        }
        else if((carro == 'popular')&& ( km >= 100))
        {
            var popularesII = ((dias * 90)+(km * 0.10 ))
            alert('Passou de 100km percorrido! O valor a pagar será R$'+popularesII)
        }
    }

    if (carro === 'luxo'){

        if((carro == 'luxo') &&  (km < 200)){
            var luxos = ((dias * 150) + (km * 0.30))
            alert('O valor a pagar será R$'+luxos)
        }
        else if ((carro == 'luxo')&& (km >= 200))
        {
            var luxosII = ((dias * 150) + (km * 0.25))
            alert('Passou de 200 km percorridos! O valor a pagar será R$'+luxosII)

        }
    }
}