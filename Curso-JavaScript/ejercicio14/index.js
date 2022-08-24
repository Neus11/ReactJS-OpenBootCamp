const nombre = "Neus"
const apellido = "Calvo"

const obj = {nombre, apellido}

console.log(obj)

sessionStorage.setItem("nombre", JSON.stringify(obj))
localStorage.setItem("nombre", JSON.stringify(obj))

const now = new Date()
document.cookie = `nombre = ${JSON.stringify(obj)}; expires = ${new Date(now.getTime() + 2*6000)}`