let title = document.querySelector("#title");
let result = document.querySelector("#result");
let btn = document.querySelector("#adviceBtn");

btn.addEventListener("click", pegarConselho);
async function pegarConselho() {
    try {
        let capturar = await fetch("https://api.adviceslip.com/advice").then(r => r.json());
        let resultado = capturar.slip
        title.innerHTML = `ADVICE #${resultado.id}`
        result.innerHTML = `"${resultado.advice}"`
    } catch {

    } finally {
        console.log("fim")
    }
}

pegarConselho();