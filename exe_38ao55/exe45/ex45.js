/*45) O programa acima vai ter um problema quando digitarmos o primeiro valor
maior que o último. Resolva esse problema com um código que funcione em qualquer
situação.*/

var a = prompt("Digite o primeiro valor: ");
a = parseInt(a);

var b = prompt("Digite o último valor: ");
b = parseInt(b);

var c = prompt("Digite o incremento: ");
c = parseInt(c);


if (a <= b){
    while( a <= b){
        console.log(a);
        a = a+c;
    }
}else {
    while( b <= a){
        console.log(b);
        b = b+c;
    }
}
console.log('Acabou!')