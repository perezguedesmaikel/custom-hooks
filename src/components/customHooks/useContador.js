
import {useState} from "react";

 const useContador=(initialvalue=0)=>{
    const [contador,setContador]=useState(initialvalue);
    const increase=()=>setContador(contador+1);
    const decrement=()=>setContador(contador-1);
    const reset=()=>setContador(0);
    return{
        contador,
        increase,
        decrement,
        reset,
    }
}
export default useContador;