import { useState } from "react";
import MostraNumero from "../componentes/MostraNumero";

export default function init(){
    const [valor,setValor] = useState(0)
    
    return (
        <div>
            <MostraNumero numero={valor}/>
            <button>+</button>
        </div>
    )

}