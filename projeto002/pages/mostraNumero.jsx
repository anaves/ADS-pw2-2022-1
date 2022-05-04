import { useState } from "react";

export default function init(){
    const [valor,setValor] = useState(0)

    return (
        <div>
            <h1>{valor}</h1>
            <button>+</button>
        </div>
    )

}