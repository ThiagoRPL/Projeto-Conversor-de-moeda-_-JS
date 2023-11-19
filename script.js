const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor real
    const currencyValueToConverted = document.querySelector(".converted-value") // outras moedas 
   
   
    const dollarToday = 4.95
    const euroToday = 6.00
    const libraToday = 6.11
    const btcToday = 181.671
    
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
       
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", 
        { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
   
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
}
function changeCurrency() {
    
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")
   if (currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src="Assets/euaflag.ico"
   }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src="Assets/flagEURO.png"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src="Assets/flagLibra.png"

    }
    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src="Assets/flagBitcoin.ico"
    }
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)