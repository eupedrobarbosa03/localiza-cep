export interface TypeCEP {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    ddd: string;  
};

interface InvalidCEP {
    erro: true
};

type Data = TypeCEP | InvalidCEP;

export async function getCEP(cep: string){
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data: Data = await response.json();
        if ('erro' in data) return false;
        return data;
    } catch (error) {
        console.error(error);
    }
};