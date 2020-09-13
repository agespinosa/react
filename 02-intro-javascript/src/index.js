const personajes= ['Goku', 'Vegeta', 'Trunks'];
const [,,p3]= personajes;

console.log(p3);

const retornaArreglo=()=>(
    ['ABC', 557]
);
const [letras, numero]= retornaArreglo();
console.log(letras, numero);

// Tarea
const useState= (valor)=>{
        return [valor, ()=>{console.log('Saludos desde la funcion')}]
}
const [nombre, setNombre]= useState('Eber');
console.log(nombre);
setNombre();