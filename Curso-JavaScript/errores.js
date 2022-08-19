try {
    let i = false;

    if(i == true) {
        console.log("Estoy dentro del try");
    } else {
        throw Error
    }

} catch (e) {
    console.error(`Estoy en el catch y el error es este: ${e}`)

}