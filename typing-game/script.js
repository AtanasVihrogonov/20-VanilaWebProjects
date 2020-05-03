const settingsBtn = document.getElementById('settings-btn');
const settingsForm = document.getElementById('settings-form');
const settings = document.getElementById('settings');
const difficultySelect = document.getElementById('difficulty');
const word = document.getElementById('word');
const text = document.getElementById('text');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const endGameEl = document.getElementById('end-game-container');
const roleEl = document.querySelector('.role');
let random;
// Init score
let score = 0;

// Init time
let time = 10;

// Set defficulty to value in LS or | medium
let difficulty = 
  localStorage.getItem('difficulty-level') !== null
    ? localStorage.getItem('difficulty-level')
    : 'medium';

// Set fifficulty select value
difficultySelect.value = 
  localStorage.getItem('difficulty-level') !== null
    ? localStorage.getItem('difficulty-level')
    : 'medium';

// Focus on text om start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Fetch words from API
function getWords() {
  const word = fetch(`https://random-word-api.herokuapp.com/word?number=1`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data[0])
      return data[0];
    });

  return word;
};

// Add word to DOM
function addWordToDOM() {
  getWords().then((randomWord) => {
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

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);

    // End game
    gameOver();
  }
};

// Game over, show end screen
function gameOver() {
  // Add to DOM
  endGameEl.innerHTML = `
    <h1>Time run out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="window.location.reload()">Reload</button>
  `;

  // Change display to flex on css --> line 117
  endGameEl.style.display = 'flex';
};

// Event listeners

// Typing
text.addEventListener('input', (e) => {
  const insertedText = e.target.value;
  console.log('123', insertedText, random);
  if (insertedText === random) {
    console.log('123', insertedText, random);
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    if (difficulty === 'hard') {
      time += 4;
    } else if (difficulty === 'medium') {
      time += 6;
    } else {
      time += 8;
    }

    updateTime();
  }
});

// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide')); 
settingsBtn.addEventListener('click', () => roleEl.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;

  // Add to LS
  localStorage.setItem('difficulty-level', difficulty);
});
