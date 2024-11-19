import {  useState } from "react";
import { createContext } from "vm";
import { Props, ProviderProps, QuinaContextProps } from "../types";


export const QuinaContext = createContext({} as QuinaContextProps);

export function QuinaProvider({children}:ProviderProps){
    const [quina,setQuina]= useState<Props|undefined>();
    return (<QuinaContext.Provider value={{quina}}>
        {children}
    </QuinaContext.Provider>

    )
}