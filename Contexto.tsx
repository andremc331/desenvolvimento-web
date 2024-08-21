// Contexto.tsx
import { createContext, useState } from "react";
import { ContextoProps } from "../types";

export const Contexto = createContext({} as ContextoProps);

export function Provedor({children}:any){
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");

    return (
        <Contexto.Provider value={{nome,idade,setNome,setIdade}}>
            {children}
        </Contexto.Provider>
    );
}
