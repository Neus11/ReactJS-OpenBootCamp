//Funcion siempre devuelve true

function simepreTrue() {
    return true;
}

console.log(simepreTrue());

//Promesa despues de 5 segundo

const funcAsinc = new Promise((resolve, reject)=> {
   setTimeout( () => resolve(), 5000);

})

funcAsinc
    .then(() => console.log("Hola soy una promesa"));

// Funcion generadora de indices pares automaticos



function* indices() {
    let i = 0;
    while(true) {
        i += 2
        yield i
        if(i === 10) {
            return
        }
    }
}

const indice = indices();

console.log(indice.next());
console.log(indice.next());
console.log(indice.next());
console.log(indice.next());
console.log(indice.next());

