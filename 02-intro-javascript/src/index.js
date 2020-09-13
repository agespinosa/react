import {heroes} from "./data/heroes";

const findHeroesById= (valor)=>(heroes.find(e=> e.id===valor))
console.log(findHeroesById(2))

const getHeroesByOwners= (valor)=> {
        return heroes.filter(e=> e.owner===valor)
};
console.log(getHeroesByOwners('Marvel'));