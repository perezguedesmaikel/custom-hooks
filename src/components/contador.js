import React from "react";
import useContador from "./customHooks/useContador";
function Contador() {
const {contador, increase,decrement,reset}=useContador();
const contadorLeft=useContador(25);
const contadorRigth=useContador(20);
    return(
        <div>
            <h1>Usando Custom Hooks</h1>
            <h1>{contador}</h1>
            <button onClick={increase}>Aumentar</button>
            <button onClick={decrement}>Restar</button>
            <button onClick={reset}>Reiniciar</button>
            <div>{contadorLeft.contador}</div>
            <button onClick={contadorLeft.increase}>Incrementar</button>
            <div>{contadorRigth.contador}</div>
            <button onClick={contadorRigth.increase}>Incrementar</button>
        </div>

    )

}
export default Contador;