// Form.tsx
import {useContext} from "react";
import {Contexto} from "../contexts/Contexto";

export default function Form(){
    const {nome,idade,setNome,setIdade} = useContext(Contexto);
    return <>
        <div>
            <label>Nome</label>
            <input value={nome} onChange={(e)=>setNome(e.target.value)} />
        </div>
        <div>
            <label>Idade</label>
            <input value={idade} onChange={(e)=>setIdade(e.target.value)} />
        </div>
    </>;
}

