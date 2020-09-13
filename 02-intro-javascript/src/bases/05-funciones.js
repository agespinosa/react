
/*function saludar(parametro) {
    return `Saluda ${parametro}`;
}

saludar= 5;*/
const saludar= function(parametro){
    return  `Saluda ${parametro}`;
}
const saludar2 = (parametro)=> `Saluda ${parametro}`;
const saludar3 = ()=> `Saludar3 sin parametro`;


let parametro= 'Luis';

console.log(saludar(parametro));
console.log(saludar2(parametro));
console.log(saludar3());

const getUser= ()=>(
    {
        nombre: 'master',
        apodo: 'universe',
    }
)

const user= getUser();
console.table(user)

const getUsuarioActivo= (nombre)=> ({
        uuid: 'ABSD312',
        name: 'Gustavo'
    });

const myUser= getUsuarioActivo('Gustavo');
console.table(myUser);
