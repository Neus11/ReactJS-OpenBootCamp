// fechas

let fechaHoy = new Date();

console.log(fechaHoy);

const fechaNacimiento = new Date(1982, 08, 06);

console.log(fechaNacimiento);

console.log(fechaHoy > fechaNacimiento);

const miDia = fechaNacimiento.getDate();
console.log(miDia);

const miMes = fechaNacimiento.getMonth() + 1;
console.log(miMes);

const miAnyo = fechaNacimiento.getFullYear();
console.log(miAnyo);









