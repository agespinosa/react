import {findHeroesById} from "./bases/08-import-export";

/*const promesa= new Promise( (resolve, reject) => {
        setTimeout(()=>{
                const heroe= findHeroesById(2);
                //console.log(heroe)
                resolve(heroe);
               // reject(`No se puede encontrar el heroe${heroe}`);
        },2000)

});

promesa
    .then((heroe)=>{
        console.table(heroe);})
    .catch(err=> console.warn(err));*/

const getHeroeByIdAsync= (id) =>{
        return new Promise( (resolve, reject) => {
        setTimeout(()=>{
                const heroe= findHeroesById(id);
                if (heroe!== undefined){
                        resolve(heroe);
                }else{
                        reject(`No se puede encontrar el heroe ${id}`);
                }
        },2000)
        });
};

getHeroeByIdAsync(22)
        .then((heroe)=>{
                console.log(heroe)
        })
        .catch(console.warn); // es lo mismo .catch(err=> console.warn(err));