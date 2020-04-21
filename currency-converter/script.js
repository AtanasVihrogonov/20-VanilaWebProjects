const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');

const btn = document.getElementById('swap');
const rateEl = document.getElementById('rate');

const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');

// Fetch exchange rates and update the DOM
function calculate() {
  // Get the currency value
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;

  fetch(`https://prime.exchangerate-api.com/v5/67de66e702090ee138ef3bdd/latest/${currency_one}`)
  .then(res => res.json())
  .then(data => {
    const rate = data.conversion_rates[currency_two];
    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
    amountTwo.value = (amountOne.value * rate).toFixed(2);
  });
};

// Event listeners
currencyOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);

currencyTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

btn.addEventListener('click', () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();