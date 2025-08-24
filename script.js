const USD = 5.2
const EUR = 5.9
const GBP = 6.8
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input para receber somente numeros
amount.addEventListener("input", () => {
 const hasCharactersRegex = /\D+/g
 amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Capturando o evento de submit do formulario
form.onsubmit = (event) => {
 event.preventDefault()

 switch (currency.value) {
  case "USD": convertCurrency(amount.value, USD, "$")
  break
  case "EUR": convertCurrency(amount.value, EUR, "€")
  break
  case "GBP": convertCurrency(amount.value, GBP, "£")
  break
}
}

//função para converter a moeda
function convertCurrency(amount, price, symbol) {
try {
  description.textContent = `${symbol} 1 = ${price}`
  let total = amount * price
  if (isNaN(total)){
    return alert("Por favor, insira um valor válido.")
  }
  result.textContent = formatCurrencyBRL(total).replace ("R$", " ")
  //aplica a classe que exibe o footer com resultado da conversão
  footer.classList.add("show-result")
} catch (error){
  //remove a classe que exibe o footer com resultado da conversão
  footer.classList.remove("show-result")
    alert("Ocorreu um erro, tente novamente mais tarde.")
  }
}

function formatCurrencyBRL(value)
{
  return Number (value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
}