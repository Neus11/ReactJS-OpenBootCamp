let nombre = "Neus";

let apellido = "Calvo";

//let estudiante = nombre + " " +  apellido;
//let estudiante = `${nombre} ${apellido}`;
let estudiante = nombre.concat(" ", apellido);

console.log(estudiante);

let estudianteMayus = estudiante.toLocaleUpperCase();

console.log(estudianteMayus);

let estudianteMinus = estudiante.toLocaleLowerCase();

console.log(estudianteMinus);

let caracteres = estudiante.length;

console.log(caracteres);

let primeraLetra = nombre.charAt(0);
console.log(primeraLetra);

let ultimaLetra = apellido.charAt(4);
console.log(ultimaLetra);

let sinEspacios = estudiante.replace(" ","");
console.log(sinEspacios);

console.log(estudiante.includes(nombre));