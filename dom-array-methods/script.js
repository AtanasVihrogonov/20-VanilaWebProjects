const main = document.getElementById('main');
const addPersonBtn = document.getElementById('add-person');
const doubleWorthBtn = document.getElementById('double-worth');
const sortByRichestBtn = document.getElementById('show-richest');
const sortByLessMoneyBtn = document.getElementById('show-poor');
const showOnlyMillionaireBtn = document.getElementById('show-millionaire');
const calculateTotalWorthBtn = document.getElementById('calculate-worth');

let data = [];
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

  updateDOM();
};

// Update DOM
function updateDOM(providedData = data) {
  // Clear the main div
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`;
    main.appendChild(element);
  });
};

// Double everyons money
function doubleMoney() {
  // Reassigning data arr to the same data arr and map through it
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
};

// Sort the richest person
function sortRichest() {

};

// Format number as money
function formatMoney(number) {
  return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// Event listeners
addPersonBtn.addEventListener('click', getRandomUser);
doubleWorthBtn.addEventListener('click', doubleMoney);
sortByRichestBtn.addEventListener('click', sortRichest);
sortByLessMoneyBtn.addEventListener('click', sortLessMoney);
showOnlyMillionaireBtn.addEventListener('click', showOnlyMillionaire);
calculateTotalWorthBtn.addEventListener('click', calculateTotalWorth);