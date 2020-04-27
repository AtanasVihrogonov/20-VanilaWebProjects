const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransaction = [
  { id=1, text: 'Online Course', amount: -20 },
  { id=2, text: 'Work', amount: 300 },
  { id=3, text: 'Phone screen', amount: -10 },
  { id=4, text: 'Cashback', amount: 70 }
];

let transaction = dummyTransaction;

// Add transactions to DOM list
function addTransactionDOM(transaction) {
  // 1.Get sign
  
}
