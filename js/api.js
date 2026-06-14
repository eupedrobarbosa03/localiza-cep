;
;
export async function getCEP(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if ('erro' in data)
            return false;
        return data;
    }
    catch (error) {
        console.error(error);
    }
}
;
