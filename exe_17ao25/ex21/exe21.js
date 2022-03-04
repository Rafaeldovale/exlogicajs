/*21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
BISSEXTO.
*/
function mostrar(){
    var ano = parseInt(document.getElementById("ano").value)

    var biss = ano % 4

    if (biss == 0){
        alert(' Esse ano '+ano +' é bissexto')
    }else{
        alert('Esse ano '+ano + ' Não é bissexto')
    }
}