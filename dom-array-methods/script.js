const main = document.getElementById('main');
const addPerson = document.getElementById('add-person');
const doubleWorth = document.getElementById('double-worth');
const sortByRichest = document.getElementById('show-richest');
const sortByLessMoney = document.getElementById('show-poor');
const showOnlyMillionaire = document.getElementById('show-millionaire');
const calculateTotalWorth = document.getElementById('calculate-worth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
};

// Add new object to data array
function addData(obj) {
  data.push(obj);
};




main.addEventListener('click', () => {

});

addPerson.addEventListener('click', () => {

});

doubleWorth.addEventListener('click', () => {

});

sortByRichest.addEventListener('click', () => {

});

sortByLessMoney.addEventListener('click', () => {

});

showOnlyMillionaire.addEventListener('click', () => {

});

calculateTotalWorth.addEventListener('click', () => {

});