const apiKey = "4c49d208f2cc6c5c734bb0f3ddecc6c3";
let cidade;



var data = new Date();

const day = data.getDate();
const month = data.getMonth() + 1;
const year = data.getUTCFullYear();

var dataAtual = `${day}/${month}/${year}`
console.log(dataAtual)

var dataMes =document.getElementById("data").textContent = dataAtual







function callApi(){
    let lingua = "pt_br"
    let unidade = "metric"
    let inputSearch = document.getElementById("text-input")
    let inputValue = inputSearch.value
    cidade = inputValue;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=${lingua}&units=${unidade}`
    fetch(url)
    .then(Response => {
        if(!Response.ok){
            throw new Error(`Erro na solicitacao : ${Response.status}`)
        }

        return Response.json();
    })

    .then(data => {
        const iconCode = data.weather[0].icon

        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const iconHtml = `<img src="${iconUrl}" alt="Weather Icon">`;

        console.log(data);
        document.getElementById("cidade-nome").textContent = data.name
        document.getElementById("descricao-tempo").textContent = data.weather[0].description;
        document.getElementById("temperatura").innerHTML = parseInt(data.main.temp) + "°C"
        document.getElementById("vento").innerHTML = data.wind.speed + "Km/h"
        document.getElementById("sensacao").innerHTML = parseInt(data.main.feels_like) + "°C"
        document.getElementById("umidade").innerHTML = data.main.humidity + "%"
        document.getElementById("icone-tempo").innerHTML = iconHtml
    })
    .catch(error => {
        console.error(error);
    })

    

}

var btnSearch = document.getElementById("btn-search")


btnSearch.addEventListener("click", ()=>{
    callApi()

})


