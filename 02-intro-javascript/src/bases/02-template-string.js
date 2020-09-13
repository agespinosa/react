const nombre= 'Gustavo';
const apellido= 'Espinosa';

const nombreCompleto= `mi nombre es: ${nombre} y mi aplellido ${apellido}` ;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return ` La funcion nos saluda con el parametro: ${nombre}`;
}

console.log(`retorna: ${getSaludo(nombre)}`);