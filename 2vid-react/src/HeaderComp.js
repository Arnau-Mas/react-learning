import { useState } from "react";

const HeaderComp = () =>{
    let [contador, setContador] = useState(0);
    let missatge = "És par";
    
    if(contador%2===0){
        missatge = "És par";
    }else{
        missatge = "És impar";
    }

    function incrementarCount(){
        setContador(contador+1);
    }

    return (
        <header>
            <h1>Provant coses</h1>
            <p>Contador aqui: {contador}</p>
            <p>És par? {missatge}</p>
            <button onClick={incrementarCount}>Incrementar</button>
        </header>
    )
}

export default HeaderComp;