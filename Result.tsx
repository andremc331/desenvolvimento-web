// Result.tsx

import { useContext } from "react";
import { Contexto } from "../contexts/Contexto";

export default function Result(){
    const {nome,idade} = useContext(Contexto);
    
    return <>
        <div>Nome: {nome}</div>
        <div>Idade: {idade}</div>
    </>;
}
