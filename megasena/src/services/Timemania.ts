import { TimemaniaProps } from "../types";
import api from "./api";

class Timemania{
    async get():Promise<TimemaniaProps>{
        await delay(2000);
        const{data} = await api.get('/');
        return data;
    }
}
const delay = (ms:number) => new Promise((resolve)=>setTimeout(resolve,ms));

const timemania1 = new Timemania();
export default timemania1;