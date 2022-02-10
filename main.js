let currency = document.getElementById("currency")
let url = 'https://openexchangerates.org/api/latest.json?app_id=47bb71c0c44b47fe805433a34d7cdfdb'
let output = document.getElementById('output')
let display = document.querySelector("#display")




fetch(url)
.then(res => res.json())
.then((data) => {
  for (let [key, value] of Object.entries(data.rates)) {
  currency.innerHTML += `<option>${key}</option>`

  convert.addEventListener("click", (e) => {
  let key2 = currency.options[currency.selectedIndex].value
  let key3 = data.rates[key2]
  // my key3 isnt being multiplied by the increasing usd amount
  // order matters. it needs to read the output box and then * by the key values form the object
  let trueValue = output.value * key3;
  display.innerHTML = trueValue;
  })
  };



});