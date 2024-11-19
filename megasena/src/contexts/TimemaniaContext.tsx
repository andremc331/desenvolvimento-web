import {  useState } from "react";
import { createContext } from "vm";
import { Props, ProviderProps, TimemaniaContextProps } from "../types";


export const TimemaniaContext = createContext({} as TimemaniaContextProps);

export function TimemaniaProvider({children}:ProviderProps){
    const [timemania,setTimemania]= useState<Props|undefined>();
    return (<TimemaniaContext.Provider value={{timemania}}>
        {children}
    </TimemaniaContext.Provider>

    )
}