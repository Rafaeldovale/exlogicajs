/*28) Faça um programa que leia a largura e o comprimento de um terreno
retangular, calculando e mostrando a sua área em m². O programa também
devemostrar a classificação desse terreno, de acordo com a lista abaixo:
 - Abaixo de 100m² = TERRENO POPULAR
 - Entre 100m² e 500m² = TERRENO MASTER
 - Acima de 500m² = TERRENO VIP*/

 function calcular(){
     var lar = parseFloat(document.getElementById('largura').value);
     var com = parseFloat(document.getElementById('comp').value);

     var terreno = lar * com;

     if(terreno <100){
         alert('terreno popular '+terreno+'m²')

     }else if(terreno >= 100 && terreno < 500){
         alert('terreno Master '+terreno+'m²')

     }else{
         alert('terreno vip '+terreno+'m²')
     }
 }