const generatorButton = document.querySelector("button")
const advice = document.querySelector(".advice")
const adviceText = document.querySelector("h1")

async function criarConselho(){
    const url = "https://api.adviceslip.com/advice"
    const resposta =  await fetch(url)
    return await resposta.json()
}

async function gerarConselho(slip_id){
    const url =`https://api.adviceslip.com/advice/${slip_id}`
    const resposta = await fetch(url)
    return await resposta.json()
}



async function gerarConselhoAleatorio(){
    const conselho = await criarConselho()
    adviceText.innerHTML = conselho.slip.advice
    advice.innerHTML = `#${conselho.slip.id}`  
    console.log(conselho)
}

generatorButton.addEventListener("click", gerarConselhoAleatorio);

gerarConselhoAleatorio()



// GeneratorButton.addEventListener('click', function(){
//     const url = "https://api.adviceslip.com/advice"
//     const 


// })

