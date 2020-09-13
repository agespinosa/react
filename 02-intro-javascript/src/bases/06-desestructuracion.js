const persona ={
    nombre: 'Gustavo',
    apellido: 'Espinosa',
    edad: 38,
};

const useContext= ({nombre,edad, rango= 'Soldado'}) =>{
    //console.log(nombre, edad);
    return {
        nombreClave: 'IronMan',
        poder: 'muy fuerte',
        georeferencia: {
            latitud: 35.12354,
            longitud: -25.132132,
        }
    }
}

const {nombreClave:advenger, poder, georeferencia:{latitud,longitud}}= useContext(persona);
console.log(advenger, poder, latitud, longitud);