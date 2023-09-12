const currencyFirstEl = document.getElementById("currency_first");
const worthFirstEl = document.getElementById("worth_first");
const currencySecondEl = document.getElementById("currency_second");
const worthSecondEl = document.getElementById("worth_second");
const exchangeRateEl = document.getElementById("exchange_rate");

updateRate()

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/e0947f78e9fe06055d1b51a2/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {const rate = data.conversion_rates[currencySecondEl.value];
        console.log(data);
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
    });
}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);

