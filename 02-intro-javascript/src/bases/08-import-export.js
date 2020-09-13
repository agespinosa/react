//import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";

export const findHeroesById= (valor)=>(heroes.find(e=> e.id===valor))
//console.log(findHeroesById(2))

export const getHeroesByOwners= (valor)=> {
        return heroes.filter(e=> e.owner===valor)
};
//console.log(getHeroesByOwners('Marvel'));
//console.log(owners);