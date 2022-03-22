/*24) Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem,
cobrando R$0.50 por Km para viagens até 200Km e R$0.45 
para viagens mais longas.*/

function calcular(){
    var distancia = parseInt(document.getElementById("distancia").value )
    // alert(distancia)
    var disLonga = (distancia * 0.45)
    var disCurta = (distancia * 0.5)

    if(distancia < 200){
        alert('Você vai percorrer '+ distancia+'km. O valor do percuso será R$'+ disCurta)
    }else{
        alert('Você vai percorrer '+ distancia+'km. O valor do percuso será R$'+ disLonga)

    }

}