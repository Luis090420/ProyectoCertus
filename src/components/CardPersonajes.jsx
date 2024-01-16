export const CardPersonajes=(props)=>{
    return(
       <div className="cardPersonaje">
        <img src={`/img/${props.imagen}`} alt=""/>
        <div>
            <h2>{props.nombre}</h2>
            <p>{props.estado}</p>
            <p>{props.rango}</p>
            <p>{props.aldea}</p>
        </div>

       </div>   
    )
}   