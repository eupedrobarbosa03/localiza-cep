import { getCEP } from "./api.js";
import {} from "./api.js";
class CEP {
    cep;
    inputCEP;
    buttonSearchCEP;
    messageError;
    containerInformationsCEP;
    constructor() {
        this.cep = "";
        this.inputCEP = document.querySelector("#input-cep");
        this.buttonSearchCEP = document.querySelector("#button-search-cep");
        this.messageError = document.querySelector("#message-error");
        this.containerInformationsCEP = document.querySelector("#container-informations-cep");
    }
    ;
    error(message, show) {
        if (show) {
            this.messageError.classList.add("show");
            this.messageError.textContent = message;
            return;
        }
        this.messageError.classList.remove("show");
        this.messageError.textContent = '';
    }
    ;
    validation() {
        const regExpCEP = /(^\d{5}-\d{3}$)|(^\d{8}$)/gim;
        const cepIsValid = this.inputCEP.value.match(regExpCEP);
        if (!cepIsValid) {
            this.error("CEP inválido. Tente novamente.", true);
            return false;
        }
        ;
        this.error("", false);
        const cep = cepIsValid.join("").replace("-", "");
        this.cep = cep;
        return true;
    }
    ;
    templateInformationsCEP(value) {
        this.containerInformationsCEP.classList.add("show");
        this.containerInformationsCEP.innerHTML =
            `
            <div id="container-flag-state-and-name">
                    <img src="assets/flags_uf/${value.uf.toLowerCase()}.png">
                    <p>${value.estado}</p>
                </div>
                <div id="informations-cep">
                    <p>CEP: <span id="info-cep" class="info-style">${value.cep}</span></p>
                    <p>UF: <span id="info-uf" class="info-style">${value.uf}</span></p>
                    <p>Estado: <span id="info-estado" class="info-style">${value.estado}</span></p>
                    <p>Região: <span id="info-regiao" class="info-style">${value.regiao}</span></p>
                    <p>Bairro: <span id="info-bairro" class="info-style">${value.bairro}</span></p>
                    <p>Localidade: <span id="info-localidade" class="info-style">${value.localidade}</span></p>
                    <p>DDD: <span id="info-ddd" class="info-style">${value.ddd}</span></p>
                    <p>Logradouro: <span id="info-logradouro" class="info-style">${value.logradouro}</span></p>
                    <p>IBGE: <span id="info-ibge" class="info-style">${value.ibge}</span></p>
            </div>
        `;
    }
    ;
    async search() {
        if (!this.validation())
            return;
        this.buttonSearchCEP.textContent = '...';
        const getCep = await getCEP(this.cep);
        if (!getCep) {
            this.error("CEP não encontrado...", true);
            this.buttonSearchCEP.textContent = 'Pesquisar';
            return;
        }
        this.buttonSearchCEP.textContent = 'Pesquisar';
        this.templateInformationsCEP(getCep);
        const flag = document.querySelector(`#${getCep.uf.toLowerCase()}`);
        flag.classList.add("blink");
        this.error("", false);
    }
}
;
const cep = new CEP();
export function applicationLocalizaCEP() {
    cep.inputCEP.addEventListener("input", () => {
        cep.containerInformationsCEP.classList.remove("show");
        const flags = document.querySelectorAll(".flag-uf");
        flags.forEach((flag) => flag.classList.remove("blink"));
        cep.error("", false);
    });
    cep.buttonSearchCEP.addEventListener("click", () => {
        cep.search();
    });
}
;
