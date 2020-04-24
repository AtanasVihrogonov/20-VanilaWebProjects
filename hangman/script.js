const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.getElementById('figure-part');

const words = ['application', 'programming', 'wizard', 'interface'];
// Random generated from arrat of words
const selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

// Show the hidden word
function displayWords() {
  // Turn a string into a array and map through it
  wordEl.innerHTML = `
  ${selectedWord
    .split('') // --> split by letter. Is the current letter we're looping through included in correct letters
    .map(
      letter => `  
        <span class="letter">
          ${correctLetters.includes(letter) ? letter : ''}
        </span>
      `
    )
    .join('')}
  `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulation! You won! 😃';
    popup.style.display = 'flex';
  }
}

// Update wrong letters
function updateWrongLettersEl() {
  console.log('Update wrong');
};

// Show notification
function showNotification() {
  // Add and remove show class
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
};

// Keydown letter press
window.addEventListener('keydown', e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      // Push the letter on to correct letters array, but only if it's not already there
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWords();
      } else {
        showNotification();
      }

    } else {

      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);

        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

displayWords();
