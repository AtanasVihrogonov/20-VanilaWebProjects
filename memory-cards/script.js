const clearBtn = document.getElementById('clear');
const showBtn = document.getElementById('show');
const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const addContainer = document.getElementById('add-container');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');

// Keep track of current card
let currentActiveCard = 0;

// Store the DOM cards
const cardsEl = [];

// Store card data
const cardsData = getCardsData();



// const cardsData = [
//   {
//     question: 'What must a variable begin with?',
//     answer: 'A letter, $ or _'
//   },
//   {
//     question: 'What is the variable?',
//     answer: 'Container for a piece of data'
//   },
//   {
//     question: 'Example of Case Sensitive Variable?',
//     answer: 'thisIsVariable'
//   }
// ];

// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
};

// Creare single card in DOM
function createCard(data, index) {
  // Construct the card
  const card = document.createElement('div');
  card.classList.add('card');

  // Add active class for the first card
  if (index === 0) {
    card.classList.add('active');
  }

  // Fill in html
  card.innerHTML = `
    <div class="inner-card">
      <div class="inner-card-front">
        <p>
          ${data.question}
        </p>
      </div>
      <div class="inner-card-back">
        <p>
        ${data.answer}
        </p>
      </div>
    </div>
  `;

  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  // Add to DOM cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);

  updateCurrentText();
};

// Show number of cards
function updateCurrentText() {
  currentEl.innerHTML = `${currentActiveCard + 1}/${cardsEl.length}`;
};

// Get cards from local storage
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem('cards'));
  return cards === null ? [] : cards;
};

// Add card to local storage
function setCardsData(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
  window.location.reload();
};

createCards();

// Event listeners

// Next button
nextBtn.addEventListener('click', () => {
  // Hide the card to rhe left
  cardsEl[currentActiveCard].className = 'card left'; // css-> line 84

  // Get the new card index
  currentActiveCard = currentActiveCard + 1;

  // Keep in the range
  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});

// Previous button
prevBtn.addEventListener('click', () => {
  // Hide the card to rhe left
  cardsEl[currentActiveCard].className = 'card right'; 

  // Get the new card index
  currentActiveCard = currentActiveCard - 1;

  // Keep in the range
  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});

// Show add container
showBtn.addEventListener('click', () => addContainer.classList.add('show')); // css-> line 172

// Hide add container
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));

// Add new card 
addCardBtn.addEventListener('click', () => {
  const question = questionEl.value;
  const answer = answerEl.value;
  // console.log(question, answer);

  if ( question.trim() && answer.trim() ) {
    const newCard = {question, answer};

    createCard(newCard);

    questionEl.value = '';
    answerEl.value = '';

    // Hide add contaiber
    addContainer.classList.remove('show');

    // Add new card to entire array
    cardsData.push(newCard);
    setCardsData(cardsData);
  }
});

// Clear cards button
clearBtn.addEventListener('click', () => {
  localStorage.clear();
  cardsContainer.innerHTML = '';
  window.location.reload();
});