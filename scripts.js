const key = "4c49d208f2cc6c5c734bb0f3ddecc6c3"


function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".temp").innerHTML = dados.main.temp + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
}   

async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}