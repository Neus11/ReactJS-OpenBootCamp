let listaCompra = ["Pan", "Huevos", "Aceite", "Leche", "Patatas"];
listaCompra.push("Aceite girasol");
console.log(listaCompra);

listaCompra.pop();
console.log(listaCompra);

let peliculas = [
    {
        titulo: "Titanic", 
        director: "James Cameron", 
        fecha: new Date (2000, 5, 5)
    },
    {
        titulo: "Matrix", 
        director: "Watchosky Sis", 
        fecha: new Date (1990, 7, 7)
    },
    {   
        titulo: "Eternal Sunshine", 
        director: "Michel Gondry", 
        fecha: new Date (2005, 6, 6) 
    }
]

let peliculaReciente = peliculas.filter(pelicula =>pelicula.fecha > new Date(2000, 5, 5));

console.log(peliculaReciente);

let directores = peliculas.map(pelicula => {
    return pelicula.director
});

console.log(directores);

let titulos = peliculas.map(nombre => {
    return nombre.titulo
});

console.log(titulos);

let direct_titulos = directores.concat(titulos);

console.log(direct_titulos);

let director_titulo_prop = [...directores, ...titulos];
console.log(director_titulo_prop)

