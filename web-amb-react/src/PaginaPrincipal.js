import Nav from "./Nav";
import TitolPag from "./TitolPag";
import { useState } from "react";

function PaginaPrincipal(){
    let [contador, setContador] = useState(0);
    function incrementarValor(){
        console.log(contador);
        setContador("a") //això sobreescriu el primer paràmetre, setContador(contador+1) o el que vulguis
    }
    return (
        <div>
            <Nav/>
            <TitolPag titol='Titol Pagina Principal ficat per props' subtitol="subtitol props" />
            <p>{contador}</p>
            <button onClick={incrementarValor}>Incrementar</button>
            <div>
                <p></p>
                <button></button>
                <button></button>
                <p></p>
                <p></p>
            </div>
            <footer>
                <p>Copyright 2022 C</p>
            </footer>
        </div>
    )
}

export default PaginaPrincipal;