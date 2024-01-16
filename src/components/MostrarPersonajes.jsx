import { personajes } from "../utils/DataPersonajes"
import { CardPersonajes } from "./CardPersonajes"

export const MostrarPersonajes=()=>{
    return(
        <div className="container">
           <div className="contenedorPersonajes"> {
            personajes.map((personajes)=>(<CardPersonajes key={personajes.nombre} {...personajes}/>))
            }</div>
        </div>
        
    )
    
}