import { api } from "./api";

export default async function getCep(nro:string){
    const {data} = await api.get(`/${nro}/json`);
    return data;
}

// https://viacep.com.br/ws/12328070/json

//////////////////////////////////////////////

import { api } from "./api";

class Cep {
    async get(nro:string){
    const {data} = await api.get(`/${nro}/json`);
    return data;
    }
}

const objeto = new Cep();
export default objeto;
