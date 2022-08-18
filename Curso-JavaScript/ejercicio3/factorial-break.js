let factorial = 1;
let contador = 10;


while(contador) {

    factorial = factorial * contador;
    contador--;

    if(contador == 1){
        break;
    }

}
console.log("El factorial de 10 es: " + factorial);
