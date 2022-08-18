const datos = { 
    nombre: "Neus", 
    apellido: "Calvo", 
    edad: 39, 
    altura: 160, 
    eresDesarrollador: true 
};

const miEdad = datos.edad;
console.log(miEdad);

const datosAmigos = [
    { 
        nombre: "Neus", 
        apellido: "Calvo", 
        edad: 39, 
        altura: 160, 
        eresDesarrollador: true 
    },
    { 
        nombre: "Jani", 
        apellido: "Iborra", 
        edad: 32, 
        altura: 170, 
        eresDesarrollador: true 
    },
    { 
        nombre: "Marta", 
        apellido: "Rafa", 
        edad: 35, 
        altura: 168, 
        eresDesarrollador: false 
    }
];

const ordenados = datosAmigos.sort((a,b) => b.edad - a.edad);

console.log(ordenados);

