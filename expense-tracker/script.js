const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
  { id: 1, text: 'Online Course', amount: -20 },
  { id: 2, text: 'Work', amount: 300 },
  { id: 3, text: 'Phone Screen', amount: -10 },
  { id: 4, text: 'Cashback', amount: 70 }
];

let transactions = dummyTransactions;

// Add transactions to DOM list
function addTransactionDOM(transaction) {
  // 1.Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  // 2.Create new element
  const item = document.createElement('li');

  // 3.Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

  item.innerHTML = `
    ${transaction.text} 
    <span>${sign}${Math.abs(transaction.amount)}</span> 
    <button class="delete-btn">x</button>
  `;

  list.appendChild(item);
};

// Update the balance, income and expense
function updateValues() {
  // Create an array just for amounts
  const amounts = transactions.map(transaction => transaction.amount);

  // Calculate total amount
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item)
    .toFixed(2));

  const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);

  // console.log(expense);
  // console.log(income);
  // console.log(total);
  // console.log(amounts);
  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
};

// Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);

  updateValues();
};

init();
