const persona={
    nombre: 'Gustavo',
    apellido: 'Espinosa',
    edad: 38,
    direccion: {
        ciudad: 'Santa Fe',
        codigoPosta: 3000,
        lat: -31.6220256,
        lng: -60.695864,

    }
}

const persona2= {...persona};
persona2.nombre= 'Fernando';

console.table(persona);
console.table(persona2);
