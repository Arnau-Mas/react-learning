import Nav from "./Nav";
import TitolPag from "./TitolPag";
import { useState } from "react";

function PaginaPrincipal(){
    let [contador, setContador] = useState(0);
    function incrementarValor(){
        setContador(contador+1)
    }
    console.log(contador)
    return (
        <div>
            <Nav/>
            <TitolPag titol='Titol Pagina Principal ficat per props' subtitol="subtitol props" />
            <p>{contador}</p>
            <button onClick={incrementarValor}>Incrementar</button>
            <footer>
                <p>Copyright 2022 C</p>
            </footer>
        </div>
    )
}

export default PaginaPrincipal;