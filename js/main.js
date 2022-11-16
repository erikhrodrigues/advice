let title = document.querySelector("#title");
let result = document.querySelector("#result");
let btn = document.querySelector("#adviceBtn");

//Escutar botão
btn.addEventListener("click", pegarConselho);

//Mostrar mensagem
async function pegarConselho() {
    try {
        let capturar = await fetch("https://api.adviceslip.com/advice").then(r => r.json());
        let resultado = capturar.slip
        title.innerHTML = `ADVICE #${resultado.id}`
        result.innerHTML = `"${resultado.advice}"`
    } catch (erro){
        result.innerHTML = `Ops, aconteceu um erro! <br> Serviço temporareamente fora do ar.`
    }
}

//Primeiro conselho
pegarConselho();