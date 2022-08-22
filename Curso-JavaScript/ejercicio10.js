class Estudiante {
    nombre = "Juan";
    asignaturas = ['JavaScript', 'HTML', 'CSS']

    obtenDatos() {
        let datos = [this.nombre, this.asignaturas]
        return datos
    }
}

const nuevo_estudiante = new Estudiante();
console.log(nuevo_estudiante.obtenDatos());