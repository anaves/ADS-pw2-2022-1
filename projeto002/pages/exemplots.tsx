import Pessoa from "../componentes/Pessoa";

export default function exemploTS(){
    return (
        <div>
            <Pessoa nome="Cebolinha"/>
            <Pessoa nome="Monica" idade={10}/>
        </div>
    )
}