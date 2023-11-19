const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select")

function convertValues() {
    const inputCurrencyValues = document.querySelector(".input").value
    const currencyValueToConvert = document.querySelector(".currency-value-real") // valor real
    const currencyValueToConverted = document.querySelector(".converted-value") // outras moedas 
    const dollarToday = 4.95
    const euroToday = 6.00

    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(inputCurrencyValues/dollarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(inputCurrencyValues/euroToday)
    }




    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValues)


}


convertButton.addEventListener("click", convertValues)