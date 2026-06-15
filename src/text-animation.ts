type PhrasesIndentifiers = {
    type: "title-presentation" | "sub-title-presentation",
    text: string;
};

const phrases: PhrasesIndentifiers[] = [
    {
        type: "title-presentation",
        text: "Descubra as informações do seu CEP através do LOCALIZACEP!"
    }, 
    {
        type: "sub-title-presentation",
        text: "Serviço gratuito e seguro."
    }
];

function textAnimation() {
    phrases.forEach((phrase) => {
        const element = document.querySelector(`#${phrase.type}`) as HTMLTitleElement;
        for (let i = 0; i < phrase.text.length; i++) {
            setTimeout(() => {
                element.textContent += phrase.text[i];  
            }, i * 90);
        };
    });
};

export const animation = textAnimation;

