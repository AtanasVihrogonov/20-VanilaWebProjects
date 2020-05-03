const settingsBtn = document.getElementById('settings-btn');
const settingsForm = document.getElementById('settings-form');
const settings = document.getElementById('settings');
const difficultySelect = document.getElementById('difficulty');
const word = document.getElementById('word');
const text = document.getElementById('text');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const endGameEl = document.getElementById('end-game');

let random;
// Init score
let score = 0;

// Init time
let time = 10;

// Fetch words from API
function getWords() {
  const word = fetch(`https://random-word-api.herokuapp.com/word?number=1`)
    .then(res => res.json())
    .then(data => {
      // console.log(data[0])
      return data[0];
    });

    return word
};

// Add word to DOM
function addWordToDOM() {
  getWords().then(randomWord => {
    random = randomWord;
    word.innerHTML = random;
    console.log('123', random);
  });
};

addWordToDOM();

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
};

// Event listeners
text.addEventListener('input', e => {
  const insertedText = e.target.value;
  console.log('123', insertedText, random);
  if (insertedText === random) {
    console.log('123', insertedText, random);
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';
  }
});

