import { QuinaProps } from "../types";
import api from "./api";

class Quina{
    async get():Promise<QuinaProps>{
        await delay(2000);
        const{data} = await api.get('/');
        return data;
    }
}
const delay = (ms:number) => new Promise((resolve)=>setTimeout(resolve,ms));

const quina1 = new Quina();
export default quina1;