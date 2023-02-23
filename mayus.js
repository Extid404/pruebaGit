const question = prompt('Ingresa un número');
let numeroPares = 0;  // variable para almacenar los números pares encontrados
for(let i=0; i<=question; i++){
    if(i % 2 == 0){
        console.log(i);
        numeroPares++;
    }
}
console.log('Existen ' + numeroPares + ' números pares entre 0 y ' + question);

