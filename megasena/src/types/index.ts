import { ReactNode } from "react";

export interface LotteryContextProps{
    megasena:Props | undefined
}

export interface QuinaContextProps{
    quina:Props | undefined;
}

export interface TimemaniaContextProps{
    timemania:Props | undefined;
}

export interface LotteryProps{
    megasena:Props;

}

export interface TimemaniaProps{
    timemania:Props;

}

  export interface QuinaProps{
    quina:Props;
}

export interface Props{
    acumulado: boolean;
    concursoEspecial:boolean;
    dataApuracao:string;
    dataPorExtenso:string;
    dataProximoConcurso:string;
    dezenas:string[];
    numeroDoConcurso:number;
    quantidadeGanhadores:number;
    tipoPublicacao:number;
    tipoJogo:string;
    valorEstimadoProximoConcurso:number;
    valorPremio:number;
}

 export interface LotteryResultProps {
    megasena: LotteryProps['megasena'];
  }

  export interface TimemaniaResultProps {
    timemania: TimemaniaProps['timemania'];
  }

  export interface QuinaResultProps {
    quina: QuinaProps['quina'];
  }

  export interface ProviderProps{
    children:ReactNode;
}