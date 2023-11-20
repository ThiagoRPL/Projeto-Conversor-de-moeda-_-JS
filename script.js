const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect0 = document.querySelector(".currency-select-0")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor real
    const currencyValueToConverted = document.querySelector(".converted-value") // outras moedas 
   
    const realToday = 1.00
    const dollarToday = 4.95
    const euroToday = 6.00
    const libraToday = 6.11
    const btcToday = 181.671
    if (currencySelect.value == "real") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValue / dollarToday)
        
    }
    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    
    if (currencySelect.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency", currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency", currency: "BTC"
        }).format(inputCurrencyValue / btcToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",
    { style: "currency", currency: "BRL" }).format(inputCurrencyValue)

}
function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "Assets/euaflag.ico"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "Assets/flagEURO.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "Assets/flagLibra.png"

    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "Assets/flagBitcoin.ico"
    }
}
function changeConvert() {
    const currencyName0 = document.getElementById("currency-name-0")
    const currencyImage0 = document.querySelector(".currency-img-0")
    
    if (currencySelect0.value == "real") {
        currencyName0.innerHTML = "Real"
        currencyImage0.src = "Assets/flagBrasil.ico"
    }



    if (currencySelect0.value == "dolar") {
        currencyName0.innerHTML = "Dólar"
        currencyImage0.src = "Assets/euaflag.ico"
    }

    if (currencySelect0.value == "euro") {
        currencyName0.innerHTML = "Euro"
        currencyImage0.src = "Assets/flagEURO.png"
    }

    if (currencySelect0.value == "libra") {
        currencyName0.innerHTML = "Libra"
        currencyImage0.src = "Assets/flagLibra.png"

    }
    if (currencySelect0.value == "bitcoin") {
        currencyName0.innerHTML = "Bitcoin"
        currencyImage0.src = "Assets/flagBitcoin.ico"
    }

}

currencySelect0.addEventListener("change", changeConvert)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)