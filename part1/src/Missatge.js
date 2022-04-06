/* Utilitzant props en aquest component, se li posa x parametre props i despres li pots passar deesde el lloc on l'invoques totes les props que vulguis. */

function Missatge(props){
    return(
        <div>
            <p>{props.message}</p>
            <p>{props.altreMessage}</p>
        </div>
    ) 
}

export default Missatge;